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
          <h2>Welcome to Crypto-X</h2>
        </div>
        <Cart />
      </div>
    )
  }
}

export default App
