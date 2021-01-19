import React from 'react'

const Header = ({todo, todoDone}) => {

    return (
        <div>
            <br/>
            <h1 className="text-center">Мой список задач</h1>
            <hr></hr>
            <p>Осталось выполнить: {todo}</p>
            <p>Выполнено: {todoDone}</p>
            <hr></hr>
        </div>
    )
}

export default Header