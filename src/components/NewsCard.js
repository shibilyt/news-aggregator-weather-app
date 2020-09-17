import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 25,
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
  body:{
    display: 'flex',
  },
  image:{
    maxWidth: 120,
    maxHeight: 120,
    objectFit: ''
  }
}));

export default function NewsCard({data}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <header>
        <Typography variant="h6">{data.title}</Typography>
        <div className={classes.publicationDetails}>
          <Typography variant="subtitle1">
            <a className={classes.newsSource} href={data.source.url || data.url}>
              {data.source.name}
            </a>
          </Typography>
          <Typography variant="subtitle1">{data.publishedAt}</Typography>
        </div>
      </header>
      <div className={classes.body}>
        <Typography variant="body1">{data.description}</Typography>
        <img src={data.image || data.urlToImage} alt="news topic" className={classes.image} />
      </div>
    </Card>
  );
}