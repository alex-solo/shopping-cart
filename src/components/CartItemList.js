import React, { Component } from 'react';
import CartItem from './CartItem';
import helpers from '../lib/helpers';

class CartItemList extends Component {
  render() {
    const cart = this.props.cart;
    const itemizedList = cart.map(product => {
      return (
        <CartItem
          key={product.id}
          {...product}
        />
      )
    });

    return (
      <table className="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          { itemizedList }
          <tr>
            <td colSpan="3" className="total">
              ${helpers.cartTotal(cart)}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
};

export default CartItemList;
