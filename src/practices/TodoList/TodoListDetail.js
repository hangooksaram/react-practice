import React from 'react'

const TodoListDetail = ({ item }) => {
    const { detail, text } = item
    return (
        <div>
            <h2>{text}</h2>
            <div>{detail}</div>
        </div>
    )
}

export default TodoListDetail;