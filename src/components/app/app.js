import React from 'react'

import Header from '../header'
import Filter from '../filter'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import TodoCreate from '../todo-create'

const App = () => {

    const todoData = [
        { label: 'Выпить кофе', status: 1, id: 1 },
        { label: 'Поработать', status: 1, id: 2 },
        { label: 'Покурить кальян', status: 1, id: 3 }
    ]

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
                    <TodoCreate/>
                </div>
            </div>
            <TodoList todos={todoData} />
        </div>
    )
}

export default App