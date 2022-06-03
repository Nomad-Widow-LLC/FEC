import React from "react";

const HomeButton = ({handleRenderHomePage}) => {
  return (
    <button className='shop-button' onClick={()=>{handleRenderHomePage()}}> home </button>
  )
}

export default HomeButton;