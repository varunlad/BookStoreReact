import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Forgotpassword from '../Forgotpassword/Forgotpassword';
  import Dashboard from '../Dashboard/Dashboard';
import Home from '../../component/Home/Home';
import Wishlist from '../../component/Wishlist/Wishlist';
import PleaseLogin from '../../component/PleaseLogin/PleaseLogin';
import Orders from '../../component/Orders/Orders';
import OrderPlaced from '../../component/OrderPlaced/OrderPlaced';
import BookDescription from '../../component/BookDescription/BookDescription';
import Cart from '../../component/Cart/Cart';


function RouterDom() {
    return (
        <Router>
             <Switch>
                  <Route path = "/" exact component = {Dashboard}/>
                  <Route path = "/forgotpassword" component = {Forgotpassword}/>
                  <Route path = "/Home" component = {Home}/>
                  <Route path = "/Wishlist" component = {Wishlist}/>
                  <Route path = "/pleaselogin" component = {PleaseLogin}/>
                  <Route path = "/myorders" component = {Orders}/>
                  <Route path = "/orderplaced" component = {OrderPlaced}/>
                  <Route path = "/bookdescription" component = {BookDescription}/>
                  <Route path = "/cart" component = {Cart}/>
             </Switch>
        </Router>
    )
}

export default RouterDom