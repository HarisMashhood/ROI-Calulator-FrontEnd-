import React from 'react'
import './Textbox.css'
function Textbox({value}) {
    return (
        <div className='Textbox'>
            <input className='text' type='text' value={value}/>
        </div>
    )
}

export default Textbox
