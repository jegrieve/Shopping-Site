import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';


const Routes = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
