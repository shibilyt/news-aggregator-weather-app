import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";

import sunIcon from "../assets/sun-icon.svg";
import useWeather from "../hooks/useWeather";
import { usePosition } from "../hooks/usePosition";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  weatherIcon: {
    width: 120,
  },
});

export default function Weather({ open, handleClose }) {
  const classes = useStyles();
  const { latitude, longitude } = usePosition();
  const { status, data } = useWeather(latitude, longitude);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog fullScreen={fullScreen} open={open} classes={{ paper: classes.paper }}>
      <DialogTitle>
        <Typography variant="h6" className={classes.header}>
          Weather
        </Typography>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box display="flex" justifyContent="space-around">
        <Box p={4}>
          {/* <img src={sunIcon} alt="sun icon" className={classes.sunIcon}/> */}
          {status === "success" &&
            (data.cod === 200 ? (
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather state"
                className={classes.weatherIcon}
              />
            ) : (
              <img src={sunIcon} alt="sun icon" className={classes.sunIcon} />
            ))}
        </Box>
        <Box display="flex" alignItems="center" p={4}>
          {status === "success" &&
            (data.cod === 200 ? (
              <>
                <Typography variant="body1">
                  It's currently {data.main.temp - 273.15}℃ out there with{" "}
                  {data.weather[0].description}
                </Typography>
              </>
            ) : null)}
        </Box>
      </Box>
    </Dialog>
  );
}
