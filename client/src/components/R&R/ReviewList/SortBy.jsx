import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {AllReviews} from '../ReviewWidget.jsx';

const SortByTitle = styled.div`
  font-size: 12px;
`
const DropDown = styled.select`
  background-color: lightgrey;
  font-size: 12px;
  border-radius: 2px;
  margin: 0px 5px 2px 5px;
  margin-right: 1em;
`


export default function SortBy () {

  const {sortBy, setSortBy} = useContext(AllReviews);

  return (
    <>
      <SortByTitle>
        <div className="sort-by">Sort by:</div>
      </SortByTitle>
      <DropDown onChange={(e) => {setSortBy(e.target.value)}}>
        <option value="relevant">Relevant</option>
        <option value="newest" >Newest</option>
        <option value="helpful">Helpful</option>
      </DropDown>
    </>
  );

}