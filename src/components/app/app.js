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
        ],
        term: '',
        filter: 'all'
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

    search = (items, term) => {
        if (term.length <= 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filter = (items, filter) => {
        
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter(item => !item.done)
            case 'done':
                return items.filter(item => item.done)
            default:
                return items
        }
    }

    onSearch = (term) => {
        this.setState(() => {
            return {
                term
            }
        })
    }

    onFilterChange = (filter) => {
        this.setState(() => {
            return {
                filter
            }
        })
    }

    render() {

        const { term, todoData, filter } = this.state

        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter(el => el.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="container">
                <Header todo={ todoCount } todoDone={ doneCount } />
                <div className="row">
                    <div className="col-7">
                        <Filter
                        filter={ filter }
                        onFilterChange={ this.onFilterChange }
                        />
                    </div>
                    <div className="col-5">
                        <SearchPanel
                        onSearch={ this.onSearch }
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TodoCreate 
                        onCreate={ this.createItem } />
                    </div>
                </div>
                <TodoList
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleStatus={ this.onToggleStatus }
                    onToggleDone={ this.onToggleDone }
                    />
            </div>
        )
    }
}