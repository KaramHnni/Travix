import React from "react";
import Clients from "./Clients";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function ClientCard() {
  const classes = useStyles();

  return (
    <Card style={{ width: 400 }}>
      <CardActions className={classes.card}>
        <Avatar src="images/Logo.png" />

        <CardContent>Lizard</CardContent>
      </CardActions>
    </Card>
  );
}
