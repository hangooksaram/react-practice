import React, { useState } from 'react'
import './ValidationSample.css'

const ValidationSampleComponent = () => {
    let input;
    const validation = {
        pw : '',
        clicked : false,
        validated : false
    }
    const [validate, setValidate] = useState(validation);
    const { pw, clicked, validated } = validate;
    const handleChange = (e) => {
        const { value } = e.target;        
        setValidate({...validate, pw : value});
    }

    const handleButtonClick = () => {
        setValidate({...validate, clicked : true, validated : pw === '0000'});
        input.focus();
    }
    
    return(
        <div>
            <input ref = {(ref) => input = ref} type = "password" value = {pw} onChange = {handleChange} className = {clicked ? (validated ? 'sucess':'failure') : ''} />
            <button onClick = {handleButtonClick}>검증하기</button>
        </div>
    )    
}

export default ValidationSampleComponent