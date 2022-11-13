import React, {useRef} from 'react'
import { useEffect } from 'react'
import Card from './Card'

const ListView = ({ photos, lastRef, selectedPhoto = null }) => {
  const selectedPhotoRef = useRef()
  const focusSelectedPhoto = () => {
    if (selectedPhoto) return;
    if (selectedPhotoRef.current) {
      console.log('selectedPhoto ', selectedPhoto)
      console.log('selectedPhotoRef ', selectedPhotoRef)
      selectedPhotoRef.current.focus()
      //selectedPhotoRef.current.disconnect()
    }
    }

  useEffect(() =>{
    focusSelectedPhoto()
  }, [selectedPhoto])  


  return (
  <div className="list-view">
    {photos?.map((photo, index) => photos.length === index + 1 ? (
      <div ref={lastRef} key={`photo-gram-list-div-${photo?.id}`} >
      <Card
        key={`photo-gram-list-${photo?.id}`}
        photo={photo}
        selectedPhotoRef={selectedPhoto-1 === index ? selectedPhotoRef : null}
      />
      </div>
    ) :
    <Card 
      key={`photo-gram-list-${photo?.id}`}
      photo={photo}
      selectedPhotoRef={selectedPhoto-1 === index ? selectedPhotoRef : null}
     /> )}
    </div>  
)}

export default ListView