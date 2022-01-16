import React from 'react'
import './BookDescription.css'
import Header from '../Header/Header'
import BookImage from '../../asserts/dont1.png'
import { getBookByIdCall } from '../../services/services'
function BookDescription() {
    
    const [booklist,setBookList] = React.useState({});

    React.useEffect(()=>{
        getBookByIdCall().then((response)=>{
            setBookList(response.data.data[0])
        }).catch(err => {console.log(err)})
    },[]);
    return (
        <div className="MainHeader">
        <Header />      
          {/* <Header/> */}
          <p className="paths">
             <button className = "gotohome"> Home/ </button><span id="pathtobook">Book</span>
             </p>

        <div className="imagebox">
        <img src={booklist.image} alt="Image" className = "booklogo" />
         </div>
        <div className="tagbuttons">
           
        <button id="addtobag">ADD TO BAG</button> 
       
       <button id="wishlist">❤ WISHLIST</button> 
       
        </div>
        <div className = "description">
             <div className="detailsofbook">
          <p id="booktitle">{booklist.bookName}</p>
            <p id ="authorbook">{booklist.author}</p>
          <div className="ratingbox">
                <span>4★</span>
            </div>
             <span className="countreviewbook">(20)</span>
             <span className="bookprice">Rs. 1500</span> 
             <span className="originalprice"><s>Rs. 2000</s></span>
             <hr className="borderline"></hr>

         <div className="descriptionofbookdetails">
        <ul id="caption"><li>Book Detail</li></ul>
         <p id="Bookparagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero molestias blanditiis fuga ipsa voluptatem, atque consectetur repellat repellendus? Eaque libero quaerat tenetur obcaecati aliquam sint, sit illo veritatis quisquam.</p>
         <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
        <div className="feedback-title">
            <p className="para-for-custfeedback">Customer Feedback</p>
        </div>
        <div className="rating-pad">
        <div className="overallrating">
        <p className="para-for-overallrating"> Overall rating</p>
           <div id="stars">☆ ☆ ☆ ☆ ☆ </div>
        <div className="writereview">
           <input className="input-for-review" type="text" placeholder="Write your review" /> 
        <div className="submitbutton">Submit</div>
        </div>
        </div>
</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default BookDescription
