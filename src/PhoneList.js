import React from 'react'
import PhoneInfo from './PhoneInfo' //PhoneInfo의 부모 Component

export default class PhoneList extends React.Component{
    static defaultProps = {
        data : []
    }
    render(){
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key = {info.id} info = {info}/>)
        )
        return (
            <div>{list}</div>
        )
    }
}