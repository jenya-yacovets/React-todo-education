import React, { Component } from 'react'

import './todo-create.css'

export default class TodoCreate extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const label = this.state.label
        if (label.length === 0) {
            return
        }
        this.props.onCreate(label)
        this.setState({
            label: ''
        })
    }

    render() {

        return (
            <div>
                <br/>
                <div className="d-grid">
                    <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Добавить новую задачу
                    </button>
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="d-flex">
                                <input className="form-control me-2" 
                                onChange={ this.onLabelChange} 
                                value={this.state.label}
                                type="text" required placeholder="Название новой задачи"/>
                                <button className="btn btn-success" type="submit">Добавить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}