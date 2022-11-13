import { useRef, useCallback } from 'react'
import { PER_PAGE } from '../constants'

const useLastElementRef = (isLoading, isUserPhotosLoading, totalPhotos, currentPage, setCurrentPage) => {
  const observer = useRef()
  const lastElementRef = useCallback(
    (node) => {
      if (isUserPhotosLoading || isLoading) return;
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && totalPhotos > PER_PAGE*currentPage) {
          setCurrentPage(page => page + 1)
        }
      })
      if (node) observer.current.observe(node) 
    },
    [isUserPhotosLoading, isLoading]
  )

  return { lastElementRef }
}

export default useLastElementRef