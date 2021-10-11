import "./App.scss";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <>
          <Topbar></Topbar>

          <div className='container'>
            <Sidebar></Sidebar>

            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/users'>
              <UserList></UserList>
            </Route>
            <Route path='/user/:userId'>
              <User></User>
            </Route>
            <Route path='/newUser'>
              <NewUser></NewUser>
            </Route>
            <Route path='/products/'>
              <ProductList></ProductList>
            </Route>
            <Route path='/product/:productsId'>
              <Product></Product>
            </Route>
            <Route path='/newProduct'>
              <NewProduct></NewProduct>
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
