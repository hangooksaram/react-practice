import React from 'react'

class EventPracticeComponent extends React.Component{
    state = {
        message : '',
        username: ''
    }

    handleInputChange = (e) => { //바인딩
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleButtonAlert = () => {
        alert(this.state.message);
        this.setState({
            message : ''
        })
    }

    handleButtonAlert2 = () => {
        alert(this.state.username);
        this.setState({
            username : ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleButtonAlert();
        }
    }
 
    render(){
        const {message, username} = this.state;
        return(
            <div>
                <h1>이벤트 연습</h1>
                    <input type = "text" name = "message" value = {message} placeholder = "input" onChange = {this.handleInputChange}/>
                    <button name = "message" onClick = {this.handleButtonAlert}>메세지 확인</button>
                    <input type = "text" name = "username" value = {username} placeholder = "input" onChange = {this.handleInputChange}/>
                    <button name = "username" onKeyPress = {this.handleKeyPress} onClick = {this.handleButtonAlert2}>유저이름 확인</button>
            </div>
        )
    }
}

export default EventPracticeComponent