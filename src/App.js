import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js";
import ProductList from './Components/ProductList/ProductList';
import { Switch, Route } from 'react-router-dom'
import Menu from "./Components/Menu/Menu"
import CartDialog from "./Components/CartDialog/CartDialog";
import Details from "./Components/Details/Details"
import Order from "./Components/Order/Order"
import Login from "./Components/Login/Login"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <CartDialog />
            <Switch>
              <Route path='/search/' component={ProductList} />
              <Route path='/' exact component={ProductList} />
              <Route path='/details/:id' component={Details} />
              <Route path='/about' render={() => <div>About us 
                <hr/>
                <p>It is the selling  of goods and services, over an electronic network, primarily the internet.</p>
              </div>} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path='/order' component={Order} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
