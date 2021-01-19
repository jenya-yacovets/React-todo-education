import React, { Component } from 'react'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearch = (e) => {
        this.setState({ 
            term: e.target.value 
        })
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className="d-flex">
                <input className="form-control me-2"
                onChange={ this.onSearch }
                value={ this.state.term }
                type="search" placeholder="Поиск по задачам" />
            </div>
        )
    }
}