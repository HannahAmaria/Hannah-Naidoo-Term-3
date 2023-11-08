import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetail from './landing/ProductDetail';
import Landing from './landing/Landing';
import LoginForm from './landing/LoginForm';
import AddWatchForm from './landing/AddWatchForm';
import OrderList from './landing/OrderList';
import Cart from './landing/Cart';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SignUpForm from './landing/SignUpForm';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
          <Route path="/signup" exact>
          <SignUpForm />
          </Route>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/AddWatchForm" exact>
          <AddWatchForm />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/orders" exact>
          <OrderList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

