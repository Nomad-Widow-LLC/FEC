import React from "react";

const Homepage = ({productPics}) => {
  console.log(productPics)
  return(
    <div className='homepage'>
      <div className='shop-name'> my shop </div>
      <div class="scroll-container">
        <div class="gridscroll">
        {productPics?.map(picture =>
            <div className='container'>
            <img
              className='gridscroll-img'
              src={picture.photos?.[0].thumbnail_url}
              key={picture.photos?.[0].thumbnail_url}
            />
            </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Homepage;