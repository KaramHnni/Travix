import React from 'react'
import Input from './Input'
import SelectForm from './SelectForm'
import Grid from '@material-ui/core/Grid';
import Date from './Date';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';



const useStyles = makeStyles(theme => ({

   
    Box : { 
        justifyContent: "center",
    },

  inputControl : {

    minWidth : 120 , 
  }
}))

const ClientInfoForm = ({handleFormikChange , errors , values}) => {
    const classes = useStyles();

    return(

<React.Fragment>
<Grid container spacing={2} className={classes.Box}>
<Grid item xs={3}>
{errors.nom ?<Alert severity="error">{errors.nom}</Alert> : null}
</Grid>
<Grid item xs={3}>
{errors.prenom ? <Alert severity="error">{errors.prenom}</Alert> : null}
</Grid>
<Grid item xs={3}>
{errors.date_naiss ? <Alert severity="error">{errors.date_naiss}</Alert> : null}
</Grid>
</Grid>
<Grid container spacing={2} className={classes.Box}>
    <Grid item xs={3}>
        <Input label="Nom" name="nom" value={values.nom} handleInputChange={handleFormikChange}/>
    </Grid>
    <Grid item xs={3}>

        <Input label="Prenom" name="prenom" value={values.prenom} handleInputChange={handleFormikChange} />
    </Grid>
    <Grid item xs={3}>

        <Date label="Date de naissance" id="date-naiss" name="date_naiss" value={values.date_naiss} handleInputChange={handleFormikChange} />
    </Grid>
</Grid>
<Grid container spacing={2} className={classes.Box}>
<Grid item xs={3}>
{errors.type_piece ? <Alert severity="error">{errors.type_piece}</Alert> : null}
</Grid>
<Grid item xs={3}>
{errors.numero_piece ?<Alert severity="error">{errors.numero_piece}</Alert> : null}
</Grid>
<Grid item xs={3}>
{errors.date_exp ?<Alert margin="1" severity="error">{errors.date_exp}</Alert> : null}
</Grid>
</Grid>
<Grid container spacing={2} className={classes.Box}>

    <Grid item xs={3} >

        <SelectForm 
         label="Type de la pièce d'identité"
         className={classes.inputControl}
         fields={[
             {name : "Passport Ordinaire" , value : "pass-ord"},
             {name : "Carte d'identité" , value : "cdn"},
             {name : "Permis de conduire ", value : "perm"}
             ]}

        name="type_piece" handleInputChange={handleFormikChange}
        value={values.type_piece}
             />
    </Grid>
   

<Grid item xs={3}>  
        <Input label="Numero de la pièce d'identité" 
        name="numero_piece"
        handleInputChange={handleFormikChange}
        value={values.numero_piece}
        />
    </Grid>
    <Grid item xs={3}>

        <Input 
     label="Date d'expiration"
     name="date_exp"
     handleInputChange={handleFormikChange} 
     value={values.date_exp}
     />
    </Grid>
</Grid>
</React.Fragment>
)
            }
export default ClientInfoForm