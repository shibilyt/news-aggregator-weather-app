import React, { useState } from "react";

import logo from "../assets/logonews-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Weather from "./Weather";
import SearchInput from "./SearchInput";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.dark.main,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: 25,
    [theme.breakpoints.up("sm")]: {
      height: 30,
    },
    [theme.breakpoints.up("md")]: {
      height: 40,
    },
  },
  linkSection: {
    display: "flex",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
}));

export default function Header({
  setSearch,
  weatherOpen,
  handleWeatherOpen,
  handleWeatherClose,
}) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="The beautiful SNW log" className={classes.logo} />
        <SearchInput setSearch={setSearch} />

        <Hidden smDown>
          <Button
            variant="contained"
            color="primary"
            onClick={handleWeatherOpen}
          >
            Weather
          </Button>
        </Hidden>

        <Weather open={weatherOpen} handleClose={handleWeatherClose} />
      </Toolbar>
    </AppBar>
  );
}
