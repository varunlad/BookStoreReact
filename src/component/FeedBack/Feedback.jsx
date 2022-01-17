import React from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Feedback.css'

function Feedback(props) {
   
    return (
        <div className='reviewContainer'>  
        <Typography component="legend">{props.allFeedback.userReference.fullName}</Typography>
        <Rating name="disabled" value={props.allFeedback.ratings}  disabled />
        <p style={{color:'#707070'}}>{props.allFeedback.comments}</p>
    </div>
    )
}

export default Feedback
