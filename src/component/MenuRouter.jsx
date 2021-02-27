import React from "react";
import {
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../Home";
import ValidationSample from "../practices/RefPractice/ValidationSample.jsx";
import Info from "../practices/useEffectPractice/Info.jsx";
import Reducer from "../practices/useReducerPractice/ReducerCounter.jsx";
import Average from "../practices/useMemo/Average.jsx";
import RefDesc from "./../practices/RefPractice/RefDesc.jsx";
import UseEffectDesc from "./../practices/useEffectPractice/UseEffectDesc.jsx";
import UseReducerDesc from "./../practices/useReducerPractice/UseReducerDesc.jsx";
import UseMemoDesc from "./../practices/useMemo/UseMemoDesc.jsx";
import "../scss/global.scss";
import "../scss/MenuBar.scss";

const ROOT_ROUTE_PATH = [
  {
    rootPath: "useRef",
    practiceComponent: ValidationSample,
    descComponent: RefDesc,
  },
  {
    rootPath: "useEffect",
    practiceComponent: Info,
    descComponent: UseEffectDesc,
  },
  {
    rootPath: "useReducer",
    practiceComponent: Reducer,
    descComponent: UseReducerDesc,
  },
  {
    rootPath: "useMemo",
    practiceComponent: Average,
    descComponent: UseMemoDesc,
  },
];

const NESTED_ROUTE_PATH = [
  {
    path: "useRefNested",
    practiceComponent: ValidationSample,
    descComponent: RefDesc,
  },
  {
    path: "useEffectNested",
    practiceComponent: ValidationSample,
    descComponent: RefDesc,
  },
  {
    path: "useReducerNested",
    practiceComponent: ValidationSample,
    descComponent: RefDesc,
  },
  {
    path: "useMemoNested",
    practiceComponent: ValidationSample,
    descComponent: RefDesc,
  },
];
const MenuRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={3000} classNames="menu" key={location.key}>
        <Switch location={location}>
          <React.Fragment>
            <div className="container">
              <Route exact path="/" component={Home} />
              {ROOT_ROUTE_PATH.map(
                ({ rootPath, practiceComponent, descComponent }) => (
                  <Route key={rootPath} path={`/${rootPath}`}>
                    <RootRoute
                      key={rootPath}
                      practiceComponent={practiceComponent}
                      descComponent={descComponent}
                    />
                    {NESTED_ROUTE_PATH.map(
                      ({ path, practiceComponent, descComponent }) => (
                        <Route key={path} path={`/${rootPath}/${path}`}>
                          <NestedRoute
                            key={path}
                            practiceComponent={practiceComponent}
                            descComponent={descComponent}
                          />
                        </Route>
                      )
                    )}
                  </Route>
                )
              )}
            </div>
          </React.Fragment>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
const RootRoute = ({ practiceComponent, descComponent }) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <NavLink className="menu-list__desc" to={`${url}/desc`}>
        설명
      </NavLink>
      <NavLink className="menu-list__practice" to={`${url}/practice`}>
        예제
      </NavLink>
      <Switch>
        <Route exact path={`${path}`} />
        <div className="desc">
          <Route path={`${path}/desc`} component={descComponent} />
          <Route path={`${path}/practice`} component={practiceComponent} />
        </div>
      </Switch>
    </>
  );
};

const NestedRoute = ({ practiceComponent, descComponent }) => {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <>
      <NavLink className="menu-list__desc" to={`${url}/desc`}>
        설명
      </NavLink>
      <NavLink className="menu-list__practice" to={`${url}/practice`}>
        예제
      </NavLink>
      <Switch>
        <Route exact path={`${path}`} />
        <div className="desc">
          <Route path={`${path}/desc`} component={descComponent} />
          <Route path={`${path}/practice`} component={practiceComponent} />
        </div>
      </Switch>
    </>
  );
};
export default MenuRouter;
