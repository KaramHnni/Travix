
import React from "react";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../helpers/theme";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({



  inputControl : {

    minWidth : 240 , 
  }
}))




const SelectForm = ({ handleInputChange ,name, label, fields,value}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant= "outlined" className={classes.inputControl}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select 
      labelId={label}
      name={name}
      value={value}

      onChange={e => handleInputChange(e)}
      >

        {fields.map(field => { 
          return (
                <MenuItem value={field.value}>{field.name}</MenuItem>
          )
        })}
        </Select>
        </FormControl>
    </ThemeProvider>
  );
};
export default SelectForm;