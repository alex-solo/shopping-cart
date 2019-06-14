import React, { Component } from 'react';
import Header from './Header'
import ProductsWrapper from './ProductsWrapper'

class Shop extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductsWrapper />
      </div>
    );
  }
}

export default Shop;
