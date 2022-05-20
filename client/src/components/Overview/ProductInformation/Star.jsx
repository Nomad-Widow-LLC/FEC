import React, {useState, useMemo} from 'react'
import { FaStar } from 'react-icons/fa';

const Star = ({index, rating}) => {

  const fill = useMemo(() => {
    if (rating >= index) {
      return 'yellow';
    } else {
      return 'black';
    }
  }, [index, rating]);

  return (
      <FaStar fill={fill}/>

  )

}

export default Star;