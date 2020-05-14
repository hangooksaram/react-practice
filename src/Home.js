import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import Props from './Props'
import Class from './Class'
import EventPractice from './EventPractice'

class ClassComponent extends Component{
    render(){
        return(
            <div>클래스 컴포넌트 {this.props.name}</div> //class형 component일때 this. 사용
        )
    }
}

const FunctionComponent = ({name}) => {
    return(
        <div>함수형 컴포넌트 {name}</div>
    )
}

export default class Home extends Component {
    render(){
        return(
        <div>
            <Route>
                <ClassComponent name = "class"/>
                <NavLink style = {{backgroundColor : 'black', color : 'white'}} to = "/class"> 이동</NavLink>
                <FunctionComponent name = "function"/>
                    <NavLink style = {{backgroundColor : 'red', color : 'white'}} to = "/state">state</NavLink>
                    <NavLink style = {{backgroundColor : 'blue', color : 'white'}} to = "/props">props</NavLink>
                    <NavLink style = {{backgroundColor : 'green', color : 'white'}}to = "/input">input</NavLink>
                    <NavLink style = {{backgroundColor : 'yellow', color : 'white'}} to = "/say">say</NavLink>
                    <NavLink style = {{backgroundColor : 'pink', color : 'white'}} to = "/event">eventpractice</NavLink>
            </Route>
                <Props>children</Props>
        </div>
        )
    }
}
