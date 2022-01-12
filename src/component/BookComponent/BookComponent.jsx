import React from 'react'
import './BookComponent.css'
import img1 from '../../asserts/material.png'
import img2 from '../../asserts/star.png'

function BookComponent() {
    return (
        <div className="BooakCompMain">
            <div className="Bookdiv1">
            <img src={img1} alt="" class="bookimg"/> 
            </div>
            <div className="Bookdiv2">
                <div>
                  <b>  React Material UI</b>
                </div>
                <div className="fainttext">
                    by varunlad
                </div>
                <div className="div2c">
                    <div className="divc2ca">4.5 * </div>
                    <div className="fainttext">(20)</div>
                </div>
                <div className="div2d">
                   <b> Rs. 1500</b>
                </div>
            </div>
        </div>
    )
}

export default BookComponent
