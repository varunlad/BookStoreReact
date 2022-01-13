import React from 'react'
import './Signup.css'
import "antd/dist/antd.css";
import { Button } from 'antd';
import img from '../../asserts/2766594@2x.png'
import { Input, Space } from 'antd';
const nameRegex=/^[A-Z]{1}[a-z]{2,}$/
    const emailSignUpRegex=/^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.][a-zA-Z]*$/
    const psSignUpRegex=/^[a-zA-Z0-9]{1,}[A-Z][0-9][@&#%$_-][a-zA-Z0-9]*$/
    const numberRegex=/^[0-9]{10}$/


function Signup(props) {
    const[signUpError,setSignUpError]=React.useState({firstBorder:"",firstErrorMsg:"",lastBorder:"",lastErrorMsg:"",emailSignUpBorder:"",emailSignUpErrorMsg:"",psSignUpBorder:"",psSignUpErrorMsg:""})
    const[signUpObj,setSignUpObj]=React.useState({firstNameSign:"",emailSign:"",passwordSign:"",numberSign:""})
    const takeclick =  () => {
        console.log(props)
        props.listentologinnote1(false)
    }
    const takeFullName=(e) => {
        setSignUpObj({...signUpObj,firstNameSign:e.target.value})
    }

    const takeEmailSignUp=(e) => {
        setSignUpObj({...signUpObj,emailSign:e.target.value})
    }

    const takeSignUpPassword=(e) => {
        setSignUpObj({...signUpObj,passwordSign:e.target.value})
    }

    const takeNumber=(e) => {
        setSignUpObj({...signUpObj,numberSign:e.target.value})
    }
    const register=() => {
        console.log(signUpObj)
        if((nameRegex.test(signUpObj.firstNameSign)==true) && (numberRegex.test(signUpObj.numberSign)==true) && (emailSignUpRegex.test(signUpObj.emailSign)==true) && (psSignUpRegex.test(signUpObj.passwordSign)==true)) {
            console.log(true)
            setSignUpError("")
        }     
        else if((nameRegex.test(signUpObj.firstNameSign)==false) &&  (numberRegex.test(signUpObj.numberSign)==true) && (emailSignUpRegex.test(signUpObj.emailSign)==true) && (psSignUpRegex.test(signUpObj.passwordSign)==true)){
            console.log(false)
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Invalid fullname"})
        }
        else if((numberRegex.test(signUpObj.numberSign)==false) && (nameRegex.test(signUpObj.firstNameSign)==true) && (emailSignUpRegex.test(signUpObj.emailSign)==true) && (psSignUpRegex.test(signUpObj.passwordSign)==true)){
            console.log(false)
            setSignUpError({lastBorder:"1px solid red",lastErrorMsg:"Invalid number"})
        }
        else if((emailSignUpRegex.test(signUpObj.emailSign)==false && (nameRegex.test(signUpObj.firstNameSign)==true) && (numberRegex.test(signUpObj.numberSign)==true) && (psSignUpRegex.test(signUpObj.passwordSign)==true))){
            console.log(false)
            setSignUpError({emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Invalid email"})
        }
        else if((psSignUpRegex.test(signUpObj.passwordSign)==false) && (nameRegex.test(signUpObj.firstNameSign)==true) && (numberRegex.test(signUpObj.numberSign)==true) && (emailSignUpRegex.test(signUpObj.emailSign)==true)){
            console.log(false)
            setSignUpError({psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Invalid password"})
        }
        else{
            setSignUpError({firstBorder:"1px solid red",firstErrorMsg:"Enter fullname",lastBorder:"1px solid red",lastErrorMsg:"Enter Number",emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Enter email",psSignUpBorder:"1px solid red",psSignUpErrorMsg:"Enter password"})
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
                 <Input  size="middle" style={{width:280,backgroundColor:'transparent',border:signUpError.emailSignUpBorder}}  onChange={takeEmailSignUp} />
                 <p id="errormsg">{signUpError.emailSignUpErrorMsg}</p>
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
                     <Button type="primary" danger style={{width:280}} onClick={register}>SignUp</Button>   
                 </div>                
             </div>
             </div>   
           
        </div>
    )
}

export default Signup
