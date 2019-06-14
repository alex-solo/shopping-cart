import React from 'react';
import ProductsList from './ProductsList'
import ToggleableAddProduct from './ToggleableAddProduct'

const ProductsWrapper = (props) => {
  return (
    <main>
      <ProductsList />
      <ToggleableAddProduct />
    </main>
  )
};

export default ProductsWrapper

