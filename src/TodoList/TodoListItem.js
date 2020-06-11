import React, {useState} from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdArrowForward }
    from 'react-icons/md'
import cn from 'classnames'
import TodoListDetail from './TodoListDetail'
import './scss/TodoListItem.scss'

const TodoListItem = ({ todo , onRemove, onToggle }) => {
    const { id,text, checked, date, detail } = todo;
    const [clicked, setClicked] = useState(false);
    console.log(todo)
    const onDetail = () =>{
            setClicked(true)
    }
    return (
<div>
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick = {()=>onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
                <div>{date}</div>
            </div>
            <div className="remove"onClick = {() => onRemove(id)} >
                <MdRemoveCircleOutline/>
            </div>
            <div className="remove" onClick = {()=> {onDetail()}}><MdArrowForward/></div>
      </div>
            {clicked ? <TodoListDetail item = {todo}/> : ""}
      </div>
    )
}

export default TodoListItem;