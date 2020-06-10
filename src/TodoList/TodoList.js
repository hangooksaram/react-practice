import React from 'react'
import './scss/TodoList.scss'
import TodoListItem from './TodoListItem'
const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <div className = "TodoList">
            {todos.map(todo => (
                <TodoListItem onToggle = {onToggle} onRemove = {onRemove} todo = {todo} key = {todo.id}/>
                
            ))}
            {console.log(onRemove)}
        </div>
    )
}

export default TodoList