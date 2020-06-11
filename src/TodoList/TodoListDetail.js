import React from 'react'

const TodoListDetail = ({item}) => {
    const {detail} = item
    return (
        <div>{detail}</div>
    )
}

export default TodoListDetail;