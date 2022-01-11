import React from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './Dashboard.css'

function Dashboard() {
    const[switchLoginContainers, setswitchLoginContainers]= React.useState(false)
    const listentologinnote1 = (data) => {
        console.log(data)
        if (data===true){
            setswitchLoginContainers(true)
        }
        else{
            setswitchLoginContainers(false)
        }
    } 

    return (
        <div className="maindashboard">
            {
                switchLoginContainers ? <Signup listentologinnote1={listentologinnote1} /> : <Login  listentologinnote1={listentologinnote1}/>
            }
        </div>
    )
}

export default Dashboard
