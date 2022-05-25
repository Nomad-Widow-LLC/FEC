import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';



// const ContainerStyles = styled.div`
//   height: 20;
//   width: '100%';
//   background-color: "#e0e0de";
//   border-radius: 50;
//   margin: 10;
// `
// const FillerStyles = styled.div`
//   height: '100%';
//   width: {ratio}%;
//   background-color: green;
//   border-radius: 50;
//   text-align: right
// `

const StarTextStyles = styled.div`
  font-size: 0.75em;
  fontWeight: bold;
  width: 50px;
  vertical-align: middle;
  padding-top: 2.5px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`

const BarPercentageItem = styled.div`
  display: flex;
  flex-direction: row;
`

export default function BarPercentage ({ratio, star}) {

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,
  }

  const fillerStyles = {
    height: '100%',
    width: `${ratio}%`,
    backgroundColor: "lightgreen",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
    verticalAlign: 'top'
  }

  return (
    <>
    <BarPercentageItem>
    <StarTextStyles>
      <div>{star} Star</div>
    </StarTextStyles>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${ratio}%`}</span>
        </div>
      </div>
    </BarPercentageItem>
    </>
  );

// return (
//   <ContainerStyles>
//   <div>
//     <FillerStyles>
//     <div>
//       <LabelStyles>{ratio}%</LabelStyles>
//     </div>
//     </FillerStyles>
//   </div>
//   </ContainerStyles>
// );

};