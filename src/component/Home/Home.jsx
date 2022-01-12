import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'
import BookComponent from '../BookComponent/BookComponent'
function Home() {
    return (
        <div className="MainHeader">
            <Header />
            
            <div  className="BookContent">
            <div className="BookHeader">
                <div className="BookHeader1"><b>Books</b></div>
                <div className="BookHeader2">(128 items)</div>
                </div>
                <div className="Books">
                    <BookComponent />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Home
