import React, {useState} from 'react'

const SayComponent = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("잘가요");

    
    return(
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>    
            {message}
        </div>
    )
}

export default SayComponent;