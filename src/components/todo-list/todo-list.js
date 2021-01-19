import React from 'react'
import TodoListItem from '../todo-list-item'

import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleStatus, onToggleDone }) => {

    const elements = todos.map(item => {

        const {id, ...itemProps} = item
        
        return (
            <li className="list-group-item todo-list-item" key={id}>
                <TodoListItem 
                {...itemProps}
                onDeleted={() =>  onDeleted(id) }
                onToggleStatus={() => onToggleStatus(id) }
                onToggleDone={() => onToggleDone(id) }
                />
            </li>
        )
    })

    return (
        <div>
            <hr/>
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    )
}

export default TodoList