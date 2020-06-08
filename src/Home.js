import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import Props from './Props'

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
            <Props>children</Props><br></br>
                <ClassComponent name = "class"/>
                <NavLink style = {{backgroundColor : 'black', color : 'white'}} to = "/class"> 이동</NavLink>
                <FunctionComponent name = "function"/>
                    <ul><NavLink to = "/state">state</NavLink></ul>
                    <ul><NavLink to = "/props">props</NavLink></ul>
                    <ul><NavLink to = "/input">input</NavLink></ul>
                    <ul><NavLink to = "/say">say</NavLink></ul>
                    <ul><NavLink to = "/event">eventpractice</NavLink></ul>
                    <ul><NavLink to = "/validation">ref</NavLink></ul>
                    <ul><NavLink to = "/iteration">map</NavLink></ul>
                    <ul><NavLink to = "/info">useEffect</NavLink></ul>
                    <ul><NavLink to = "/reducer">useReducer</NavLink></ul>
                    <ul><NavLink to = "/average">useMemo</NavLink></ul>
                    <ul><NavLink to = "/map">map</NavLink></ul>
                    <ul><NavLink to = "/todo">todolist</NavLink></ul>
            </Route>
        </div>
        )
    }
}
