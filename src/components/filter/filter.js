import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="Фильтр задач">
                <button type="button" className="btn btn-primary">Все задачи</button>
                <button type="button" className="btn">Выполненые</button>
                <button type="button" className="btn">Не выполненые</button>
            </div>
        )
    }
}