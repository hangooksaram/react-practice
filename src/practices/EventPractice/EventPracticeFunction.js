import React, {useState} from 'react'

const EventPracticeFunction = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    })

    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm)
    }

    const onClick = () => {
        alert(username + ': '+ message);
        setForm({
            username : '',
            message : ''
        })
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type = "text" name = "username" value = {username} placeholder = "사용자명" onChange = {onChange}/>
            <input type = "text" name = "message" value = {message} placeholder = "아무거나 입력해 보세요" onChange = {onChange}/>
            <button onClick = {onClick}>확인</button>
        </div>
    )
}

export default EventPracticeFunction;