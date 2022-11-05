import React from 'react'
import Zuri from "../assets/Zuri.png"
import I4G from "../assets/I4G.png";

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Zuri} alt="Zuri Logo" id='zuri'/>
        <h6>HNG Internship 9 Frontend Task</h6>
        <img src={I4G} alt="I4G Logo" id='I4G'/>
      </div>
  )
}

export default Footer