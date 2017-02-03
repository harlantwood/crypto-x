// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as UIActions from '../actions/UIActions'

import { Connect } from 'uport-connect'
const uport = new Connect('CryptoX')

class Navbar extends Component {

  constructor (props) {
    super(props)
    this.signInbtnClick = this.signInbtnClick.bind(this)
  }

  signInbtnClick (data) {
    uport
      .requestCredentials()
      .then((credentials) => {
        this.props.actions.connectUport(credentials)
        this.props.actions.showLoggedInUser(credentials)
        console.log(this.props, this.state)
    })
  }

  render () {
    return (
      <nav className='navbar navbar-toggleable-md navbar-inverse d-flex flex-row'>
        {/*
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
        */}
        <a className='navbar-brand p-2' href='#'><h3>Crypto-X</h3></a>
        <div className='collapse navbar-collapse d-flex flex-row ml-auto p-2' id='navbarsExampleDefault'>
          {
            !this.props.uport
              ? (
                <button
                  style={{cursor: 'pointer'}}
                  onClick={() => { this.signInbtnClick() }}
                  className='btn btn-primary btn-md ml-auto p-2'>SIGN IN</button>
              )
              : (
                <div>
                  <div style={{
                    display: 'inline-block',
                    'verticalAlign': 'bottom'}}>
                    <span style={{display: 'block', textAlign: 'right'}}>{this.props.uport.name}</span>
                    <span style={{display: 'block', textAlign: 'right', 'font-size': '12px'}}>
                      {
                        `${
                          this.props.uport.address.slice(0, 6)
                        } ...
                        ${
                          this.props.uport.address.slice(this.props.uport.address.length - 6)
                        }`
                      }
                    </span>
                  </div>
                  <span>&nbsp;&nbsp;</span>
                  <img
                    style={{
                      display: 'inline-block',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      border: '2px solid white'
                    }}
                    alt='user-img'
                    src={
                      'https://ipfs.infura.io' +
                      this.props.uport.image.contentUrl} />

                </div>
              )
          }
        </div>
      </nav>
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
    actions: bindActionCreators(UIActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
