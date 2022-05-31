import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {FaTimes, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Thumbnails from './Thumbnails.jsx'

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 25px;
  zIndex: 10;
`

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  zIndex: 1000;
`
const ExpandedImg = styled.img`
  width: 500px;
  height: auto;
`

const ModalZoom = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
`
const ExpandContainer = styled.div`
  height: 1000px;
  width: 1000px;
  overflow:hidden;
  // justify-content: center;
  // align-items: center;
`
const InnerExpandedImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  // transform-origin: center;
  transform-origin: ${props=> `${props.xAxis}px ${props.yAxis}px`};
  transform: scale(2.5);
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1.0
  }
`

export default function Modal({open, photo, onClose, showLeftArrow, setShowLeftArrow, showRightArrow, setShowRightArrow, image, style, setImage, photos, handleChoosingPic, hideCheckmark}) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  const handleZoomingPic = (event) => {
    console.log(event);
    console.log('event.clientX', event.clientX);
    console.log('event.clientY',event.clientY);
    console.log('event.target.offsetLeft', event.target.offsetLeft)
    console.log('event.target.offsetTop', event.target.offsetTop)

    const x = (event.clientX - event.target.offsetLeft);
    const y = (event.clientY - event.target.offsetTop);

    console.log('X,Y', x,y);
    console.log('x-y', x-y)

    if (x > 0) setXAxis(x);
    if (y > 0) setYAxis(y);
    // setXAxis(x)
    // setYAxis(y)
  }

  const handleZoomingOut = () => {
    setIsExpanded(false);
  }

  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <OverlayStyles>
        <ModalStyles>
            {isExpanded ? <></> :<ExpandedImg src={photo?.url} alt={photo?.id} onClick={() => setIsExpanded(true)}></ExpandedImg>}
            {isExpanded ? <></> : <Icon>
              <FaTimes onClick={onClose}/>
            </Icon>}
            {isExpanded ? <></> : <div
          className='left'
          onClick={() => {
            if (image-1 === 0) {
              setShowRightArrow('inline');
              setShowLeftArrow('none');
            }
            if (image !== 0) {
              setImage(image-1);
              setShowRightArrow('inline');
            }
          }}
          >
            <FaArrowLeft
            display={showLeftArrow}
            size='50px'/>
          </div> }
          {isExpanded ? <></> : <div
          className='right'
          onClick={() => {
            if ((image+1) === style.photos?.length -1) {
              setShowLeftArrow('inline');
              setShowRightArrow('none')
            }
            if (image !== style.photos?.length - 1) {
              setImage(image+1);
              setShowLeftArrow('inline');
            }}}>
              <FaArrowRight
              display={showRightArrow}
              size='50px'/>
            </div> }
            {isExpanded ? <></> : <Thumbnails
            photos={photos}
            handleChoosingPic={handleChoosingPic}
            hideCheckmark={hideCheckmark}/> }
        </ModalStyles>
      </OverlayStyles>
      {isExpanded ? <ModalZoom ><ExpandContainer ><InnerExpandedImg src={photo?.url} alt={photo?.id} xAxis={xAxis} yAxis={yAxis} onMouseUp={handleZoomingOut} onMouseMove={handleZoomingPic}></InnerExpandedImg></ExpandContainer></ModalZoom>: <></>}
    </>,
    document. getElementById('portal')
  );
}
