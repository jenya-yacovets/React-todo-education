import React, { Component } from 'react'
import { AlertIcon } from '@primer/octicons-react'

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

        const { done } = this.state
        let newDone

        if (done) {
            newDone = false
        } else {
            newDone = true
        }

        this.setState({
            done: newDone
        })
    }

    onMarkImportant = () => {

        const { status } = this.state
        let newStatus

        if (status === 2) {
            newStatus = 1
        } else {
            newStatus = 2
        }

        this.setState({
            status: newStatus
        })
    }

    render() {
        const { label } = this.props
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
            </span>
        )
    }
}