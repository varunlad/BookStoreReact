import React from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import img2 from '../../asserts/profilelogo2.jpeg'
import './Profilepopper.css'
import { Button } from 'antd';

function Profilepopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
    
    return (
        <div>     
        <img src={img2} alt="" class="logo2" onClick={handleClick} />
        <Popper id={id} open={open} anchorEl={anchorEl}>
         <div className="popup">
             <div className="popupA">
                <div className="pop1">
                <b>Welcome</b>
            </div>
            <div className="pop2">
                To access account and manage orders
            </div >
            <Button className="pop3" style={{width:120,borderBlockColor:'maroon',color:'maroon',outlineColor:'maroon'}} >Login/Signup</Button>
            <div className="pop4">
              ---------------------------------------------- 
            </div>
            <div className="pop5">
                My Orders
            </div>
            <div className="pop6">
                Wishlist
            </div>
            </div>
         </div>
        </Popper>
      </div>
    )
}

export default Profilepopper
