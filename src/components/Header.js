import React, { useState, useEffect } from "react";

import logo from "../assets/logonews-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
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
  linkSection: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function Header({ setSearch }) {
  const classes = useStyles();

  const [weatherOpen, setWeatherOpen] = useState(false);

  function handleWeatherOpen() {
    setWeatherOpen(true);
  }

  function handleWeatherClose() {
    setWeatherOpen(false);
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="The beautiful SNW log" />
        <SearchInput setSearch={setSearch} />

        <Button variant="contained" color="primary" onClick={handleWeatherOpen}>
          Current Weather
        </Button>

        <Weather open={weatherOpen} handleClose={handleWeatherClose} />
      </Toolbar>
    </AppBar>
  );
}

