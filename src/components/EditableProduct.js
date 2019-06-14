import React from 'react';
import Product from './Product';
import EditProductForm from './EditProductForm'

class EditableProduct extends React.Component {
  state = {
    editing: false,
  }

  handleEditFormToggle = () => {
    this.setState({editing: !this.state.editing})
  }

 render(){
    return (
      <div className="product">
        <Product
         {...this.props}
         onEditClick={this.handleEditFormToggle}
        />
        {this.state.editing ?  (<EditProductForm
          id={this.props.id}
          onEditFormToggleClick={this.handleEditFormToggle}
          product={this.props.product}
          />) : ''}
      </div>
    )
  };
}

export default EditableProduct;
