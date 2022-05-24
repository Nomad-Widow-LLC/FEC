import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const PhotoFlex = styled.div`
  margin: 2px;
`

const Thumbnail = styled.img`
  width: 75px;
  height: auto;
`

export default function ReviewPhotos ({photo}) {

  const [isOpen, setIsOpen] = useState(false);


  return(
    <PhotoFlex>
      <div className="photo-entry">
        <Thumbnail src={photo.url} alt={photo.id} onClick={() => setIsOpen(true)}></Thumbnail>
        <Modal open={isOpen} photo={photo} onClose={() => setIsOpen(false)} />
      </div>
    </PhotoFlex>
  );
};