import React, { useEffect, useReducer } from 'react'

function reducer(state, action) {
    return{
        ...state,
        [action.name] : action.value
    };
}

const InfoComponent = () => {
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
    }, [number, snake]);

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
        </div>
    )
}

export default InfoComponent