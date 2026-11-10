import React from 'react'
import baththa from "../assets/baththa.png";
import triangle from "../assets/triangle.png";
 import pluscircleImage from  "../assets/pluscircle.svg";
import thumbsupImage from "../assets/thumbsup.svg";

import "./movies.css";


function Movies() {
  return (
     
    <div className="cover">
      <div className="right-side">
        <img src={baththa} alt="baththa" />
      </div>
      <div className='main'>
      <div className='button'>
            <button className='play-button'><img src={triangle} alt="" />Play</button> 
        <div className="icons">
              <img src={pluscircleImage} alt="" />
              <img src={thumbsupImage} alt="" />
             </div> 
            </div>
          </div>
          <div className="condent">
            <div className="sidepara">
                  <p>In 1986 Madras,a timid boy accidentally traps a feared gangster
                     in a school restroom,Where an unlikely friendship brings out new 
                     sides of them both.
                  </p> 
            </div>
            
          <div className='side2'>
            <div className="cast">
              <h1>cast:</h1>
              <p>Vijay Sethupathi, Lijomol jose,
                 Sai Prithviraj,more
              </p>
            </div>
            <div className="genres">
              <h1>genres:</h1>
              <p>Drama Movies,comedy Movies,Tamil-language Movies</p>
            </div>
            <div className="about">
              <h1>This Movie is:</h1>
              <p>Heart Felt</p>
            </div>
          </div>

          </div>

           
               </div>
  )
}

export default Movies