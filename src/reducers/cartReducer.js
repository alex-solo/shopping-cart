const cartReducer = ((state=[], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
    const someInCart = state.some(prod => prod.id === action.product.id)
    let updatedCart;

    while (action.product.quantity > 0) {
      if (someInCart) {
        updatedCart = state.map((product) => {
          if (product.id === action.product.id) {
            return Object.assign({}, product, {quantity: product.quantity + 1})
          } else {
            return product;
          }
        });
      } else {
        updatedCart = state.concat(Object.assign({}, action.product, {quantity: 1})); 
      }
      return updatedCart;
    }
      return state;
    case 'DELETE_PRODUCT':
      return state.filter(prod => prod.id !== action.id);
    default:
      return state;
  }
})

export default cartReducer;