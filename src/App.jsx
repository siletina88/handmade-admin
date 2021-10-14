// @ts-nocheck
import "./App.scss";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import OrderList from "./pages/orderList/OrderList";
import Order from "./pages/order/Order";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.auth.currentUser?.isAdmin);
  console.log(admin);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        {admin ? (
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
              <Route path='/orders/'>
                <OrderList></OrderList>
              </Route>
              <Route path='/order/:_id'>
                <Order></Order>
              </Route>
            </div>
          </>
        ) : (
          <Redirect to='/login'></Redirect>
        )}
      </Switch>
    </Router>
  );
}

export default App;
