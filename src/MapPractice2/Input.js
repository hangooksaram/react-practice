import React from 'react'
import InputForm from './InputForm'
import PhoneList from './PhoneList'

export default class Input extends React.Component {
    state = {
        information : [
        {
            id : 0,
            name : '이름',
            phonenumber : '000-0000-0000'
        },
        {
            id : 1,
            name : '이름',
            phonenumber : '000-0000-0000'
        }
    ]
}
    handleCreate = (data) =>{
        const {information} = this.state;
        this.setState({
            information : information.concat({id : this.id++, ...data})
        })
    }
    render(){
        const {information} = this.state.information;
        return(
            <div>
            <InputForm onCreate = {this.handleCreate}/>
            <PhoneList data = {this.state.information}/>
            </div>
        )
    }
}