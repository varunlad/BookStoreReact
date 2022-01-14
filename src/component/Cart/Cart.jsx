import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img2 from '../../asserts/map.jpeg'
import img1 from '../../asserts/material.png'
import './Cart.css'
import { useHistory } from "react-router-dom";
import { CaretDownOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import Address from '../Address/Address'
function Cart() {
    let history = useHistory();
    const[switchContainers, setSwitchContainers]= React.useState(true)
    const listenAddress = () => {
        setSwitchContainers(false)
    } 

    const listenAddressDetails = (data) => {
        if (data === true){
            setSwitchContainers(true)
        }
    }
    return (
        <div className="MainHeadercart">
        <Header />      
        <div className="orders">
        <div className="BookCartHeader">
            <div className="WishList1" onClick={()=>(history.push('/Home'))}>Home/</div>
            <div className="Wishlist2"><b id="Wishlist2">MyOrders</b></div>
            </div>
                <div className="placeOrder">
                    <div className="heading1">
                        <h3 style={{marginLeft:29}}>My Cart(01)</h3>
                        <div className="location">
                            <img className="map" src={img2}/>
                            <div className="current">Use current location</div>
                            <CaretDownOutlined style={{color:'grey'}}/>
                        </div>
                    </div>
                    
                    <div className="wishlistContainer1">
                        <img className="BookImage" src={img1}/>
                        
                        <div className="orderDescription1">
                            <div className="bookName1">Don't Make Me Think</div>   
                            <div className="authorname1">by Steve Krug</div>                                   
                            <div className="price1">
                                <div className="discount1">Rs. 1500</div>
                                <div className="original1">Rs. 2000</div>
                            </div>
                            <div className="quantity">
                                <MinusCircleOutlined style={{color:'grey'}}/>
                                <div className="one">  1</div>
                                <PlusCircleOutlined style={{color:'grey'}}/>
                                <div style={{fontSize:10, marginLeft:14}}>Remove</div>
                            </div> 
                        </div>
                                                             
                    </div>
                    
                </div>
                <div className="addressDetails">
                    {
                        switchContainers ? <h4 id="summery" onClick={listenAddress}>Address Details</h4> :<Address listenAddressDetails={listenAddressDetails} />
                    }
                </div>
                <div className="addressDetails"><h4 id="summery">Order summery</h4></div>
            </div>
            <div className="cartFooter">
            <Footer />
            </div>
        </div>
    )
}

export default Cart
