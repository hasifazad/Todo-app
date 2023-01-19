import React, { Component } from 'react'
import TodoApp from './components/TodoApp'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoApp />
        <p className='createdby'>by Hasif Azad</p>
      </React.Fragment>
    )
  }
}
