import React from 'react'
import Moment from 'react-moment'


const TodoListClock = () => {
    return (
        <div>
            <Moment interval={1000} />
        </div>
    )
}

export default TodoListClock;