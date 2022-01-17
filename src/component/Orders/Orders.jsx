import React from 'react'
import './Orders.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img from '../../asserts/learnux.png'
import img1 from '../../asserts/material.png'
import { useHistory } from "react-router-dom";
import OrdersComponent from './OrdersComponent'
import { getOrderlist } from '../../services/services'

function Orders() {
    let history=useHistory();
    const [presentOrders,setPresentOrders] = React.useState([]);
    React.useEffect(()=>{
        getOrderlist().then((response)=>{           
            console.log(response)
            setPresentOrders(response.data.data)                        
            }).catch(err => {console.log(err)})
        },[]);
    const Orderlist=presentOrders.map((x)=>(<OrdersComponent key={x.wishListId}  allOrder={x} />))
    return (
        <div className="MainHeader">
        <Header />      
        <div  className="BookContent">
        <div className="BookHeaderOrders">
            <div className="WishList1" onClick={()=>(history.push('/Home'))}>Home/</div>
            <div className="Wishlist2"><b id="Wishlist2">MyOrders</b></div>
            </div>
            <div className="Wishlist">
            {Orderlist}
           </div>          
        </div>
        <Footer />
    </div>
    )
}

export default Orders
