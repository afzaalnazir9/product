import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import {Box, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

import logo from "../asset/images/logo.svg";

function Navbar() {
  const useStyles = styled((theme) =>
    styled({
      menuButton: {
        marginRight: theme.spacing(2),
      },
      logo: {
        maxWidth: 40,
        marginRight: "10px",
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "0 0",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              textDecoration: "none",
            }}
            component={NavLink}
            to="/"
          >
            <Box
              component="img"
              src={logo}
              alt="elevon"
              className={classes.logo}
            />
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
