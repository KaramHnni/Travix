import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Dashboard from './Dashboard';
import AppCalendar from './AppCalendar';
import Input from './Input'
class App extends React.Component{



  render(){

    return (
      <Router>
        <Header username="Henni Karam"/>
        <Switch>
          <Route exact path="/" component = {Dashboard}>
          </Route>
          <Route path="/forms">
            <Input />
          </Route>
      <Route path="/calendar" component = {AppCalendar} >
      </Route>
        </Switch>


    </Router>
      
    )
  }
}

export default App;
