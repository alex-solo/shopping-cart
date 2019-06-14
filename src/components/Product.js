import React from 'react';
import client from '../lib/client'
import { connect } from 'react-redux';

const Product = (props) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    let product = props.product
    props.onAddToCart(product)
  };

  const handleDeleteFromList = (e) => {
    e.preventDefault()
    let id = props.product.id
    props.onDeleteFromList(id);
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    props.onEditClick()
  }

  let {title, price, quantity} = props.product
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} Left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart"
           onClick={handleAddToCart}>
          Add to Cart
        </a>
        <a className="button edit"
           onClick={handleEditClick}>
          Edit
        </a>
      </div>
      <a className="delete-button"
         onClick={handleDeleteFromList} >
        <span>X</span>
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
 return {
  onAddToCart: (product) => {
    dispatch({product, type: "ADD_PRODUCT_TO_CART"});
  },
  onDeleteFromList: (id) => {
    client.delete(`/api/products/${id}`)
          .then(() => {
    dispatch({id, type: 'DELETE_PRODUCT'});
    });
  }

 };
};

export default connect(null, mapDispatchToProps)(Product);
