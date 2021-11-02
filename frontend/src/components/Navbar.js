import React from 'react';
import './style.css';
import { AppBar, Toolbar, Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';

import { Link } from "react-router-dom";

import Search from './Search';
const Navbar = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );
    return (

            <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Box style={{ display: "flex" , flexDirection: "row" , justifyContent: "space-between" }}>
                    <Toolbar style={{ fontSize: "2rem"}}> <img src="https://cdn.pixabay.com/photo/2017/08/22/22/11/monogram-2670684_960_720.png" style={{ height: "2rem", width: "2rem", backgroundColor: "gray", border: "1px solid gray", borderRadius: "50%"}} /> Miraz ??</Toolbar>
                    <Toolbar> <Search /> </Toolbar>
                </Box>
                <Box style = {{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginBottom: "10px" }}>
                    <Link to="/search" className="navbar__link"><ManageSearchIcon /></Link>
                    <Link to="/images" className="navbar__link"> <PhotoSizeSelectActualIcon /></Link>
                    <Link to="/videos" className="navbar__link"><VideoLibraryIcon /></Link>
                    <Link to="/news" className="navbar__link"><AnnouncementIcon /></Link>
                </Box>
            </AppBar>
            </ThemeProvider>

    )
}

export default Navbar
