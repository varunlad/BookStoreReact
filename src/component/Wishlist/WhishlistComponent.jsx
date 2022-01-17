import React from 'react'
import './Wishlist.css'
import { DeleteOutlined } from '@ant-design/icons';
import { removeFromWishlist } from '../../services/services';

function WhishlistComponent(props) {
    const removeWish=() =>{
        localStorage.setItem("WishId",props.allwishlist.wishListId);
        removeFromWishlist().then((resp) => {
            console.log(resp) 
            props.listentoWishlist (true)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="WishlistSection2">
        <div className="wishlistpart1">
        <img src={props.allwishlist.bookModelRef.image} class="wish" />
        </div>
        <div className="wishlistpart2">
        <div>
      <b>{props.allwishlist.bookModelRef.bookName}</b>
    </div>
    <div className="fainttext">
    {props.allwishlist.bookModelRef.author}
    </div>
    <div className="div2d">
       <b> Rs. {props.allwishlist.bookModelRef.price}</b>
       <p id="div2da">Rs. {props.allwishlist.bookModelRef.discountPrice}</p>
    </div>
    <DeleteOutlined className="Deleteicon" onClick={removeWish} />
        </div>
    </div>
    )
}

export default WhishlistComponent
