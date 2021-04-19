import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';


const Routes = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <BrowserRouter>
        <Navbar showSideNav = {showSideNav} setShowSideNav = {setShowSideNav}/>
      <Switch>
          <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              {...props}
              showSideNav = {showSideNav}
            />
          )}
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
