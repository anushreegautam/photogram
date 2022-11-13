import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const EmptyView = () => (
  <div className="empty-view">
    <FontAwesomeIcon icon={faCameraRetro} className="fa-5x" />
    <span>No photos</span>
  </div>  
)

export default EmptyView