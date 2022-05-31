import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviews} from '../ReviewWidget.jsx';

import TickData from './TickData.jsx';

const CharacteristicsCont = styled.div`
  font-size: 0.85em;
  text-align: center;
  margin: 5px;
  font-family: "Courier New";
`
const Bar = styled.div`
  height: 2px;
  width: 150px;
  position: relative;
  background: grey;
  border-radius: 1px;
  padding: 1px;
  margin: 5px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`
const Tick1 = styled.div`
  height: 14px;
  width: 2px;
  position: relative;
  background: black;
  bottom: 5px;
  right: 1px;
`
const Tick2 = styled.div`
  height: 14px;
  width: 2px;
  position: relative;
  background: black;
  left: 75px;

`
const Tick3 = styled.div`
  height: 14px;
  width: 2px;
  position: relative;
  background: black;
  left: 75px;

`

const TitleStyle = styled.div`
  font-weight: bold;
  margin-bottom: 10px
`
const TextAlignment = styled.div`
  font-size: 0.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  margin: 5px 0px;
`

const TextAlignment2 = styled.div`
  font-size: 0.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  margin: 5px 0px;
  position: relative;
  right: 10px;
`

const BoxOut = styled.div`
  position: relative;
  margin-top: 20px;
`

const BoxOut2 = styled.div`
  position: relative;
  top: 40px;
`

export default function Characteristics () {

  const {metaData, setMetaData} = useContext(AllReviews);


  return(
    <>
      <CharacteristicsCont>
        <TitleStyle>
          <div>Fit</div>
        </TitleStyle>
        <Bar>
          <TickData location={metaData.characteristics.Fit}/>
          <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

          <TextAlignment>
            <div>Runs Tight</div>
            <div>Perfect</div>
            <div>Runs Long</div>
          </TextAlignment>
        </Bar>
      </CharacteristicsCont>

      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Length</div>
          </TitleStyle>
          <Bar>
            <TickData location={metaData.characteristics.Length}/>
            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

            <TextAlignment>
              <div>Runs Short</div>
              <div>Perfect</div>
              <div>Runs Long</div>
            </TextAlignment>
          </Bar>
        </BoxOut>
      </CharacteristicsCont>

      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Comfort</div>
          </TitleStyle>
          <Bar>
          <TickData location={metaData.characteristics.Comfort}/>
            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>
            <TextAlignment2>
              <div>Uncomforable</div>
              <div>Ok</div>
              <div>Perfect</div>
            </TextAlignment2>
          </Bar>
        </BoxOut>
      </CharacteristicsCont>


      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Quality</div>
          </TitleStyle>
          <Bar>
          <TickData location={metaData.characteristics.Quality}/>
            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

            <TextAlignment>
              <div>Poor</div>
              <div>Expected</div>
              <div>Perfect</div>
            </TextAlignment>
          </Bar>
        </BoxOut>
      </CharacteristicsCont>


        {/* <div>Length</div>
        <div>Comfort</div>
        <div>Quality</div> */}


    </>
  );

};