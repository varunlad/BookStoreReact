import React from 'react'
import './BookDescription.css'
import Header from '../Header/Header'
import BookImage from '../../asserts/dont1.png'
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Addtocart, AddtoFeedback, AddtoWishlist, getBookByIdCall, getFeedback } from '../../services/services'
import Feedback from '../FeedBack/Feedback';

function BookDescription() {
    let history=useHistory();
    const [value, setValue] = React.useState(2);
    const [updateFeedback,setupdateFeedback] = React.useState(false);
    const[feedbackArray, setFeedbackArray] = React.useState([])
    const [booklist,setBookList] = React.useState([]);
    const[feedbackObj,setFeedbackObj]=React.useState({BookId:parseInt(localStorage.getItem("BookId")),UserId:parseInt(localStorage.getItem("UserId")),comments:null,ratings:3})
    const AddCart =() =>{
        let obj = {
            userId: parseInt(localStorage.getItem("UserId")),
            bookId: booklist.bookId
            }
            Addtocart(obj).then((response)=>{
                console.log(response);
                alert("Book added to Cart");
            }).catch(err => {
                console.log(err);
            })
    }
    const takeComments=(e) => {
        setFeedbackObj({...feedbackObj,comments:e.target.value})
    }
    const AddWishList =() =>{
        AddtoWishlist().then((response)=>{
                console.log(response);
                alert("Book added to WishList");
            }).catch(err => {
                console.log(err);
            })
    }
    React.useEffect(()=>{
        getBookByIdCall().then((response)=>{
            setBookList(response.data.data)
            GetFeedback()
        }).catch(err => {console.log(err)})
    },[]);
    const GetFeedback =() => {
        getFeedback().then((resp) => {
        console.log(resp.data.data)  
        setFeedbackArray(resp.data.data)  
    }).catch((err) => {
        console.log(err)
    })
}
   const AddFeedback=()=>{
    AddtoFeedback(feedbackObj).then((resp) => {
        console.log(resp) 
        GetFeedback()
    }).catch((err) => {
        console.log(err)
    })
}
    const feedbackList=feedbackArray.map((x)=>(<Feedback key={x.bookId}  allFeedback={x} />))
    return (
        <div className="MainHeader">
        <Header />      
          <p className="paths">
             <button className = "gotohome" onClick={()=>(history.push('/Home'))} > Home/ </button><span id="pathtobook">{booklist.bookName}</span>
             </p>

        <div className="imagebox">
        <img src={booklist.image} alt="Image" className = "booklogo" />
         </div>
        <div className="tagbuttons">
           
        <button id="addtobag" onClick={AddCart}>ADD TO BAG</button> 
       
       <button id="wishlist" onClick={AddWishList} >??? WISHLIST</button> 
       
        </div>
        <div className = "description">
             <div className="detailsofbook">
          <p id="booktitle">{booklist.bookName}</p>
            <p id ="authorbook">{booklist.author}</p>
          <div className="ratingbox">
                <span>{booklist.rating}???</span>
            </div>
             <span className="countreviewbook">({booklist.quantity})</span>
             <span className="bookprice">Rs. {booklist.discountPrice}</span> 
             <span className="originalprice"><s>Rs. {booklist.price}</s></span>
             <hr className="borderline"></hr>

         <div className="descriptionofbookdetails">
        <ul id="caption"><li>Book Detail</li></ul>
         <p id="Bookparagraph">{booklist.detail}</p>
         <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
        <div className="feedback-title">
            <p className="para-for-custfeedback">Customer Feedback</p>
        </div>
        <div className="rating-pad">
        <div className="overallrating">
        <p className="para-for-overallrating"> Overall rating</p>
           <div id="stars"><Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setFeedbackObj({...feedbackObj,ratings:newValue});
                    setValue(newValue);
            }} /></div>
        <div className="writereview">
           <input className="input-for-review" type="text" placeholder="Write your review" onChange={takeComments}/>
        <div className="submitbutton" onClick={AddFeedback}>Submit</div>
        </div>
        </div>
       </div>
        </div>
        {feedbackList}
        </div>
        </div>
        </div>
    )
}

export default BookDescription
