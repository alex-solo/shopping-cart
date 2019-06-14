import React from 'react';
import ProductsList from './ProductsList';
import store from '../lib/store'
import client from '../lib/client';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      client.get('/api/products')
            .then((products) => dispatch({products, type: 'FETCH_PRODUCTS'}))
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
