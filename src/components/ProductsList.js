import React from 'react';
import EditableProduct from './EditableProduct';

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render()  {
    let editableProducts = this.props.products.map((product) => {
      return (
        <EditableProduct
          key={product.id}
          {...product}
        />
      );
    });

    return (
      <div className='product-listing'>
        <h2>Products</h2>
        { editableProducts }
      </div>
    );
  }
};

export default ProductsList;
