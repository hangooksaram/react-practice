import React, {useState} from 'react'
import TodoTemplate from './TodoTemplate'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'

const TodoListMain = () => {
    const [todos, setTodos] = useState([
        {
            id :1,
            text : 'RN',
            checked : true,
        },
        {
            id :2,
            text : 'todolist 만들기',
            checked : false
        },
    ])
    return (
        <div>
            <TodoTemplate>
                <TodoInsert/>
                <TodoList todos = {todos}/>
            </TodoTemplate>
        </div>
    )
}

export default TodoListMain