import React from 'react'
import drishyamImage from "../assets/drishyam.png";
import empuranImage from "../assets/empuran.png";
import jailerImage from "../assets/jailer.png";
import lokhaImage from "../assets/lokha.png";
import meeshaImage from "../assets/meesha.png";
import padakalamImage from "../assets/padakalam.png";
import premaluImage from "../assets/premalu.png";
import sarvammayaImage from "../assets/sarvammaya.png";

import './moviecard.css';

function Moviecard({Mtitle}) {
  return (
    <div>
    <h2 className="newtitle">{Mtitle}</h2>
    <div className="weekly-movies">
        <img src={drishyamImage} alt="drishyam" />
        <img src={empuranImage} alt="empuran" />
        <img src={jailerImage} alt="jailer" />
        <img src={lokhaImage} alt="lokha" />
        <img src={meeshaImage} alt="meesha" />
        <img src={padakalamImage} alt="padakalam" />
        <img src={premaluImage} alt="premalu" />
        <img src={sarvammayaImage} alt="sarvammaya" />
    </div>
    
    
    </div>
  
  )
}

export default Moviecard