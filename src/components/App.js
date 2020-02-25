import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Clients from './Clients';
import Dashboard from './Dashboard';
import AppCalendar from './AppCalendar';
import Input from './Input'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../helpers/theme'

class App extends React.Component{



  render(){

    return (
      <ThemeProvider theme={theme}>
      <Router>
        <Header username="Henni Karam"/>
        <Switch>
          <Route exact path="/" component = {Dashboard}>
          </Route>
          <Route path="/clients" component ={Clients}>
          </Route>
      <Route path="/calendar" component = {AppCalendar} >
      </Route>
        </Switch>


    </Router>
    </ThemeProvider>

    )
  }
}

export default App;
