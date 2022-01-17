import React from 'react'
import './Orders.css'

function OrdersComponent(props) {
    return (
        <div className="WishlistSection2">
        <div className="wishlistpart1">
        <img src={props.allOrder.bookReference.image} class="wish" />
        </div>
        <div className="wishlistpart2">
        <div>
      <b>{props.allOrder.bookReference.bookName}</b>
    </div>
    <div className="fainttext">
    {props.allOrder.bookReference.author}
    </div>
    <div className="div2d">
       <b> Rs. {props.allOrder.bookReference.price}</b>
       <p id="div2da">Rs. {props.allOrder.bookReference.discountPrice}</p>
    </div>
        </div>
        <div className="OrderDate">
            <b>Order Placed on {props.allOrder.date}</b>
        </div>
    </div>
    )
}

export default OrdersComponent
