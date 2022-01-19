import React from 'react'
import './Head.css'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
function Head() {
    return (
        <div className='header1'>
            <h2>ROI Calculator</h2>
            <CloseIcon className='CloseIcon'/>
        </div>
    )
}

export default Head
