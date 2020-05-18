import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import InputForm from './MapPractice2/InputForm';
import Input from './MapPractice2/Input'
import State from './State'
import Props from './Props'
import Class from  './ClassPractice/Class'
import Say from './HooksPractice/Say'
import EventPractice from './EventPractice/EventPractice'
import ValidationSample from './RefPractice/ValidationSample'
import IterationSample from './MapPractice/IterationSample'
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
          <Route path = "/validation" component = {ValidationSample}/>
          <Route path = "/iteration" component = {IterationSample}/>
        </Switch>
      </Router>
  );
  }
}

export default App;
