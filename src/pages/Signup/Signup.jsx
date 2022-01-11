import React from 'react'
import './Signup.css'
import "antd/dist/antd.css";
import { Button } from 'antd';
import img from '../../asserts/2766594@2x.png'
import { Input, Space } from 'antd';

function Signup() {
    return (
        <div className="login-main">
         <div className="loginfirstdiv">
             <div className="loginfirstrow">
             <img src={img} alt="" class="shoppinglogo"/>
             <p><strong>ONLINE BOOK SHOPPING</strong></p>
             </div>
             <div className="loginsecondrow">
                 <div className="loginsecondrow2">
                    <div className="loginsecondrow2aa">LOGIN</div>
                    <div className="loginsecondrow2bb">SIGNUP</div>
                 </div>
                 <div className="FullName">
                     <div className="text">FullName</div>
                 </div>
                 <div className="FullNameInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent'}}  />
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
                 <div className="PhoneNumber">
                     <div className="text">PhoneNumber</div>
                 </div>
                 <div className="PhoneNumberInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent'}}  />
                 </div>
                 <div className="LoginButton">
                     <Button type="primary" danger style={{width:280}}>Login</Button>   
                 </div>                
             </div>
             </div>   
           
        </div>
    )
}

export default Signup
