import React from 'react'

const GridView = ({ photos, lastPhotoRef}) => (
  <div className="grid-view">
   {photos?.map((photo, index) => photos.length === index + 1 ? 
   <div ref={lastPhotoRef} key={`photo-gram-grid-div-${photo?.id}`} >
    <img 
      key={`photo-gram-user-grid-${photo?.id}`}
      src={photo?.urls?.thumb}
    /> 
    </div> :
    <img 
      key={`photo-gram-user-grid-${photo?.id}`}
      src={photo?.urls?.thumb}
    />
   )}
  </div>  
)

export default GridView
