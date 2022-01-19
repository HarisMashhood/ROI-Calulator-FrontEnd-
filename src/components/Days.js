import React from 'react'
import './Days.css'
function Days() {
    return (
        <div className='Days'>
            <div className='Buttons'>
            <button className='YButton' type="button">1 Day</button>
            <button className='GButton' type='button'>7 Days</button>
            <button className='GButton' type='button'>30 Days</button>
            <button className='GButton' type='button'>1 Year</button>
            <button className='GButton' type='button'>5 Years</button>
            </div>
           
        </div>
    )
}

export default Days
