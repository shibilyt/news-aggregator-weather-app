import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Filter from "./Filter";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";
import Weather from "./Weather";

import { ReactComponent as SunIcon } from "../assets/sun-icon.svg";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
    backgroundColor: theme.palette.dark.main,
    "&:hover": {
      backgroundColor: theme.palette.dark.main,
      opacity: 0.9,
    },
  },
  icon: {
    height: 35,
  },
}));

export default function Content({
  search = "",
  setSearch,
  weatherOpen,
  handleWeatherOpen,
  handleWeatherClose,
}) {
  const [lang, setLang] = useState("all");
  const { status, data, error } = useNews(lang, search);

  const classes = useStyles();
  return (
    <Box mt={8} p={3}>
      <Filter
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
      />
      {status === "loading" && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {status === "error" && <NewsError error={error} />}
      {status === "success" &&
        (lang === "all" && !search
          ? data.data.articles.map((article) => <NewsCard data={article} />)
          : data.data.articles.map((article) => <NewsCard data={article} />))}
           {/* :  data.articles.map((article) => <NewsCard data={article} />))} */}
      <Hidden mdUp>
        <Fab aria-label={"weather"} className={classes.fab} onClick={handleWeatherOpen}>
          <SunIcon className={classes.icon} />
        </Fab>
        <Weather open={weatherOpen} handleClose={handleWeatherClose}/>
      </Hidden>
    </Box>
  );
}

function NewsError({ error }) {
  return <div>Something went wrong. Retrying...</div>;
}
