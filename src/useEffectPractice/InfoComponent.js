import React, { useState, useEffect, useReducer } from 'react'

function reducer(state, action) {
    return{
        ...state,
        [action.name] : action.value
    };
}

const InfoComponent = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [state, dispatch] = useReducer(reducer, {
        number : '',
        snake : ''
    });

    const { number, snake } = state;
    const onChange = e => {
        dispatch(e.target);
    }

    useEffect(()=>{
        console.log('rendering complete');
        console.log({
            number,
            snake
        });
        return () => {
            console.log('clean up');
            console.log(number);
    };
    }, [number]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input type = "text" name = "number" value = {number} onChange = {onChange}/>
                <input type = "text" name = "snake" value = {snake} onChange = {onChange}/>
                    <div>
                        숫자 : {number}
                        뱀 : {snake}
                    </div>
            </div>
            <div>
                <input type = "text" value = {name} onChange = {onChangeName}/>
                <input type = "text" value = {nickname} onChange = {onChangeNickName}/>
                    <div>
                        이름 : {name}
                        별명 : {nickname}
                    </div>
            </div>
        </div>
    )
}

export default InfoComponent