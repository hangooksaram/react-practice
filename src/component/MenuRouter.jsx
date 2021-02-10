import React from 'react';
import {Route, Switch, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Home from '../Home';
import ValidationSample from '../practices/RefPractice/ValidationSample'
import Info from '../practices/useEffectPractice/Info'
import Reducer from '../practices/useReducerPractice/ReducerCounter'
import Average from '../practices/useMemo/Average'
import Map from '../practices/MapPractice2/Input'
import TodoList from '../practices/TodoList/TodoListMain'
import '../scss/global.scss'
import '../scss/MenuBar.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Test from './../practices/RefPractice/Test';

const MenuRouter =()=>{
    const location = useLocation();
    return(
        <TransitionGroup>
            <CSSTransition 
                timeout={3000}
                classNames="menu"
                key={location.key}>                    
                <Switch location={location}>
                  <div className="container">            
                    <Route exact path = "/" component = {Home}/>                                     
                    <Route path = "/ref" component = {ValidationSample}/>
                    <Route path ="/ref/Test" component ={Test}/>
                    <Route path = "/useEffect" component = {Info}/>
                    <Route path = "/useReducer" component = {Reducer}/>
                    <Route path = "/useMemo" component = {Average}/>
                    <Route path = "/map" component = {Map}/>
                    <Route path = "/todolist" component = {TodoList}/>
                  </div>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default MenuRouter;