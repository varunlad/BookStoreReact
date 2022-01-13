import React from 'react'
import './Wishlist.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img from '../../asserts/learnux.png'
import img1 from '../../asserts/material.png'

function Wishlist() {
    return (
        <div className="MainHeader">
        <Header />      
        <div  className="BookContent">
        <div className="BookHeader">
            <div className="WishList1">Home/</div>
            <div className="Wishlist2"><b id="Wishlist2">MyWishlist</b></div>
            </div>
            <div className="Wishlist">
                <div className="WishlistSection1">
                <b id="wishlisttext">My Wishlist</b>
                </div>
                <div className="WishlistSection2">
                    <div className="wishlistpart1">
                    <img src={img} class="wish" />
                    </div>
                    <div className="wishlistpart2">
                    <div>
                  <b> Learn UX</b>
                </div>
                <div className="fainttext">
                    by varunlad
                </div>
                <div className="div2d">
                   <b> Rs. 1500</b>
                   <p id="div2da">Rs. 2000</p>
                </div>
                    </div>
                </div>
                <div className="WishlistSection2">
                    <div className="wishlistpart1">
                    <img src={img1} class="wish" />
                    </div>
                    <div className="wishlistpart2">
                    <div>
                  <b> Materil UI</b>
                </div>
                <div className="fainttext">
                    by varunlad
                </div>
                <div className="div2d">
                   <b> Rs. 1500</b>
                   <p id="div2da">Rs. 2000</p>
                </div>
                    </div>
                </div>
            </div>
                      
        </div>
        <Footer />
    </div>
    )
}

export default Wishlist
