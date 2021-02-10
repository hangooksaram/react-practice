import React, { useState, useRef } from 'react'
import InputForm from './InputForm'
import PhoneList from './PhoneList'

const Input = ()=> {
    const ref = useRef(0);
    const [list, setList] = useState([]);
    const handleCreate = (data) =>{
        const nextId = ref.current ++; 
        setList(info => info.concat({id : nextId , ...data}));        
    }        
        return(
            <div>
                <h1>PhoneList</h1>
                <InputForm onCreate = {handleCreate}/>
                <PhoneList data = {list}/>
            </div>
        )
}

export default Input;