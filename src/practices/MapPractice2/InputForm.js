import React from 'react'

export default class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <input placeholder = "이름을 입력하시오" name = "name" value = {this.state.name} onChange = {this.handleChange}/>
                <input placeholder = "나이를 입력하시오" name = "phone" value = {this.state.phone} onChange = {this.handleChange}/>
                <button type = "submit">등록</button>
            </form>
            {/*{this.state.name}*/}
            {/*{this.state.phone}*/}
        </div>
    )
    }
}