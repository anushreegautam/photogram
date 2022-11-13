import React, { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import Layout from '../components/Layout'
import EmptyView from '../components/EmptyView'
import getRandomPhotos from '../redux/getRandomPhotos/actions'
import ListView from '../components/ListView'

const NewsFeed = () => {
  const dispatch =  useDispatch()  
  const { data: photos, isLoading, error} =  useSelector(state => state.randomPhotosList)

  const observer = useRef()
  const lastPhotoElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getRandomPhotos())
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading]
  )

  useEffect(() => {
    dispatch(getRandomPhotos())
  }, [])
    
  return (
    <Layout error={error} >  
      { !isLoading ? (
        !!photos?.length ?
        <ListView photos={photos} lastPhotoRef={lastPhotoElementRef} />
         : <EmptyView /> )
         : 
          <div className="loader-style" >
            <Spinner animation="border" role="status" /> 
          </div>
       }
    </Layout>
  )  
}

export default NewsFeed