import React, {useState} from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../scss/MenuBar.scss'
const menus = ["useEffect", "useRef",  "useReducer", "useMemo"];
const sub_menus = ["fowardRef"]
const MenuBar =()=>{
    const [sub, setSub] = useState('');
    const handleClick = (menu) =>{
        setSub(menu);
    }
    return(
        <Route>
            <div className ="menu">
                {menus.map( (menu,index) => {
                    return (
                        <React.Fragment>
                            <NavLink onClick={()=>handleClick(menu)} key={`key_${index}`} className="menu-list" to= {`/${menu}`}>{menu}</NavLink>
                            {sub === menu ? 
                                sub_menus.map((item) => <NavLink key={`key_${index}`} className="menu-list" to= {`/${menu}`}>{menu}</NavLink>) 
                            :""}
                        </React.Fragment>
                    )
                })}
            </div>
        </Route>
    )
}
export default MenuBar;