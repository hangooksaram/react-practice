import React, { useState, useCallback } from "react";
import { Route, NavLink } from "react-router-dom";
import "../scss/MenuBar.scss";
const menus = ["useEffect", "useRef", "useReducer", "useMemo"];
const sub_menus = [
  {
    root: "useEffect",
    nested: "useEffectNested",
  },
  {
    root: "useRef",
    nested: "useRefNested",
  },
  {
    root: "useReducer",
    nested: "useReducerNested",
  },
  {
    root: "useMemo",
    nested: "useMemoNested",
  },
];
const NestedMenuBar = ({ root }) => {
  let nest = [];
  nest.push(sub_menus.find((item) => item.root === root));
  return nest.map((item, index) => {
    return (
      <NavLink
        key={`nested_key_${index}`}
        className="menu-list"
        to={`/${item.root}/${item.nested}`}
      >
        {item.nested}
      </NavLink>
    );
  });
};
const MenuBar = () => {
  const [sub, setSub] = useState("");
  const handleClick = useCallback((menu) => {
    setSub(menu);
  }, []);

  return (
    <Route>
      <div className="menu">
        {menus.map((menu, index) => {
          return (
            <React.Fragment>
              <NavLink
                onClick={() => handleClick(menu)}
                key={`root_key_${index}`}
                className="menu-list"
                to={`/${menu}/desc`}
              >
                {menu}
              </NavLink>
              {/* {sub === menu ? sub_menus.map((item, index) => {
                return (item.root === sub ? <NavLink
                    key={`nest_key_${index}`}
                    className="menu-list"
                    to={`/${menu}/${item.nested}`}
                  >
                    {item.nested}
                  </NavLink>: "")
              }):""} */}
            </React.Fragment>
          );
        })}
      </div>
    </Route>
  );
};
export default MenuBar;
