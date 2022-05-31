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
  padding: 25px;
  zIndex: 1000;
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
  width: 600px;
  height: 700px;
  cursor: url("https://i.stack.imgur.com/bUGV0.png"), auto;
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
  cursor: url("https://i.stack.imgur.com/bUGV0.png"), auto;
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
      {isExpanded ? <ModalZoom  ><ExpandContainer  ><InnerExpandedImg src={photo?.url} alt={photo?.id} xAxis={xAxis} yAxis={yAxis}  onMouseMove={handleZoomingPic} onMouseUp={handleZoomingOut}></InnerExpandedImg></ExpandContainer></ModalZoom>: <></>}
    </>,
    document. getElementById('portal')
  );
}
