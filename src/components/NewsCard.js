import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    padding: 20,
  },
  newsTitle: {
    fontSize: 25,
  },
  publicationDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  newsContent: {
    textAlign: "left",
  },
}));

export default function NewsCard() {
  const classes = useStyles();

  const data = {
    title: "Nick Leeder appointed as latest head of Google Ireland",
    description:
      "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.",
    content:
      "Google has announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April.\nWhile its staff continue to work from home in the midst of the coronavirus pandemic, Google Ireland will have a new person leadi... [1514 chars]",
    url: "https://www.siliconrepublic.com/companies/nick-leeder-google-ireland",
    image:
      "https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg",
    publishedAt: "2020-03-23T13:58:53Z",
    source: {
      name: "Silicon Republic",
      url: "https://www.siliconrepublic.com/",
    },
  };

  return (
    <Card className={classes.card}>
      <header>
        <h3>{data.title}</h3>
        <div className={classes.publicationDetails}>
          <a className={classes.newsSource} href={data.source.url}>
            {data.source.name}
          </a>
          <div>{data.publishedAt}</div>
        </div>
      </header>
      <div className={classes.newsContent}>{data.description}</div>
    </Card>
  );
}
