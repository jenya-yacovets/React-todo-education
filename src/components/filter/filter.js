import React, { Component } from 'react'

export default class Filter extends Component {

    buttons = [
        {
            name: 'all',
            label: 'Все задачи'
        },{
            name: 'active',
            label: 'Не выполненые'
        },{
            name: 'done',
            label: 'Выполненые'
        },
    ]

    render() {

        const { filter, onFilterChange } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            let className = 'btn'

            if (isActive) className += ' btn-primary'

           return (
            <button type="button" 
            key={ name } 
            className={ className }
            onClick={ () => onFilterChange(name) }
            >{ label }</button>
           )
        })

        return (
            <div className="btn-group" role="group" aria-label="Фильтр задач">
               { buttons }
            </div>
        )
    }
}