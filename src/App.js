// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Assets
import chart from './chart.png'
import './App.css'

// Components
import Navbar from './components/Navbar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Navbar />
        </div>
        <div className='App-body'>
          <div className='App-body-intro'>
            {
              !this.props.uport
                ? (
                  <div>
                    <h4>Welcome to Crypto X</h4>
                    <h6>
                      This is a test application built by the uPort team
                      to demonstrate the log-in and credentialing
                      functionalities of our uPort libraries.
                    </h6>
                  </div>
                )
                : <img alt='chart' src={chart} style={{maxWidth: '100%'}} />
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    uport: state.App.uport,
    ui: state.App.ui
  }
}
export default connect(mapStateToProps)(App)
