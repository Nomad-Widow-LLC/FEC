import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviews} from '../ReviewWidget.jsx';

const CharacteristicsCont = styled.div`
  font-size: 0.85em;
  text-align: center;
  margin: 5px;
  font-family: "Courier New";
`
const Bar = styled.input`
  height: 2px;
  width: 150px;
  position: relative;
  background: transparent;
  color: transparent;
  border-radius: 1px;
  padding: 1px;
  margin: 5px;
  right: 15px;
`
const Tick1 = styled.div`
  height: 14px;
  width: 2px;
  position: relative;
  background: black;
  bottom: 13px;
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
  width: 150px;
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
  width: 20px;
`

const TextAlignment2 = styled.div`
  font-size: 0.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  margin: 0px 0px;
  position: relative;
  right: 10px;

`

const BoxOut = styled.div`
  position: relative;
  margin-top: 0px;
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
        <Bar type="range" min="1" max="5" step="0.1" value={metaData.characteristics.Fit?.value} disabled/>
        {/* <input disabled type="range" min="0" max="5" value="3"/> */}
          <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

          <TextAlignment>
            <div>Runs Tight</div>
            <div>Perfect</div>
            <div>Runs Long</div>
          </TextAlignment>
        {/* </Bar> */}
      </CharacteristicsCont>

      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Length</div>
          </TitleStyle>
          <Bar type="range" min="1" max="5" step="0.1" value={metaData.characteristics.Length?.value} disabled/>

            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

            <TextAlignment>
              <div>Runs Short</div>
              <div>Perfect</div>
              <div>Runs Long</div>
            </TextAlignment>

        </BoxOut>
      </CharacteristicsCont>

      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Comfort</div>
          </TitleStyle>
          <Bar type="range" min="1" max="5" step="0.1" value={metaData.characteristics.Comfort?.value} disabled/>

            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>
            <TextAlignment2>
              <div>Uncomforable</div>
              <div>Ok</div>
              <div>Perfect</div>
            </TextAlignment2>

        </BoxOut>
      </CharacteristicsCont>


      <CharacteristicsCont>
        <BoxOut>
          <TitleStyle>
            <div>Quality</div>
          </TitleStyle>
          <Bar type="range" min="1" max="5" step="0.1" value={metaData.characteristics.Quality?.value} disabled/>

            <Tick1><Tick2><Tick3></Tick3></Tick2></Tick1>

            <TextAlignment>
              <div>Poor</div>
              <div>Expected</div>
              <div>Perfect</div>
            </TextAlignment>

        </BoxOut>
      </CharacteristicsCont>



    </>
  );

};