
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

const Input = ({label, id,handleInputChange,name ,value}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TextField
        type="date"
        id={id}
        onChange={e => handleInputChange(e)}
        name={name}
        label={label}
        value={value}
        variant="outlined"
        color="primary"
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.inputControl}
      />
    </ThemeProvider>
  );
};
export default Input;