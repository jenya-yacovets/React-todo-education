import React, { Component } from 'react'

import Header from '../header'
import Filter from '../filter'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import TodoCreate from '../todo-create'

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Выпить кофе'),
            this.createTodoItem('Поработать'),
            this.createTodoItem('Покурить кальян')
        ]
    }

    createTodoItem (name) {

        return {
            label: name, 
            status: 1,
            done: false,
            id: this.maxId++ 
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        }) 
    }

    createItem = (name) => {
        const newItem = this.createTodoItem(name)

        this.setState(({ todoData }) => {

            const newArray = [
                newItem,
                ...todoData
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleStatus = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldElement = todoData[idx]
            const newElement = {...oldElement, 
            status: oldElement.status === 1 ? 2 : 1}

            const newArray = [
                ...todoData.slice(0, idx), 
                newElement,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const oldElement = todoData[idx]
            const newElement = {...oldElement, 
            done: !oldElement.done}

            const newArray = [
                ...todoData.slice(0, idx), 
                newElement,
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {

        const doneCount = this.state.todoData.filter(el => el.done).length
        const todoCount = this.state.todoData.length - doneCount

        return (
            <div className="container">
                <Header todo={todoCount} todoDone={doneCount} />
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
                        <TodoCreate 
                        onCreate={this.createItem} />
                    </div>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleStatus={this.onToggleStatus}
                    onToggleDone={this.onToggleDone}
                    />
            </div>
        )
    }
}