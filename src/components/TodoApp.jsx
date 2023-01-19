import React, { Component } from 'react'
import './TodoApp.css'

export default class TodoApp extends Component {
    state = {
        text: '',
        items: [],
        edit: null
    }

    onHandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onHandleEditChange = (event) => {

        const abc = this.state.items
        abc[this.state.edit] = event.target.value
        this.setState({
            items: abc,
            [this.state.edit]: event.target.value
        })
    }

    storeItems = () => {
        const input = this.state.text
        const allItems = this.state.items

        allItems.push(input)

        this.setState({
            items: allItems,
            text: '',
            edit: null
        })
    }

    removeitems = (key) => {
        const allItems = this.state.items

        allItems.splice(key, 1)

        this.setState({
            items: allItems,
            edit: null
        })
    }

    edititems = (key) => {
        this.setState({
            edit: key
        })
    }

    render() {
        let button = true

        if (this.state.text !== '') {
            button = false
        }

        return (
            <div className='todo-container'>
                <h1 className='title'>TODO APP</h1>
                <div className='input-section'>
                    <input className='input-addfield' onChange={this.onHandleChange} type='text' name='text' value={this.state.text} required />
                    <button onClick={this.storeItems} type='button' disabled={button}>&nbsp;➕&nbsp;</button>
                </div>
                <ul>
                    {this.state.items.map((items, index) => {
                        return (
                            <div className='todo-list' key={index}>
                                <li>
                                    <input className='input-field' onChange={this.onHandleEditChange} name={index} type='text' value={this.state.items[index]} disabled={index !== this.state.edit} />
                                </li>
                                {/* <input hidden={index === this.state.edit}>{items}</input> */}
                                <button onClick={() => { this.edititems(index) }}>&nbsp;✏️&nbsp; </button>
                                <button onClick={() => { this.removeitems(index) }}>&nbsp;❌&nbsp;</button>

                            </div>
                        )
                    }).reverse()}
                </ul>
            </div>
        )
    }
}
