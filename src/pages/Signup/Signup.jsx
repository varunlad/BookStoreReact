import React from 'react'
import './Signup.css'
import "antd/dist/antd.css";
import { Button } from 'antd';
import img from '../../asserts/2766594@2x.png'
import { Input, Space } from 'antd';
import { useHistory } from "react-router-dom";
import { registers } from '../../services/services';

const nameRegex=/^[A-Z]{1}[a-z]{2,}$/
    const emailUpRegex=/^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.][a-zA-Z]*$/
    const psSignUpRegex=/^[a-zA-Z0-9]{1,}[A-Z]*[0-9]*[@&#%$_-][a-zA-Z0-9]*$/
    const numberRegex=/^[0-9]{10}$/


function Signup(props) {
    let history=useHistory();
    const[signUpError,setSignUpError]=React.useState({firstBorder:"",firstErrorMsg:"",lastBorder:"",lastErrorMsg:"",emailUpBorder:"",emailUpErrorMsg:"",psSignUpBorder:"",psSignUpErrorMsg:""})
    const[signUpObj,setSignUpObj]=React.useState({fullName:"",email:"",password:"",phoneNumber:null})
    // const testObj={
    //     "fullName": "Srabhai",
    //     "email": "sarabhai12@gmail.com",
    //     "password": "Varun@12344",
    //     "phoneNumber": 9087678909
    //   }
    const takeclick =  () => {
        console.log(props)
        props.listentologinnote1(false)
    }
    const takeFullName=(e) => {
        setSignUpObj({...signUpObj,fullName:e.target.value})
    }

    const takeemailUp=(e) => {
        setSignUpObj({...signUpObj,email:e.target.value})
    }

    const takeSignUpPassword=(e) => {
        setSignUpObj({...signUpObj,password:e.target.value})
    }

    const takeNumber=(e) => {
        setSignUpObj({...signUpObj,phoneNumber:parseFloat(e.target.value)})
    }
    const register=() => {
        console.log(signUpObj)
        if((nameRegex.test(signUpObj.fullName)==true) && (numberRegex.test(signUpObj.phoneNumber)==true) && (emailUpRegex.test(signUpObj.email)==true) && (psSignUpRegex.test(signUpObj.password)==true)) {
            console.log(true)
            setSignUpError("")
            registers(signUpObj).then((resp) => {   
                console.log(resp)
                history.push('/')
            }).catch((err) => {           
                console.log(err)
            })
        }     
        else if((nameRegex.test(signUpObj.fullName)==false) &&  (numberRegex.test(signUpObj.phoneNumber)==true) && (emailUpRegex.test(signUpObj.email)==true) && (psSignUpRegex.test(signUpObj.password)==true)){
            console.log(false)
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Invalid fullname"})
        }
        else if((numberRegex.test(signUpObj.phoneNumber)==false) && (nameRegex.test(signUpObj.fullName)==true) && (emailUpRegex.test(signUpObj.email)==true) && (psSignUpRegex.test(signUpObj.password)==true)){
            console.log(false)
            setSignUpError({lastBorder:"1px solid red",lastErrorMsg:"Invalid number"})
        }
        else if((emailUpRegex.test(signUpObj.email)==false && (nameRegex.test(signUpObj.fullName)==true) && (numberRegex.test(signUpObj.phoneNumber)==true) && (psSignUpRegex.test(signUpObj.password)==true))){
            console.log(false)
            setSignUpError({emailUpBorder:"1px solid red",emailUpErrorMsg:"Invalid email"})
        }
        else if((psSignUpRegex.test(signUpObj.password)==false) && (nameRegex.test(signUpObj.fullName)==true) && (numberRegex.test(signUpObj.phoneNumber)==true) && (emailUpRegex.test(signUpObj.email)==true)){
            console.log(false)
            setSignUpError({psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Invalid password"})
        }
        else{
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Enter fullname",lastBorder:"1px solid red",lastErrorMsg:"Enter Number",emailUpBorder:"1px solid red",emailUpErrorMsg:"Enter email",psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Enter password"})
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
                    <div className="loginsecondrow2aa"  onClick={takeclick}>LOGIN</div>
                    <div className="loginsecondrow2bb" >SIGNUP</div>
                 </div>
                 <div className="FullName">
                     <div className="text">FullName</div>
                 </div>
                 <div className="FullNameInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent',border:signUpError.firstBorder}} onChange={takeFullName} />
                 <p id="errormsg">{signUpError.firstErrorMsg}</p>
                 </div>
                 
                 <div className="Email">
                     <div className="text">Email</div>
                 </div>
                 <div className="EmailInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent',border:signUpError.emailUpBorder}}  onChange={takeemailUp} />
                 <p id="errormsg">{signUpError.emailUpErrorMsg}</p>
                 </div>
                 
                 <div className="Password">
                     <div className="text">Password</div>
                 </div>
                 <div className="PasswordInput">
                 <Input.Password  size="middle" style={{width:280,backgroundColor:'transparent',border:signUpError.psSignUpBorder}}  onChange={takeSignUpPassword} />
                 <p id="errormsg">{signUpError.psSignUpErrorMsg}</p>
                 </div>
                
                 <div className="PhoneNumber">
                     <div className="text">PhoneNumber</div>
                 </div>
                 <div className="PhoneNumberInput">
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent',border:signUpError.psSignUpBorder}}  onChange={takeNumber} />
                 <p id="errormsg">{signUpError.lastErrorMsg}</p>
                 </div>
                 
                 <div className="LoginButton">
                     <Button style={{width:280,backgroundColor:'maroon',color:'white'}} onClick={register}>SignUp</Button>   
                 </div>                
             </div>
             </div>   
           
        </div>
    )
}

export default Signup
