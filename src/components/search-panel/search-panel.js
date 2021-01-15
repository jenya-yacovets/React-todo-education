import React from 'react'

const SearchPanel = () => {

    return (
        <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Поиск по задачам"/>
            <button className="btn btn-warning" type="button">Искать</button>
        </div>
    )
}

export default SearchPanel