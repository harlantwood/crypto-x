// Frameworks
import React, { Component } from 'react'

// Assets
import logo from './logo.svg'
import './App.css'

// Components
import Cart from './components/Cart'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to uPort</h2>
        </div>
        <div className='App-intro'>
          <Cart />
        </div>
        <div>If you don't have the uPort App yet, please Signup for our Alpha</div>
      </div>
    )
  }
}

export default App
