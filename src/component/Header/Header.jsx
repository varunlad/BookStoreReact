import React from 'react'
import './Header.css'
import img from '../../asserts/booklogo.png'
import img3 from '../../asserts/search.svg'
import img2 from '../../asserts/profilelogo2.jpeg'
import img4 from '../../asserts/cart.jpg'
import { Input } from 'antd'
import Profilepopper from '../Profilepoper/Profilepopper'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <div className="HeaderContainer">
            <div className="Header">
                <div className="Booklogo1"> 
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
            {/* <img src={img2} alt="" class="logo2"/>   */}
            <Profilepopper />
            <h5 className="ts"> Profile</h5>
            </div>
            <div className="HeaderCart">
            {/* <img src={img4} alt="" style={{backgroundColor:'transperent',border:null,borderColor:'transparent'}} class="logo3"/>  */}
            <ShoppingCartOutlinedIcon/>
            <h5 className="ts"> Cart</h5>
            </div>
        </div>
    )
}

export default Header
