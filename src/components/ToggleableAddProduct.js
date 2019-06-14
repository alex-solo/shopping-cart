import React, { Component } from 'react';
import client from '../lib/client';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';

// break out Form  into separate component

class ToggleableAddProduct extends Component {
  render() {
   return (
     <div className="add-form visible">
       <p><a className="button add-product-button">Add A Product</a></p>
       <h3>Add Product</h3>
       <ProductForm
          onFormSubmit={this.props.onFormSubmit}
          leftButtonText='Add'
          rightButtonText='Cancel'
       />
    </div>
    )
  }
 }

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (product) => {
      client.post('/api/products', product)
      .then(product => {
        dispatch({product, type: 'ADD_PRODUCT'})
    })
    },
  };
};

export default connect(null, mapDispatchToProps)(ToggleableAddProduct);
