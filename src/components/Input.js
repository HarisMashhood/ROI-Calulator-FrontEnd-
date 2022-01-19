import React from 'react'
import './Input.css'
function Input() {
    return (
        <div className='Input'>
            <div className='IPButton'>
            <button className='GButton' type="button">$1000</button>
            <button className='GButton' type="button">$100</button>
            </div> 
            <div className='IText'>
                <p>~CAKE 0.000</p>
            </div>
            
        </div>
    )
}

export default Input
