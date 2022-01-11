import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Forgotpassword from '../Forgotpassword/Forgotpassword';
  import Dashboard from '../Dashboard/Dashboard';


function RouterDom() {
    return (
        <Router>
             <Switch>
                  <Route path = "/" exact component = {Dashboard}/>
                  <Route path = "/forgotpassword" component = {Forgotpassword}/>
             </Switch>
        </Router>
    )
}

export default RouterDom