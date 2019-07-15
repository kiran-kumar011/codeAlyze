import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { getAllProducts } from './actions';
import products from './product/products.json';
import Home from './Home';
import EditProduct from './EditProduct';


class App extends Component {


  componentDidMount() {
    this.props.dispatch(getAllProducts(products));
  }
 
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/edit-product' component={EditProduct} />
      </Router>
    );
  }
}

export default connect()(App);
