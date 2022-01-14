import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'
import BookComponent from '../BookComponent/BookComponent'
import { getBooks } from '../../services/services'
function Home() {
    const[bookArray, setBookArray] = React.useState([])

    const GetBooks =() => {
        getBooks().then((resp) => {
        console.log(resp.data.data)  
        setBookArray(resp.data.data)    
    }).catch((err) => {
        console.log(err)
    })
    
}
React.useEffect(() =>{
    GetBooks()
   },[])
const bookList=bookArray.map((x)=>(<BookComponent key={x.bookId} allBooks={x} />))
    return (
        <div className="MainHeader">
            <Header />
            
            <div  className="BookContent">
            <div className="BookHeader">
                <div className="BookHeader1"><b>Books</b></div>
                <div className="BookHeader2">(128 items)</div>
                </div>
                <div className="Books">
                    {bookList}
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Home
