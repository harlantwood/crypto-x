let initialState = {
  availableItems: [
    'shampoo',
    'chocolate',
    'yogurt'
  ],
  chosenItems: []
}

export default(state = initialState, payload) => {
  switch (payload.type) {
    case 'add':
      return {
        availableItems: initialState.availableItems,
        chosenItems: [ ...state.chosenItems, payload.item ]
      }
    default:
      return state
  }
}
