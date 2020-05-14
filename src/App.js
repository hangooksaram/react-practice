import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import InputForm from './InputForm';
import Input from './Input'
import State from './State'
import Props from './Props'
import Class from  './Class'
import Say from './Say'
import EventPractice from './EventPractice'

class App extends Component {
  render(){
  return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/input" component = {Input}/>
          <Route path = "/state" component = {State}/>
          <Route path = "/props" component = {Props}/>
          <Route path = "/class" component = {Class}/>
          <Route path = "/say" component = {Say}/>
          <Route path = "/event" component = {EventPractice}/>
        </Switch>
      </Router>
  );
  }
}

export default App;
