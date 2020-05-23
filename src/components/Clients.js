
import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import ClientCard from "./ClientCard"
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button";





const Clients  = () => {
    const [Clients , setClients] = useState(

        [ { 
             nom : "Henni",
             prenom : "Karam",
             avatar : "C://Users//Karam//Downloads//DSC_0007-min.JPG",
             adresse : "Hai chlachlia lala ouda Chlef"

         },
         { 
            nom : "Lekhal",
            prenom : "Mohamed El-Amine",
            avatar : "C://Users//Karam//Downloads//DSC_0007-min.JPG",
            adresse : "Hai alhouria elfirem Chlef"

        }
     ]
     )
     console.log(Clients)
    return (
    <div style={{marginLeft:"50px"},{marginRight:"50px"}}>
    <div style={{textAlign:"right"}} >
    <Button color="primary"><Link to="/clients/add-new-client">Add New Client</Link></Button>
  </div>
  <div>
       < Grid container spacing={0} >
    {Clients.map(client => { 
        return(
<Grid item xs={4}>
    <ClientCard client={client}/>
</Grid>
        )}
    
    )}
    </Grid>
    </div>
    </div>
    )
}

export default Clients;