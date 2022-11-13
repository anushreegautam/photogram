import { CLIENT_ID } from '../../config'
import { USER_URL } from '../../constants'

const getUserPhotos = (username, page = 1) => async ( dispatch) => {
  const queryParams = {
    client_id: CLIENT_ID,
    page: page,
    per_page: 12
  }

  dispatch({ type: 'FETCH_USER_PHOTOS_START' })

  try {
    const request = await fetch(`${USER_URL}/${username}/photos?${new URLSearchParams(queryParams)}`)
    const response = await request.json()
    request.ok ? dispatch({ type: 'FETCH_USER_PHOTOS_SUCCESS', payload: { photos: response, username } }) 
    : dispatch({ type: 'FETCH_USER_PHOTOS_FAIL' })

    return request.ok
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PHOTOS_FAIL'})
    return false
  } 
}

export default getUserPhotos