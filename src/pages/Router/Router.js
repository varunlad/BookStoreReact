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


function RouterDom() {
    return (
        <Router>
             <Switch>
                  <Route path = "/" exact component = {Dashboard}/>
                  <Route path = "/forgotpassword" component = {Forgotpassword}/>
                  <Route path = "/Home" component = {Home}/>
                  <Route path = "/Wishlist" component = {Wishlist}/>
             </Switch>
        </Router>
    )
}

export default RouterDom