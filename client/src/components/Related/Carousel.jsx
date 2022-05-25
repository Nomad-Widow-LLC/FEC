import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import Qs from 'qs';
import getEndPoint from './lib/hooks.js';
// import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Promise from 'bluebird';

let Carousel = (props) => {

  let overviewId = props.id || 40359;
  let [productList, setProductList] = useState([]);
  let [styleList, setStyleList] = useState([]);
  let[test, setTest] = useState([])

  useEffect(() => {
    axios.get(`/products?id=${overviewId}&related=true`)
      .then((results) => {
        let idList = results.data;
        return idList;
      })
      .then((idList) => {
        Promise.all(idList.map((id) => axios.get(`/products?id=${id}&styles=true`)))
          .then((values) => {
            let allValues = values.map((item) => {return item.data});
            setStyleList(allValues)
            return allValues;
          })
        return idList;
      })
      .then((idList) => {
        Promise.all(idList.map((id) => axios.get(`/products?id=${id}`)))
          .then((values) => {
            let allValues = values.map((item) => {return item.data});
            setProductList(allValues);
            return allValues;
          })
      })
      .catch((err) => console.log(`Error in carousel GET: ${err}`))
  }, [])

  return (
    <div className="carousel">
      <FaAngleLeft className="leftBtn" onClick={() => {console.log(productList)}} />
      {productList.map((item, i) =>
        <Card item={item} pic={styleList[i].results[0].photos[0].thumbnail_url} key={item.id} />
      )}
      <FaAngleRight className="rightBtn" onClick={() => console.log(productList)} />
    </div>
  )

}

export default Carousel = Carousel;