import React, { useEffect, useState } from 'react'
import './DisplayCard1.css'
const DisplayCard1 = (props) => {
  const [y,setY]=useState("")
  useEffect(()=>{
    // setY("")
  },[])
  return (
    <div className='DisplayCard1-main-container' style={{animationDelay:props.delay+"s"}}>
      <img src={props.image} alt='no image found' className='DisplayCard1-bgImage'/>
      <div className='dark-gradient'></div>
      <label className='top'>Top {props.top}</label>
      <label className='DisplayCard1-heading'>{props.movie_name}</label>
      <label className='DisplayCard1-description'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </label>
      <div className='DisplayCard1-options'>
        <button className='btn1'>Play now</button>
        <div className='wishlist-icon'>
            <label className='txt'>add to Wishlist</label>
            <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard1
