import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

const FilterReviewCont = styled.div`
  font-size: 14px;
  width: 150px;
  margin: 25px 0px 5px 10px;
`

export default function FilterReview () {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    if (event.target.value.length > 3) {
      //search term
    }
  }

  return (
    <FilterReviewCont>
      <div>Filter Reviews</div>
      <input
        type="text"
        placeholder="Search Reviews"
        onChange={handleSearch}
      />
    </FilterReviewCont>
  );
};