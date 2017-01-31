// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as UIActions from '../actions/UIActions'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-toggleable-md navbar-inverse'>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <a className='navbar-brand' href='#'><h3>Crypto-X</h3></a>
        <div className='collapse navbar-collapse d-flex' id='navbarsExampleDefault'>
          <button
            onClick={() => window.alert('SIGNIN FIRE')}
            className='btn btn-primary btn-md ml-auto p-2'>SIGN IN</button>
        </div>
      </nav>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    ui: state.UI
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(UIActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
