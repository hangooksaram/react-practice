import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../scss/MenuBar.scss'
const menus = ["input", "say", "eventpractice", "ref", "map", "useEffect", "useReducer", "useMemo", "map", "todolist"];
const MenuBar =()=>{
    return(
        <Route>
            <div className ="menu">
                {menus.map(menu => {
                    return <NavLink className="menu-list" to= {'/'+menu}>{menu}</NavLink>
                })}
            </div>
        </Route>
    )
}
export default MenuBar;