import React from 'react'
import './Wishlist.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useHistory } from "react-router-dom";
import WhishlistComponent from './WhishlistComponent'
import { getWishlist } from '../../services/services'

function Wishlist() {
    let history=useHistory();
    
    const [updateWishlist,setupdateWishlist] = React.useState(false);
    const [presentWishlist,setPresentWishlist] = React.useState([]);
    React.useEffect(()=>{
        getWishlist().then((response)=>{           
            console.log(response)
            setPresentWishlist(response.data.data)                        
            }).catch(err => {console.log(err)})
        },[updateWishlist]);

    const listentoWishlist=(data)=>{
        if(data == true){
            setupdateWishlist(true);
        }
    }
    const wishlist=presentWishlist.map((x)=>(<WhishlistComponent key={x.wishListId} listentoWishlist={listentoWishlist} allwishlist={x} />))
    return (                                                            
        <div className="MainHeader">
            
        <Header />      
        <div  className="BookContent">
        <div className="BookHeader">
            <div className="WishList1" onClick={()=>(history.push('/Home'))}>Home/</div>
            <div className="Wishlist2"><b id="Wishlist2">MyWishlist</b></div>
            </div>
            <div className="Wishlist">
        <div className="WishlistSection1">
        <b id="wishlisttext">My Wishlist</b>
        </div>
        <div>
            {wishlist}
        </div>
    </div>       
        </div>
        <Footer />
    </div>
    )
}

export default Wishlist
