import React from 'react';

class ProductForm extends React.Component {
  state = {
    title: '',
    price: '',
    quantity: '',
  }

  componentDidMount() {
    let {title, price, quantity} = this.props;

    if (title && price && quantity) {
      this.setState({
        title,
        price,
        quantity,
      })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let newProduct = {...this.state }
    
    this.props.onFormSubmit(newProduct);

    if (this.props.onCancel) {
      this.props.onCancel();
    }

    this.setState({
      title: '',
      price: '',
      quantity: '',
    })
  }

  onValueChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    this.setState({
      [ name ]: value,
    })
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input name="title" type="text" id="product-name" 
            value={this.state.title}
            onChange={this.onValueChange}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input name="price" type="text" id="product-price" 
            value={this.state.price}
            onChange={this.onValueChange} />
           </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input name="quantity" type="text" id="product-quantity" 
            value={this.state.quantity}
            onChange={this.onValueChange}/>
        </div>

        <div className="actions form-actions">
          <a className="button"
            id='add'
            onClick={this.handleFormSubmit}
          >{this.props.leftButtonText}</a>
          <a onClick={() => this.props.onCancel && this.props.onCancel()} className="button">{this.props.rightButtonText}</a>
        </div>
      </form>
    );
  }
}

export default ProductForm;