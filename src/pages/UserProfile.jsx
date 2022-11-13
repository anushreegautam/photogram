import React, { useEffect, useState, useCallback } from 'react'
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
import useLastElementRef from '../hooks/useLastElementRef'

const UserProfile = () => {
  const { username } = useParams()  
  const dispatch = useDispatch()
  const [showGrid, setShowGrid] = useState(true)  
  const [isLoading, setIsLoading] = useState(false) 
  const [currentPage, setCurrentPage] = useState(1)  
  const { data: userInfo, error: userInfoError} = useSelector(state => state.userInfo)
  const { isLoading: isUserPhotosLoading, data: userPhotos, error: userPhotosError} = useSelector(state => state.userPhotos)  

  const { lastElementRef: girdLastElementRef} = useLastElementRef(isLoading, isUserPhotosLoading, userInfo?.total_photos, currentPage, setCurrentPage)
  const { lastElementRef: listLastElementRef} = useLastElementRef(isLoading, isUserPhotosLoading, userInfo?.total_photos, currentPage, setCurrentPage)

  const fetchPhotos = useCallback(() => {
    dispatch(getUserPhotos( username, currentPage))
  }, [currentPage, username])

  useEffect(() => {
   fetchPhotos()
  }, [fetchPhotos])

  useEffect(() => {
    setIsLoading(true)
    dispatch(getUserInfo(username)).then(() => setIsLoading(false))  
  }, [])

  return (
    <Layout isProfilePage username={username} error={userInfoError || userPhotosError} >
     {!isLoading && (
        <>
          <UserDetails user={userInfo} />
          <div className="photo-view-navbar">
            <div className="nav-items" onClick={() => setShowGrid(true)}><FontAwesomeIcon icon={faGrip} /></div>
            <div className="nav-items" onClick={() => setShowGrid(false)}><FontAwesomeIcon icon={faList} /></div>
          </div>
          { !!userPhotos?.length && !userInfoError ? ( showGrid ?
             <GridView photos={userPhotos} lastPhotoRef={girdLastElementRef} />
             : <ListView photos={userPhotos} lastPhotoRef={listLastElementRef} />
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