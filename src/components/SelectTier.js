import "./SelectTier.css";
import React from "react";

function SelectTier( {pValue}) {
  return <div className="SelectTier">
              <h4 className="h4Select">Select Tier</h4>
              <div className='Days'>
            <div className='Buttons'>
            <button className='YButton' type="button">Tier 1</button>
            <button className='GButton' type='button'>Tier 2</button>
            <button className='GButton' type='button'>Tier 3</button>
            <button className='GButton' type='button'>Tier 4</button>
            <button className='GButton' type='button'>Tier 5</button>
            </div>
        </div>
        <div className="roiCurrentRates">
            <p>{pValue}</p>
        </div>
  </div>;
}

export default SelectTier;
