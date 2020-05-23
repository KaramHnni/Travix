import React ,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Clients from './Clients';
import ClientInfo from './ClientInfo'
import Dashboard from './Dashboard';
import AppCalendar from './AppCalendar';
import Input from './Input'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../helpers/theme'



class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render(){

    return (
      <ThemeProvider theme={theme}>
      <Router>
        <Header username="Henni Karam"/>
        <Switch>
          <Route exact path="/" component = {Dashboard}>
          </Route>
          <Route exact path="/clients" component ={Clients}>
          </Route>
          <Route  path="/clients/add-new-client" component ={ClientInfo}>
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
