// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as CartActions from '../actions/CartActions'

// Components
import Shelf from './Shelf'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    // console.log('CARTJSCOMPONENTCARTJSCOMPONENTCARTJSCOMPONENT')
    // console.log({cartjsProps: this.props})
    // console.log({cartjsState: this.state})
    return (
      <div className='Cart'>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Shopping Bag</h2>
        <ol>
          {
            this.props.cart
              ? (
                this.props.cart.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              )
              : null
          }
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
