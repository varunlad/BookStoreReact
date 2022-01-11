import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import "antd/dist/antd.css";
import { Button } from 'antd';
import img from '../../asserts/2766594@2x.png'
import { Input, Space } from 'antd';
import { useHistory } from "react-router-dom";

function Login(props) {
    let history=useHistory();
    const takeclick2 =  () => {
        console.log(props)
        props.listentologinnote1(true)
    }
    return (
        <div className="login-main">
         <div className="loginfirstdiv">
             <div className="loginfirstrow">
             <img src={img} alt="" class="shoppinglogo"/>
             <p><strong>ONLINE BOOK SHOPPING</strong></p>
             </div>
             <div className="loginsecondrow">
                 <div className="loginsecondrow2">
                    <div className="loginsecondrow2a">LOGIN</div>
                    <div className="loginsecondrow2b" onClick={takeclick2}>SIGNUP</div>
                 </div>
                 <div className="Email">
                     <div className="text">Email</div>
                 </div>
                 <div className="EmailInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent'}}  />
                 </div>
                 <div className="Password">
                     <div className="text">Password</div>
                 </div>
                 <div className="PasswordInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent'}}  />
                 </div>
                 <div className="ForgotPassword">
                     <p onClick={()=>(history.push('/forgotpassword'))} >Forgot Password?</p>
                 </div>
                 <div className="LoginButton">
                     <Button type="primary" danger style={{width:280}}>Login</Button>   
                 </div>
                 <div className="or">
                     <p>-------------    OR     -------------</p>
                 </div>
                 <div className="Bottom">
                     <div className="BottomA">
                     <Button type="primary" style={{width:120}} >FaceBook</Button>
                     </div>
                     <div className="BottomB">
                     <Button style={{width:120,backgroundColor:'whitesmoke'}} >Google</Button>
                     </div>
                 </div>
             </div>
             </div>   
           
        </div>
    )
}

export default Login
