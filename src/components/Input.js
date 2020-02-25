
import React from "react";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../helpers/theme";

const Input = ({ handleInputChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        onChange={e => handleInputChange(e)}
        id="basicInput"
        label="Input"
        variant="outlined"
        color="primary"
      />
    </ThemeProvider>
  );
};
export default Input;