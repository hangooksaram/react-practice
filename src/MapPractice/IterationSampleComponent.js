import React, {useState} from 'react'

const IterationSampleComponent = () => {
    const [name, setName] = useState([
        {id : 1, text : '눈' },
        {id : 2, text : '얼음'},
        {id : 3, text : '물'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onRemove = (id)=>{
        const nextName = name.filter(name => name.id !== id); 
        setName(nextName);
    }
    const nameList = name.map(name => <li onDoubleClick = {() => {onRemove(name.id)}} key = {name.id}> {name.text}</li>)
    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextName = name.concat({
            id : nextId,
            text : inputText
        });
        
        setNextId(nextId + 1);
        setName(nextName);
        setInputText('');
    }
    
    return(
        <div>
            <input type = "text" onChange = {onChange} value = {inputText} placeholder = "입력"/>
            <button onClick = {onClick} >입력</button>
            <ul>{nameList}</ul>
        </div>
    )
}

export default IterationSampleComponent