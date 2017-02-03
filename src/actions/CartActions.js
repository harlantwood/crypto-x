// Actions
export const addToCart = (item) => {
  console.log('Adding item:', item)
  return {
    type: 'ADD_ITEM',
    item
  }
}
