import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">rest-on-node</h1>
        </header>
        <p className="App-intro">
          <button>POST</button>
          <button>GET</button>
          <button>PUT</button>
          <button>DELETE</button>
        </p>
      </div>
    );
  }
}

class Products extends Component {
  constructor(props) {
    super(props);

    this.handleproductTitle = this.handleproductTitle.bind(this);
    this.handleproductPrice = this.handleproductPrice.bind(this);
    this.handleproductInStock = this.handleproductInStock.bind(this);
    this.handleproductQuantity = this.handleproductQuantity.bind(this);
    this.handleproductImage = this.handleproductImage.bind(this);

    this.state = {
      productTitle: "",
      productPrice: 0,
      productInStock: true,
      productQuantity: 0,
      productImage: null
    };
/*
    handleproductTitle(event) {
      this.setState({ productTitle: event.target.value });
    };

    handleproductPrice(event) {
      this.setState({ productPrice: event.target.value });
    };

    handleproductInStock(event) {
      this.setState({ productInStock: event.target.value });
    };

    handleproductQuantity(event) {
      this.setState({ productQuantity: event.target.value });
    };

    handleproductImage(event) {
      this.setState({ productImage: event.target.value });
    };
*/
  }
  render() {
    return (
      <p className="App-intro">
          <button>POST</button>
          <button>GET</button>
          <button>PUT</button>
          <button>DELETE</button>
        </p>
    )
  }
}

export default App;