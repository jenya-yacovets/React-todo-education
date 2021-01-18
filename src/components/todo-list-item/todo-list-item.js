import React, { Component } from 'react'
import { AlertIcon, DiffRemovedIcon } from '@primer/octicons-react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    // Аналогичен с кодом ниже
    // constructor() {
    //     super()

    //     this.state = {
    //         done: false
    //     }

    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`)
    //     }
    // }

    state = {
        done: false,
        status: this.props.status
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ status }) => {
            return {
                status: status === 1 ? 2 : 1
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props
        const { done, status } = this.state

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
                onClick={this.onLabelClick} >{label}</span>

                <button 
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant} >
                    <AlertIcon aria-label="Отметить как важное" />
                </button>

                <button 
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted} >
                    <DiffRemovedIcon aria-label="Удалить" />
                </button>
            </span>
        )
    }
}