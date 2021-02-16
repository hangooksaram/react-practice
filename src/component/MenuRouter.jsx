import React, { forwardRef } from 'react';
import {Route, Switch, useLocation, useRouteMatch, NavLink} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../Home';
import ValidationSample from '../practices/RefPractice/ValidationSample'
import Info from '../practices/useEffectPractice/Info'
import Reducer from '../practices/useReducerPractice/ReducerCounter'
import Average from '../practices/useMemo/Average'
import RefDesc from './../practices/RefPractice/RefDesc';
import ForWardRefDesc from './../practices/RefPractice/forwardRef/ForwardRefDesc';
import UseEffectDesc from './../practices/useEffectPractice/UseEffectDesc';
import UseReducerDesc from './../practices/useReducerPractice/UseReducerDesc';
import UseMemoDesc from './../practices/useMemo/UseMemoDesc';
import '../scss/global.scss'
import '../scss/MenuBar.scss'

const ROUTE_PATH = [
  {
    path : 'useRef', nest : "", nestComponent : "", practiceComponent : ValidationSample, descComponent : RefDesc
  },
  {
    path : 'useEffect', nest : "", nestComponent : ForWardRefDesc, practiceComponent : Info, descComponent : UseEffectDesc
  },
  {
    path : 'useReducer', nest : "", nestComponent: "", practiceComponent : Reducer, descComponent : UseReducerDesc
  },
  {
    path : 'useMemo', nest : "", nestComponent : "", practiceComponent : Average, descComponent : UseMemoDesc
  },
  
]
const MenuRouter =()=>{
    const location = useLocation();
    return(
        <TransitionGroup>
            <CSSTransition 
                timeout={3000}
                classNames="menu"
                key={location.key}
            >                    
                <Switch location={location}>
                  <React.Fragment>
                    <div className="container">                             
                      <Route exact path = "/" component = {Home}/>         
                        {ROUTE_PATH.map(({path, nest, nestComponent, practiceComponent, descComponent})=> 
                           <Route key={path} path = {`/${path}`}>
                             <NestedRoute 
                                key={path}
                                nest ={nest}
                                practiceComponent = {practiceComponent} 
                                descComponent={descComponent}
                                nestComponent ={nestComponent}                                
                              />
                           </Route>
                        )}                       
                    </div>
                  </React.Fragment>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}
const NestedRoute = ({nest, nestComponent, practiceComponent, descComponent}) =>{
  let { path, url } = useRouteMatch();  
  return(
    <>
      <NavLink className="menu-list__desc" to = {`${url}/desc`}>설명</NavLink>
      <NavLink className="menu-list__practice" to = {`${url}/practice`}>예제</NavLink>
      <Switch>        
          <Route exact path={`${path}`}/>
            <div className="desc">
              <Route path={`${path}/desc`} component={descComponent}/>
              <Route path={`${path}/${nest}/desc`} component={nestComponent}/>
              <Route path={`${path}/practice`} component={practiceComponent}/>        
            </div>
      </Switch>
    </>
  )
};
export default MenuRouter;