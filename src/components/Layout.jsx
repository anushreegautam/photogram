import React, { useEffect, useState } from 'react'
import { Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, isProfilePage, username, error }) => {
  const [showToast, setShowToast] = useState(error)  

  useEffect(() => {
    setShowToast(error)
  }, [error])

  return (
  <div >
    { !isProfilePage ? 
    <div className="app-header">Photogram</div>
    : <div className="app-header username">
        <Link to='/'><FontAwesomeIcon icon={faAngleLeft} /></Link>
        {username}
      </div>
    }
    <div className="main-container">
      {children}  
    </div>
    <Toast className="toast-msg" onClose={() => setShowToast(false)} show={showToast} autohide delay={5000}>
      <Toast.Body>Something went wrong.</Toast.Body>  
    </Toast>
  </div>
 )
}

export default Layout