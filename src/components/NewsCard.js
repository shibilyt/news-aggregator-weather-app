import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
    marginBottom: 20,
  },
  newsTitle: {
    textDecoration: "none",
    color: theme.palette.dark.main,
  },
  publicationDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  newsSource: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  content: {
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 200,

    objectFit: "fill",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: 300,
    },
  },
}));

export default function NewsCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <header>
        <a className={classes.newsTitle} href={data.source.url || data.url}>
          <Typography variant="h6">{data.title}</Typography>
        </a>
        <div className={classes.publicationDetails}>
          <Typography variant="subtitle1">
            <a
              className={classes.newsSource}
              href={data.source.url || data.url}
            >
              {data.source.name}
            </a>
          </Typography>
          <Typography variant="subtitle1">
            {formatDistanceToNow(new Date(data.publishedAt))}
          </Typography>
        </div>
      </header>
      <div className={classes.body}>
        <Typography variant="body1" className={classes.content}>
          {data.description}
        </Typography>
        <img
          src={data.image || data.urlToImage}
          alt="news topic"
          className={classes.image}
        />
      </div>
    </Card>
  );
}
