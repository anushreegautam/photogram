import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import UserDetails from '../components/UserDetails'
import EmptyView from '../components/EmptyView'
import GridView from '../components/GridView'
import getUserInfo from '../redux/getUserInfo/actions'
import getUserPhotos from '../redux/getUserPhotos/actions'
import ListView from '../components/ListView'

const UserProfile = () => {
  const { username } = useParams()  
  const dispatch = useDispatch()
  const [showGrid, setShowGrid] = useState(true)  
  const [isLoading, setIsLoading] = useState(false) 
  const [currentPage, setCurrentPage] = useState(1)  
  const { data: userInfo, error: userInfoError } = useSelector(state => state.userInfo)
  const { isLoading: isUserPhotosLoading, data: userPhotos, error: userPhotosError} = useSelector(state => state.userPhotos)  
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const handleGridView = () => setShowGrid(true)
  const handleListView = () => setShowGrid(false)

  const observer = useRef()
  const lastPhotoRef = useCallback(
    (node) => {
      if (isUserPhotosLoading) return;
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && userInfo?.total_photos > 12*currentPage) {
          setCurrentPage(page => page + 1)
        }
      })
      if (node) observer.current.observe(node)
     },
    [isUserPhotosLoading]
  )

  const fetchPhotos = useCallback(() => {
    dispatch(getUserPhotos( username, currentPage))
  }, [currentPage, username])

  useEffect(() => {
   fetchPhotos()
  }, [fetchPhotos])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getUserInfo(username))
    setIsLoading(false)
  }, [])

  return (
    <Layout isProfilePage username={username} error={userInfoError || userPhotosError} >  
     {!isLoading && (
        <>
          <UserDetails user={userInfo} />
          <div className="photo-view-navbar">
            <div className="nav-items" onClick={handleGridView}><FontAwesomeIcon icon={faGrip} /></div>
            <div className="nav-items" onClick={handleListView}><FontAwesomeIcon icon={faList} /></div>
          </div>
          { !!userPhotos?.length ? ( showGrid ?
             <GridView photos={userPhotos} lastPhotoRef={lastPhotoRef} setSelectedPhoto={setSelectedPhoto} setShowGrid={setShowGrid} />
             : <ListView photos={userPhotos} selectedPhoto={selectedPhoto} lastPhotoRef={lastPhotoRef} />
             )
            : <EmptyView /> }
        </>
     )}
      { (isLoading || isUserPhotosLoading) &&   
          <div className="loader-style" >
            <Spinner animation="border" role="status" /> 
          </div>
       }
    </Layout>
  )  
}

export default UserProfile