import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    console.log(this.state.products);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">rest-on-node</h1>
        </header>

        <p className="App-intro">
          PRODUCT CATALOG
          <button><Link to="/create">POST </Link></button>
          <button>GET </button>
          <button>PUT </button>
          <button>DELETE</button>
        </p>
        <table class="table table-stripe">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product =>
              <tr>
                <td><Link to={`/show/${product._id}`}>{product.title}</Link></td>
                <td>{product.price}</td>
                <td>{product.instock}</td>
                <td>{product.quanitity}</td>
                <td>{product.image}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;