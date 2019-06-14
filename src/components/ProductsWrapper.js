import React from 'react';
import ProductsList from './ProductsList'
import ToggleableAddProduct from './ToggleableAddProduct'
import ProductsListContainer from './ProductsListContainer';

const ProductsWrapper = (props) => {
  return (
    <main>
      <ProductsListContainer />
      <ToggleableAddProduct />
    </main>
  )
};

export default ProductsWrapper

