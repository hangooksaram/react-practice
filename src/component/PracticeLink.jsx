import React from 'react'
import { Route, NavLink } from 'react-router-dom';
import '../scss/MenuBar.scss';
const PracticeLink = ({current, next})=> {
    return (
        <Route>
            <NavLink className="menu-list" to ={'/' + current + '/' + next}> 예제로 이동 ! </NavLink>
        </Route>
    )
}

export default PracticeLink;