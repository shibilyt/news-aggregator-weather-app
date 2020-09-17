import React from "react";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import Typography  from "@material-ui/core/Typography";

const useLoadingStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
    marginBottom: 20,
  },
  publishingDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  content: {
    width: "100%",
    marginRight: 15,
  },
}));

// This will display a loading skeleton for the News Card
export default function CardSkeleton() {
  const classes = useLoadingStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6">
        <Skeleton />
        <Skeleton />
      </Typography>
      <div className={classes.publishingDetails}>
        <Skeleton width={120} />
        <Skeleton width={120} />
      </div>
      <div className={classes.contentContainer}>
        <Typography variant="body1" className={classes.content}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>
        <Skeleton variant="rect" width={120} height={120} />
      </div>
    </Card>
  );
}
