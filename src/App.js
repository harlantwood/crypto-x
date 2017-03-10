// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as AppActions from './actions/AppActions'

import { Connect, SimpleSigner } from 'uport-connect'

// Assets
import chart from './chart.png'
import './App.css'

// Components
import Navbar from './components/Navbar'

const uport = new Connect('CryptoX', {
  clientId: '0xe2fef711a5988fbe84b806d4817197f033dde050',
  signer: SimpleSigner('4894506ba6ed1a2d21cb11331620784ad1ff9adf1676dc2720de5435dcf76ac2')
})

class App extends Component {

  constructor (props) {
    super(props)
    this.signInbtnClick = this.signInbtnClick.bind(this)
    this.state = { modalOpen: false }
  }

  uportBtnClick () {
    this.setState({
      modalOpen: false
    })
    uport
      .requestCredentials({
        requested: ['name', 'phone', 'country'],
        notifications: true
      })
      .then((credentials) => {
        this.props.actions.connectUport(credentials)
        console.log(this.props, this.state)
      })
  }

  signInbtnClick () {
    console.log('signInbtnClick')
    this.setState({
      modalOpen: true
    })
  }

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
                    <button
                      style={{cursor: 'pointer'}}
                      onClick={() => this.signInbtnClick()}
                      className='btn btn-primary btn-md ml-auto p-2'>SIGN IN</button>
                  </div>
                )
                : <img alt='chart' src={chart} style={{maxWidth: '100%'}} />
            }
            {
              this.state.modalOpen
                ? (
                  <div id='signInModal' className='Center-Block Absolute-Center is-Fixed is-Variable Modal'>
                    <h2>Sign in to Crypto-X</h2>
                    <button className='fb-btn'>Log in with Facebook</button>
                    <br />
                    <br />
                    <button
                      className='uport-btn'
                      onClick={() => this.uportBtnClick()}>Log in with uPort</button>
                    <hr />
                    <form>
                      <input type='text' placeholder='Name' disabled />
                      <br />
                      <br />
                      <input type='text' placeholder='Password' disabled />
                      <br />
                      <br />
                      <button  className='form-btn' disabled>Sign In</button>
                    </form>
                  </div>
                )
                : null
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
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
