import React, { useState } from 'react'

const InputForm = ({onCreate})=> {        
    const form = {name : '', phone :''};
    const [input, setInput]= useState(form);
    const {name, phone} = input;
    const handleChange = (e) => {
        const { value, name } = e.target;        
        setInput({...input, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name } = e.target;   
        onCreate(input);
        setInput({...input, name : '', phone : ''});
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input placeholder = "이름" name = "name" value = {name} onChange = {handleChange}/>
                <input placeholder = "폰번" name = "phone" value = {phone} onChange = {handleChange}/>
                <button type = "submit">등록</button>
            </form>
            {/*{this.state.name}*/}
            {/*{this.state.phone}*/}
        </div>
    )
}

export default InputForm;