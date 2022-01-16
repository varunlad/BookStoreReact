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
// export const getWishListByUserId = async () => {
//     let response = await axios.get(`https://localhost:44336/wishList/displayItems?userId=${parseInt(localStorage.getItem("UserId"))}`)
//     return response
// }
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