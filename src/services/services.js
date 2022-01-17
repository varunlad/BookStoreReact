import axios from 'axios'

let config = {
    headers:{
        Authorization:"Bearer" +" "+ localStorage.getItem("token")
    }
}

export const login=async(obj) => {
    let response=await axios.post("https://localhost:44385/api/login",obj)
    return response
}
    export const registers=async(obj) => {
        console.log(obj)
        let response=await axios.post("https://localhost:44385/api/register",obj)
        return response
}

export const forgotpassword=async(tempemail) => {
    console.log(tempemail)
    let response=await axios.post(`https://localhost:44385/api/forgotpassword?email=${tempemail}`,null)
    return response
}
export const getBooks = async() =>{
    let response = await axios.get(`https://localhost:44385/api/getallbooks`)
    return response
}
export const getBookByIdCall = async () => {
    let response = await axios.get(`https://localhost:44385/api/getbook?Bookid=${parseInt(localStorage.getItem("BookId"))}`)
    return response
}
export const Addtocart = async (obj) => {
    let response = await axios.post("https://localhost:44385/api/addcart",obj)
    return response
}
export const AddtoWishlist = async () => {
    let response = await axios.post(`https://localhost:44385/api/addwishlist?UserId=${parseInt(localStorage.getItem("UserId"))}&BookId=${parseInt(localStorage.getItem("BookId"))}`)
    return response
}
export const getWishlist = async () => {
    let response = await axios.get(`https://localhost:44385/api/getwishlist?UserId=${parseInt(localStorage.getItem("UserId"))}`)
    return response
}
export const removeFromWishlist = async () => {
    let response = await axios.delete(`https://localhost:44385/api/Deletewishlist?WishListId=${parseInt(localStorage.getItem("WishId"))}`)
    return response
}
export const getOrderlist = async () => {
    let response = await axios.get(`https://localhost:44385/api/getorder?UserId=${parseInt(localStorage.getItem("UserId"))}`)
    return response
}