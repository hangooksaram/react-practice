import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Input from './practices/MapPractice2/Input'
import EventPractice from './practices/EventPractice/EventPractice'
import ValidationSample from './practices/RefPractice/ValidationSample'
import IterationSample from './practices/MapPractice/IterationSample'
import Info from './practices/useEffectPractice/Info'
import Reducer from './practices/useReducerPractice/ReducerCounter'
import Average from './practices/useMemo/Average'
import Map from './practices/MapPractice2/Input'
import TodoList from './practices/TodoList/TodoListMain'
import MenuBar from './component/MenuBar';
import './scss/global.scss'


class App extends Component {
  render(){
  return (
      <Router>
        <MenuBar/>
        <Switch>
          <div className="container">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/input" component = {Input}/>
          <Route path = "/eventpractice" component = {EventPractice}/>
          <Route path = "/ref" component = {ValidationSample}/>
          <Route path = "/map" component = {IterationSample}/>
          <Route path = "/useEffect" component = {Info}/>
          <Route path = "/useReducer" component = {Reducer}/>
          <Route path = "/useMemo" component = {Average}/>
          <Route path = "/map" component = {Map}/>
          <Route path = "/todolist" component = {TodoList}/>
          </div>
        </Switch>
      </Router>
  );
  }
}

export default App;
