// Frameworks
import React, { Component } from 'react'

class Shelf extends Component {
  constructor (props) {
    super(props)
    this.onAddItemToCart = this.onAddItemToCart.bind(this)
    this.state = {
      shelfItems: [
        'shampoo',
        'chocolate',
        'yogurt'
      ]
    }
  }

  onAddItemToCart (item) {
    this.props.addItem(item)
  }

  render () {
    // console.log('SHELFJSCOMPONENTSHELFJSCOMPONENTSHELFJSCOMPONENT')
    // console.log({shelfjsProps: this.props})
    // console.log({shelfjsState: this.state})
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return (
        <li key={idx}>
          <button onClick={() => this.onAddItemToCart(item)}>
            [+]
          </button>
          {item}
        </li>
      )
    })
    return (
      <div>
        <h2>Store Shelf:</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    )
  }
}

export default Shelf
