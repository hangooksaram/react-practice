import React from 'react'
import './ValidationSample.css'

class ValidationSampleComponent extends React.Component {
    state = {
        pw : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
            pw : e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.pw === '0000'
        })
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input ref = {(ref) => this.input = ref} type = "password" value = {this.state.pw} onChange = {this.handleChange} className = {this.state.clicked ? (this.state.validated ? 'sucess':'failure') : ''} />
                <button onClick = {this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSampleComponent