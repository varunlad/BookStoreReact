import React from 'react'
import './Header.css'
import img from '../../asserts/booklogo.png'
import img3 from '../../asserts/search.svg'
import img2 from '../../asserts/pfofile.jpg'
import img4 from '../../asserts/cart.jpg'
import { Input } from 'antd'

function Header() {
    return (
        <div className="HeaderContainer">
            <div className="Header">
                <div className="Booklogo"> 
                <img src={img} alt="" class="logo"/>
                BookStore
                </div>               
            </div>
            <div className="HeaderSearch">
                <div className="searchbox">
                <img  id="aa1" src={img3} alt="searchlogo" style={{backgroundColor:'white',border:null,borderColor:'transparent'}}/>
                <input  size="middle" placeholder="Search..." style={{height:26.5,width:420,backgroundColor:'white',border:null,borderColor:'transparent',margin:null,outline:null,color:'gray',font: 'normal normal normal  Roboto'}}  />
                </div>              
            </div>
            <div className="HeaderProfil">
            <img src={img2} alt="" class="logo2"/>  
             Profile
            </div>
            <div className="HeaderCart">
            <img src={img4} alt="" class="logo3"/> 
            Cart
            </div>
        </div>
    )
}

export default Header
