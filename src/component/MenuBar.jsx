import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../scss/MenuBar.scss'
const menus = ["useEffect", "useRef",  "useReducer", "useMemo"];
const MenuBar =()=>{
    return(
        <Route>
            <div className ="menu">
                {menus.map( (menu,index) => {
                    return <NavLink key={`key_${index}`} className="menu-list" to= {`/${menu}`}>{menu}</NavLink>
                })}
            </div>
        </Route>
    )
}
export default MenuBar;