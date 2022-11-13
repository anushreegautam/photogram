import React, { useRef, useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useFetchUserPhotos from '../hooks/useFetchUserPhotos'

const GridView = ({ photos, lastPhotoRef, setSelectedPhoto, setShowGrid}) => {
  const handleClick = (index) => {
    setSelectedPhoto(index + 1)
    setShowGrid(false)
  }

  console.log('grid photos ', photos)
  return (
  <div className="grid-view">
   {photos?.map((photo, index) => photos.length === index + 1 ? 
   <div ref={lastPhotoRef} key={`photo-gram-grid-div-${photo?.id}`} >
    <img 
      key={`photo-gram-user-grid-${photo?.id}`}
      src={photo?.urls?.thumb}
      onClick={() => handleClick(index)}
    /> 
    </div> :
    <img 
      key={`photo-gram-user-grid-${photo?.id}`}
      src={photo?.urls?.thumb} 
      onClick={() => handleClick(index)}
    />
   )}
  </div>  
)}

export default GridView
