
import React, { Component } from 'react';

class EventPracticeComponent extends Component {

  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render () {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type = "text"
          name = "message"
          placeholder = "아무거나 입력해 보세요"
          value = {this.state.message}
          onChange = {this.handleChange}
        />
        <button onClick = {this.handleClick}>확인</button>
      </div>
    );
  }

}



export default EventPracticeComponent




{/*
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
        alert(this.state.username);
        this.setState({
            message : '',
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
                    <button name = "username" onKeyPress = {this.handleKeyPress} onClick = {this.handleButtonAlert}>유저이름 확인</button>
            </div>
        )
    }
}*/}
