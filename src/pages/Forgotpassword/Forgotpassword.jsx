import React from 'react'
import './Forgotpassword.css'
import img from '../../asserts/booklogo.png'
import { Input, Space } from 'antd';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { forgotpassword } from '../../services/services';

function Forgotpassword() {
    let history=useHistory();
    const [forgotObj, setForgotObj] = React.useState({email:""})
    const takeEmailValue = (e) => {
        console.log(e.target.value)
        setForgotObj({...forgotObj,email:e.target.value})
    }
    let tempemail=forgotObj.email
    console.log(tempemail)
    const Reset=()=>{
        forgotpassword(tempemail).then((resp)=>{
        console.log(resp)
        history.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="ForgotOutLine">
            <div className="ForgotHeader">
                <div className="Education"> 
                <img src={img} alt="" class="Edu"/>
                BookStore
                </div>
            </div>
            <div className="forgotmaincontent">
               <div className="forgottext">
                Forgot Password?   
               </div>
               <div className="solver">
               <div className="forgotGroup">
                   <div className="forgotGroup1">
                  <p>Enter Your Email Address and we will send you a link to reset your password</p>
                   </div>
                   <div className="Email">
                     <div className="text1">Email Id</div>
                 </div>
                 <div className="EmailInput">
                 <Input  size="middle" style={{width:230,backgroundColor:'transparent'}}  onChange={takeEmailValue} />
                 </div>
                 <div className="LoginButton">
                     <Button style={{width:230,backgroundColor:'maroon',color:'white'}} onClick={Reset}>Reset Password</Button>   
                 </div>
                 <div className="forgotcreateaccount"> 
                    <Button type="text" onClick={()=>(history.push('/'))}  style={{width:120,backgroundColor:'whitesmoke'}}>Create Account</Button>                
                 </div>
               </div> 
               </div>
            </div>
        </div>
    )
}

export default Forgotpassword
