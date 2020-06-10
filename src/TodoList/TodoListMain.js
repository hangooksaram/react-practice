import React, {useState, useRef, useCallback} from 'react'
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

    {/*const onChecked = useCallback(
        checked => {
            setTodos
        }
    )*/}

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? {...todo, checked : !todo.checked} : todo)
            )
        }, [todos]
    )

    const nextId = useRef(3);

    const onInsert = useCallback(
        text => {
            const todo = {
                id : nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo))
            nextId.current += 1
        }, [todos]
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    , [todos])
    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert = {onInsert}/>
                <TodoList onToggle = {onToggle} onRemove = {onRemove} todos = {todos}/>
            </TodoTemplate>
        </div>
    )
}

export default TodoListMain