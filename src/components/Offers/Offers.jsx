import React from 'react'
import "./Offers.css"
import exclusiveImage from "../Assets/exclusive_image.png"

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON SOLLYDZ PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img height="100%" style={{marginBottom:"30px"}} src={exclusiveImage} alt='exclusive'/>
        </div>
    </div>
  )
}
