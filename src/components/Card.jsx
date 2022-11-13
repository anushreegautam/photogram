import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Card = ({ photo, cardid }) => (
    <div className="card" >
      <div className="card-container" >
        <div className="profile-photo">
          <img src={photo?.user?.profile_image?.large } alt={photo.id}/>
        </div>
        <div className="name-location">
          <Link to={`/user/${photo?.user?.username}`}>{photo?.user?.username}</Link>
          {photo?.location?.title && <span className="plain-text">{photo?.location?.title}</span>}
        </div>
      </div>  
      <img src={photo?.urls?.small} className="card-photo" alt={photo.id} />
      <div className="card-container likes">
        <FontAwesomeIcon icon={faHeart} />
        <h3>{photo?.likes} likes</h3>
      </div>
      {photo?.description && (
        <p className="footer">
          <Link to={`/user/${photo?.user?.username}`}>{photo?.user?.username}</Link> 
          {`  ${photo?.description}`}
        </p>
      )}
    </div> 
  )

export default Card