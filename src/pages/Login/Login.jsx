import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import "antd/dist/antd.css";
import { Button } from 'antd';
import img from '../../asserts/2766594@2x.png'
import { Input, Space } from 'antd';
import { useHistory } from "react-router-dom";
const emailRegex = /^[a-zA-Z0-9]+([.#_$+-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

function Login(props) {
    const [errorObj, setErrorObj] = React.useState(
        {emailRedColor:"",
        passRedColor:"",
        emailBorder:"",
        passBorder:""})

    const [loginObj, setLoginObj] = React.useState({email:"",pass:""})
    const takeEmailValue = (e) => {
        console.log(e.target.value)
        setLoginObj({...loginObj,email:e.target.value})
    }
    const takePasswordValue = (e) => {
        setLoginObj({...loginObj,pass:e.target.value})
    }

    let history=useHistory();
    const takeclick2 =  () => {
        console.log(props)
        props.listentologinnote1(true)
    }
    const Submmit =(e)=>{
        console.log(loginObj)
        if (emailRegex.test(loginObj.email)!==true && (passwordRegex.test(loginObj.pass))!==true)
        {
            console.log("In if part")
            setErrorObj({emailRedColor:"red",
            passRedColor:"red",
            emailBorder:"1px solid red",
            passBorder:"1px solid red"})
        }
        else if (emailRegex.test(loginObj.email)===true && (passwordRegex.test(loginObj.pass))!==true) {
            setErrorObj({emailRedColor:"",
            passRedColor:"red",
            emailBorder:"",
            passBorder:"1px solid red"})
        }
        else if (emailRegex.test(loginObj.email)!==true && (passwordRegex.test(loginObj.pass))===true){
            setErrorObj({emailRedColor:"red",
            passRedColor:"",
            emailBorder:"1px solid red",
            passBorder:""})
        }
        else{
            setErrorObj({emailRedColor:"",
            passRedColor:"",
            emailBorder:"",
            passBorder:""})
            }
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
                     <div className="text" style={{color:errorObj.emailRedColor}}>Email</div>
                 </div>
                 <div className="EmailInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent',border:errorObj.emailBorder}}  onChange={takeEmailValue} />
                 </div>
                 <div className="Password">
                     <div className="text"  style={{color:errorObj.passRedColor}}>Password</div>
                 </div>
                 <div className="PasswordInput">
                 <Input.Password  size="middle" style={{width:280,backgroundColor:'transparent',border:errorObj.passBorder}} onChange={takePasswordValue}  />
                 </div>
                 <div className="ForgotPassword">
                     <p onClick={()=>(history.push('/forgotpassword'))} >Forgot Password?</p>
                 </div>
                 <div className="LoginButton">
                     <Button type="primary" danger style={{width:280}} onClick={Submmit}>Login</Button>   
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
