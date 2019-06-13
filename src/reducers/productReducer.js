const productReducer = ((state=[], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return state.concat(action.products)
    case 'ADD_PRODUCT':
      return state.concat(action.product)
    case 'UPDATE_PRODUCT':
      return state.map((product) => {
        if (product.id === action.product.id) {
          return {...action.product}
        } else {
          return product
        }
      })
    case 'DELETE_PRODUCT':
      return state.filter((product) => {
        return product.id !== action.id
      })
    default:
      return state;
  }
})

export default productReducer