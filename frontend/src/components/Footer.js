import React from 'react'
import { Typography, AppBar, Container, Toolbar} from '@mui/material';
const Footer = () => {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Typography variant="body1" color="inherit">
                © 2021  All copyright reserved
              </Typography>
              <Typography variant="h5">
                  Created By Miraz
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer
