
import React from "react";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../helpers/theme";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({



  inputControl : {

    minWidth : 240 , 
  }
}))

const Input = ({ handleInputChange , name ,label,value}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TextField
        onChange={e => handleInputChange(e)}
        id="basicInput"
        label={label}
        name={name}
        value={value}
        variant="outlined"
        color="primary"
        className={classes.inputControl}
      />
    </ThemeProvider>
  );
};
export default Input;