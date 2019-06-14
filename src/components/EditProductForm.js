import React from 'react'
import client from '../lib/client'
import store from '../lib/store'
import { connect } from 'react-redux';
import ProductForm from './ProductForm';

class EditProductForm extends React.Component {
  render() {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <ProductForm
          {...this.props.product}
          leftButtonText='Update'
          rightButtonText='Cancel'
          onFormSubmit={this.props.onFormSubmit}
          onCancel={this.props.onEditFormToggleClick}
        />
      </div>
    )
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    onFormSubmit: (product) => {
      client.put(`/api/products/${ownProps.id}`, product)
      .then((product) => {
      dispatch({product, type:'UPDATE_PRODUCT'})
      });
    }

  }
};

export default connect(null, dispatchToProps)(EditProductForm);
