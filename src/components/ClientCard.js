import React from 'react'
import Clients from './Clients'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';


const ClientCard = () => (


    <Card style={{width: 400}} >
    <CardActionArea>
      <Avatar src="images/Logo.png" />
      
      <CardContent>
        Lizard
      </CardContent>
    </CardActionArea>
    </Card>

)

export default ClientCard;