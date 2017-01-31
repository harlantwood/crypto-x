// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as CartActions from '../actions/CartActions'

// Components
import Shelf from './Shelf'

class Cart extends Component {
  render () {
    return (
      <div className='Cart'>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Shopping Cart</h2>
        <ol>
          {
            this.props.chosenItems
              ? (
                this.props.chosenItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              )
              : 'ERROR: this.props.chosenItems is not available'
          }
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    chosenItems: state.App.chosenItems
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
