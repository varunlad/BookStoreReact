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