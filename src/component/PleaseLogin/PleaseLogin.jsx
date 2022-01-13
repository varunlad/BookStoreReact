import React from 'react'
import Header from '../Header/Header'
import './PleaseLogin.css'
import img from '../../asserts/pleaselogin.jpeg'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

function PleaseLogin() {
    let history=useHistory();
    return (
        <div className="MainHeader">
        <Header />      
        <div className="pleaseloginouter">
       <div className="plaeasrloginInner">
           <div className="bigtext"><b>PLEASE LOG IN</b></div>
           <div>Login to view items in your wishlist </div>
           <div className="pleaseloginimg"> <img src={img} class="wish" /></div>
           <Button className="pop3" style={{width:120,borderBlockColor:'maroon',color:'maroon',outlineColor:'maroon'}} onClick={()=>(history.push('/'))} >Login/Signup</Button>
       </div>
        </div>
    </div>
    )
}

export default PleaseLogin
