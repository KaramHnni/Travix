import React from "react";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({


  cardWrap: {

    boxShadow: '0 3px 0 0px #1BE3D7'

  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundSize: "cover",
  },
  CardTitle : {

    color:"#bdbdbd",
    fontWeight: "600",
    fontFamily:"Robotto sans-serif",
    textShadow : 1,
    textAlign: "center"
  }
}));

export default function ClientCard({client}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHoverOnCard = event => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
  };
  return (
    <React.Fragment>
    <Card onMouseEnter={handleHoverOnCard} className={classes.cardWrap} style={{ width: 400 }}>
      <CardActions className={classes.card}>
        <Avatar src={client.avatar} className={classes.avatar} />

        <CardContent>
        <Typography variant="h5" gutterBottom className={classes.CardTitle}>
        M.{client.prenom} {client.nom}
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.CardTitle}>
        {client.adresse}
        </Typography> 
        </CardContent>
      </CardActions>
    </Card>

  </React.Fragment>
  );
}
