import React, { Component } from 'react'

export default class TodoCreate extends Component {

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
                        <div className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Название новой задачи"/>
                            <button className="btn btn-success" type="button">Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}