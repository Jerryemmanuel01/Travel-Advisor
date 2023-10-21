import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel advisor
        </Typography>
        <Box display="flex" className={classes.boxCon}>
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
    // <>
    //   <h1>headercsa</h1>
    // </>
  );
};

export default Header;
