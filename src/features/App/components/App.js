import React, { Component } from 'react';
import './App.css';
import ProductList from './../../ProductList/components/ProductList';
import CartList from './../../CartList/components/CartList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartList/>
        <ProductList/>
      </div>
    );
  }
}

export default App;
