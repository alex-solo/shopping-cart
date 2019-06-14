import React from 'react';
import CartItemList from './CartItemList';
import { connect } from 'react-redux';

const ShoppingCart = (props) => {
  return (
      <div className="cart">
        <h2>Your Cart</h2>
        {
          props.items.length > 0 ? 
            <CartItemList 
              cart={props.items}
            />
            :
            <div>
              <p>Your cart is empty</p>
              <p>Total: $0</p>
              <a className="button checkout disabled">Checkout</a>
            </div>  
        }
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCart);