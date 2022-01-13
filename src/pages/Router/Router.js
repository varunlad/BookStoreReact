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
             </Switch>
        </Router>
    )
}

export default RouterDom