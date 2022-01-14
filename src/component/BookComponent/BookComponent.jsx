import React from 'react'
import './BookComponent.css'
import img1 from '../../asserts/material.png'
import img3 from '../../asserts/greenstart.jpeg'
import img2 from '../../asserts/star.png'

function BookComponent(props) {
    return (
        <div className="BooakCompMain">
            <div className="Bookdiv1">
            <img src={props.allBooks.image} alt="" class="bookimg"/> 
            </div>
            <div className="Bookdiv2">
                <div>
                  <b> {props.allBooks.bookName}</b>
                </div>
                <div className="fainttext">
                {props.allBooks.author}
                </div>
                <div className="div2c">
                    <div className="aa">
                    <div className="divc2ca"> {props.allBooks.rating} </div>
                    <img src={img3} alt="" className="satrclass" />
                    </div>
                    <div className="fainttext">( {props.allBooks.review})</div>
                </div>
                <div className="div2d">
                   <b> Rs.  {props.allBooks.price}</b>
                   <p id="div2da">Rs.  {props.allBooks.discountPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default BookComponent
