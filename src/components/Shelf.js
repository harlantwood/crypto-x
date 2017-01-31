// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class Shelf extends Component {
  constructor (props) {
    super(props)
    this.onAddItemToCart = this.onAddItemToCart.bind(this)
  }

  onAddItemToCart (item) {
    this.props.addItem(item)
  }

  render () {
    return (
      <div>
        <h2>Store Shelf:</h2>
        <ul>
          {
            this.props.availableItems.map((item, idx) => (
              <li key={idx}>
                <button onClick={() => this.onAddItemToCart(item)}>
                  [+]
                </button>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    availableItems: state.Cart.availableItems
  }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators(CartActions, dispatch)
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Shelf)
export default connect(mapStateToProps)(Shelf)
