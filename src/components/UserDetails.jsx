import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const UserDetails = ({ user }) => (
  <>
    <div className="user-info"> 
      <div className="profile-photo info"> 
        { user?.profile_image?.large ? <img src={user?.profile_image?.large } alt={user.id}/> : <FontAwesomeIcon icon={faCircleUser} className="user-icon fa-6x" />}
      </div> 
      <div className="follow-container">
        <span className="data-counts">{user?.total_photos || 0}</span>
        <span className="plain-text">Photos</span>
      </div>
      <div className="follow-container">
        <span className="data-counts">{user?.followers_count || 0}</span>
        <span className="plain-text">Followers</span>
      </div>
      <div className="follow-container">
        <span className="data-counts">{user?.following_count || 0}</span>
        <span className="plain-text">Following</span>
      </div>
     </div>
     <div className="user-details">
      <h3>{user?.name}</h3>
      <span className="plain-text">{user?.bio}</span>
     </div>
     <div className="user-profile-links">
     {user?.location && <span className="plain-text" ><FontAwesomeIcon icon={faMapPin} className="fa-sm" /> {`${user?.location}`}</span>}
     {user?.social?.instagram_username && <a href={`https://www.instagram.com/${user?.social?.instagram_username}/`} className="plain-text"><FontAwesomeIcon icon={faInstagram} className="fa-sm" />  {`${user?.social?.instagram_username}`}</a>}
     {user?.social?.twitter_username && <a href={`https://twitter.com/${user?.social?.twitter_username}`} className="plain-text"><FontAwesomeIcon icon={faTwitter} className="fa-sm" />  {`${user?.social?.twitter_username}`}</a>}
     </div>
  </>  
)

export default UserDetails