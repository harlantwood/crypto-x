// Frameworks
import React, { Component } from 'react'

// Assets
import chart from './chart.png'
import './App.css'

// Components
// import Cart from './components/Cart'
import Navbar from './components/Navbar'

// import { Connect } from 'uport-connect'
// const uport = new Connect('CryptoX')

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Navbar />
        </div>
        <div className='App-body'>
          <div className='App-body-intro'>
            <h4>Welcome to Crypto X</h4>
            <h6>This is a test application built by the uPort team to demonstrate the log-in and credentialing functionalities of our uPort libraries.</h6>
            <hr />
            <img alt='chart' src={chart} style={{maxWidth: '100%'}}/>
          </div>
          {/* <Cart /> */}
        </div>
      </div>
    )
  }
}

export default App
