import React from 'react'

import Card from './Card'

const ListView = ({ photos, lastPhotoRef}) => (
  <div className="list-view">
    {photos?.map((photo, index) => photos.length === index + 1 ? (
      <div ref={lastPhotoRef} key={`photo-gram-list-div-${photo?.id}`} >
      <Card
        key={`photo-gram-list-${photo?.id}`}
        photo={photo}
      />
      </div>
    ) :
    <Card 
      key={`photo-gram-list-${photo?.id}`}
      photo={photo}
     /> )}
    </div>  
)

export default ListView