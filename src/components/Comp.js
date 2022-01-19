import React from "react"
import './Comp.css'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
function Comp() {
  return (
    <div className="comp1" >
      <label className="check">
        <input type="radio" value="CAKE" checked={true} />
        CAKE
      </label>
      <label className="toggle">
        <ToggleOnIcon className="ToggleOnIcon"/> USD
      </label>
    </div>
  );
}

export default Comp
