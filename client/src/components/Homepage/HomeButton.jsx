import React from "react";

const HomeButton = ({handleRenderHomePage}) => {
  return (
    <button onClick={()=>{handleRenderHomePage()}}> Homepage </button>
  )
}

export default HomeButton;