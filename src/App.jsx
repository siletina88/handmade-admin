import './App.scss'

import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'

function App() {
  return (
    <Router>
      <Topbar></Topbar>

      <div className="container">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/user/:userId">
            <User></User>
          </Route>
          <Route path="/newUser">
            <NewUser></NewUser>
          </Route>
          <Route path="/products/">
            <ProductList></ProductList>
          </Route>
          <Route path="/product/:productsId">
            <Product></Product>
          </Route>
          <Route path="/newProduct">
            <NewProduct></NewProduct>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
