import React, { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {},
}));

export default function Filter({ lang, search, setLang, setSearch }) {
  const classes = useStyles();

  const languages = [
    { label: "Arabic", value: "ar" },
    { label: "German", value: "de" },
    { label: "Greek", value: "el" },
    { label: "English", value: "en" },
    { label: " Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "Hebrew", value: "he" },
    { label: "Hindi", value: "hi" },
    { label: "Italian", value: "it" },
    { label: "Japanese", value: "ja" },
    { label: "Malayalam", value: "ml" },
    { label: "Marathi", value: "mr" },
    { label: "Dutch", value: "nl" },
    { label: "Norwegian", value: "no" },
    { label: "Portuguese", value: "pt" },
    { label: "Romanian", value: "ro" },
    { label: "Russian", value: "ru" },
    { label: " Swedish", value: "sv" },
    { label: "Tamil", value: "ta" },
    { label: "Telugu", value: "te" },
    { label: "Ukrainian", value: "uk" },
    { label: "Chinese	", value: "h]" },
  ];

  return (
    <div>
      <Box display="flex" alignItems="center">
        <InputLabel id="language">language</InputLabel>
        <FormControl className={classes.formControl}>
          <Select
            labelId="language"
            id="language"
            value={lang}
            variant="outlined"
            onChange={(e) => {
              setLang(e.target.value);
            }}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
          >
            {languages.map((language) => (
              <MenuItem value={language.value}>{language.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.input}
          variant="outlined"
          placeholder="Search News"
          inputProps={{ "aria-label": "search news" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  );
}
