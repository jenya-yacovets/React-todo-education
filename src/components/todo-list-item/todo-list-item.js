import React, { Component } from 'react'

export default class TodoListItem extends Component {

    render() {

        const { label } = this.props

        return (
            <span>{label}</span>
        )
    }
}