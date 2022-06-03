import React, {useState, useEffect} from 'react';

const Homepage = ({productPics, getProduct}) => {
  if (productPics.length === 0) {
    return null;
  }

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time+' NYC';

  return(
    <div className='homepage font'>
      <div className='shop-name'>Nomad Widow </div>
      <div className='time'>{dateTime}</div>
      <div className="scroll-container">
        <div className="gridscroll">
        {productPics?.map(picture =>
            <div className='container' onClick={() => {getProduct(picture)}}>
              <img className='gridscroll-img'
              src={picture?.thumbnail_url}
              key={picture?.product_id}>
              </img>
            </div>
        )}
        </div>
      </div>
      <div className='detail'> Michael   Robert   Donna </div>
    </div>
  )
}

export default Homepage;