import React, { Component } from 'react'

import Header from '../header'
import Filter from '../filter'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import TodoCreate from '../todo-create'

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Выпить кофе', status: 1, id: 1 },
            { label: 'Поработать', status: 1, id: 2 },
            { label: 'Покурить кальян', status: 1, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [
                ...todoData.splice(0, idx), 
                ...todoData.splice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-7">
                        <Filter />
                    </div>
                    <div className="col-5">
                        <SearchPanel />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TodoCreate />
                    </div>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />
            </div>
        )
    }
}