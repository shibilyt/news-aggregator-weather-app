import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import SvgIcon from "@material-ui/core/SvgIcon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import sunIcon from "../assets/sun-icon.svg";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useWeather from "../hooks/useWeather";
import useCityWeather from "../hooks/useCityWeather";
import { usePosition } from "../hooks/usePosition";

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
  sunIcon: {
    width: 120,
  },
  locationNotPermitted: {
    fontSize: 18,
  },
});

export default function Weather({ open, handleClose }) {
  const classes = useStyles();

  // custom hook to use the native geolocation API
  const { latitude, longitude } = usePosition();

  // custom hook on top of useQuery to handle weather API call when location allowed
  const { status, data } = useWeather(latitude, longitude);

  // Fullscreen dialog open on smaller screens
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      classes={{ paper: classes.paper }}
    >
      <DialogTitle>
        <Typography variant="h6" className={classes.header}>
          Weather
        </Typography>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/*Display Search box when location permission is blocked */}
      {!(latitude || longitude) ? (
        <CitySearch classes={classes} />
      ) : (
        <Box display="flex" justifyContent="space-around">
          <Box p={4}>
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
                <Box>
                  <Box display="flex" mb={2}>
                    <SvgIcon>
                      <LocationOnIcon />
                    </SvgIcon>{" "}
                    <Typography>{data.name}</Typography>
                  </Box>
                  <Typography variant="body1">
                    It's currently {data.main.temp - 273.15}℃ out there with{" "}
                    {data.weather[0].description}
                  </Typography>
                </Box>
              ) : null)}
          </Box>
        </Box>
      )}
    </Dialog>
  );
}

/*

Here, the city state is used to make the API call using useCityWeather hook

The city state will change every keystroke, So the query is disabled by default.

We use refetch method returned by useCityWeather hook (originally returned from useQuery)
to handle api call when search button is clicked. 

*/

function CitySearch({ classes }) {
  //store city value here
  const [city, setCity] = useState("");
  // custom hook with useQuery to handle city search on weather api
  const {
    status: cityWeatherStatus,
    data: cityWeatherData,
    refetch,
  } = useCityWeather(city);

  return (
    <Box display="flex" justifyContent="space-around">
      <Box p={4}>
        {cityWeatherStatus === "success" && cityWeatherData.cod === 200 ? (
          <img
            src={`http://openweathermap.org/img/w/${cityWeatherData.weather[0].icon}.png`}
            alt="weather state"
            className={classes.weatherIcon}
          />
        ) : (
          <img src={sunIcon} alt="sun icon" className={classes.sunIcon} />
        )}
      </Box>
      <Box display="flex" alignItems="center" p={4}>
        <Box display="flex" flexDirection="column">
          <Typography className={classes.locationNotPermitted}>
            Location permission not allowed. Search by city.
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={refetch}>
            Search
          </Button>

          {cityWeatherStatus === "success" &&
            (cityWeatherData.cod === 200 ? (
              <Box>
                <Box display="flex" my={2}>
                  <SvgIcon>
                    <LocationOnIcon />
                  </SvgIcon>{" "}
                  <Typography>{cityWeatherData.name}</Typography>
                </Box>
                <Typography variant="body1">
                  It's currently {cityWeatherData.main.temp - 273.15}℃ out there
                  with {cityWeatherData.weather[0].description}
                </Typography>
              </Box>
            ) : null)}
        </Box>
      </Box>
    </Box>
  );
}
