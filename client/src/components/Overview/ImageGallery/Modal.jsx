import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {FaTimes, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Thumbnails from './Thumbnails.jsx'
import MainThumbnails from './MainThumbnails.jsx'

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  padding: 25px;
  zIndex: 1000;
  background-color: rgb(0,0,0,0.8);
  display: inline-block;
`

const OverlayStyles = styled.div`
  position: relative;
  bottom: 20px;
  zIndex: 1000;
`
const ExpandedImg = styled.img`
  position: absolute;
  left: 20%;
  width: 55%;
  height: 95%;
  cursor: zoom-in;
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
  height: 900px;
  width: 800px;
  overflow:hidden;
`
const InnerExpandedImg = styled.img`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transform-origin: ${props=> `${props.xAxis}px ${props.yAxis}px`};
  transform: scale(2.5);
  cursor: zoom-out;
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 1.0
  }
`

export default function Modal({open, photo, onClose, showLeftArrow, setShowLeftArrow, showRightArrow, setShowRightArrow, image, style, setImage, photos, handleChoosingPic, hideCheckmark}) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  const handleZoomingPic = (event) => {
    const x = (event.clientX-event.target.offsetLeft);
    const y = (event.clientY-event.target.offsetTop);
    setXAxis(x)
    setYAxis(y)
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
            {isExpanded ? <></> :
              <div
              className='left-modal'
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
              size='40px'/>
            </div> }
          {isExpanded ? <></> :
          <div className='arrows-modal'>
            <div
            className='right-modal'
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
                size='40px'/>
              </div>
            </div> }
            {isExpanded ? <></> : <Thumbnails
            photos={style?.photos}
            handleChoosingPic={handleChoosingPic}
            hideCheckmark={hideCheckmark} style={style}/>}
        </ModalStyles>
      </OverlayStyles>
      {isExpanded ? <ModalZoom  ><ExpandContainer  ><InnerExpandedImg src={photo?.url} alt={photo?.id} xAxis={xAxis} yAxis={yAxis} onMouseMove={handleZoomingPic} onMouseUp={handleZoomingOut}></InnerExpandedImg></ExpandContainer></ModalZoom>: <></>}
    </>,
    document. getElementById('portal')
  );
}
