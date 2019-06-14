import React from 'react';
import CartItemList from './CartItemList';
import store from '../lib/store';

class ShoppingCart extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const items = store.getState().cart;
    return (
      <div className="cart">
        <h2>Your Cart</h2>
      {
        items.length > 0 ? 
          <CartItemList 
            cart={items}
          />
          :
          <div>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <a className="button checkout disabled">Checkout</a>
          </div>  
      }
  </div>
    );
  }
}

export default ShoppingCart;