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
    case 'ADD_ITEM':
      return {
        availableItems: initialState.availableItems,
        chosenItems: [ ...state.chosenItems, payload.item ]
      }
    case 'CONNECT_UPORT':
      return {
        ...state,
        uport: payload.data
      }
    case 'LOGIN_USER':
      return {
        ...state
      }
    default:
      return state
  }
}
