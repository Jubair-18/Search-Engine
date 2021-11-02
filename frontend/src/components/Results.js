import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { useStateContext } from './context';
import { CircularProgress } from '@mui/material';

import './style.css';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();
console.log(results.entries)
  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <CircularProgress />;

  switch (location.pathname) {
    case '/search':
      return (
        <Box style={{ color: "white"}}>
          {results?.results?.map(({ link, title, description, cite}, index) => (
            <Box key={index} style={{ padding: "2rem", color: "white", borderBottom: "1px solid grey"}}>
              <a href={link} target="_blank" rel="noreferrer" style={{ color: "whitesmoke", textDecoration: "none"}}>
                  <Box style={{ display: "flex", flexDirection: "row"}}>
                  <Typography variant="p">{link.length > 30 ? link.substring(0, 30) : link}</Typography>
                  <Typography variant= "p"> {cite.span} </Typography>
                  </Box>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="p">{ description }</Typography>
              </a>
            </Box>
          ))}
        </Box>
      );
    case '/images':
      return (
        <Box className="images">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="image">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image?.src}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                  </CardContent>
                </Card>
            </a>
          ))}
        </Box>
      );
    case '/videos':
      return (
        <Box className="videos">
          {results?.results?.map((video, index) => (
            <Box key={index} className="video">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </Box>
          ))}
        </Box>
      );
      case '/news':
        return (
          <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          {results?.entries?.map(({ id, links, source, title }) => (
            <Box key={id} style={{ border: "1px solid grey", padding: "1rem", margin: ".5rem", width: "50%"}}>
              <a href={links?.[0].href} target="_blank" rel="noreferrer " style={{ color: "white", marginBottom: "1rem", textDecoration:"none"}}>
                <Typography variant="p">{title}</Typography>
              </a>
              <Box>
                <a href={source?.href} target="_blank" rel="noreferrer"> {source?.href}</a>
              </Box>
            </Box>
          ))}
        </Box>
        );
    default:
      return 'Error...';
  }
};