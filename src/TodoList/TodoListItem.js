import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdCheck }
    from 'react-icons/md'
import cn from 'classnames'
import './scss/TodoListItem.scss'

const TodoListItem = ({ todo , onRemove }) => {
    const { id,text, checked } = todo;
    return (

        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline onClick = {() => onRemove(id)} />
            </div>
        </div>
    )
}

export default TodoListItem;