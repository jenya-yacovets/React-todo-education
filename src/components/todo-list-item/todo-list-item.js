import React, { Component } from 'react'
import { AlertIcon, DiffRemovedIcon } from '@primer/octicons-react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleStatus, onToggleDone, done, status } = this.props

        const style = {
            textDecoration: done ? 'line-through' : 'none'
        }

        let className = 'itemTodo'

        if (status === 2) {
            className += ' important'
        }

        return (
            <span>
                <span 
                className={className}
                style={style}
                onClick={ onToggleDone } >{label}</span>

                <button 
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleStatus } >
                    <AlertIcon aria-label="Отметить как важное" />
                </button>

                <button 
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted } >
                    <DiffRemovedIcon aria-label="Удалить" />
                </button>
            </span>
        )
    }
}