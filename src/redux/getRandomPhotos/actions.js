import { RANDOM_PHOTOS_URL } from '../../constants'
import { CLIENT_ID } from '../../config'

const getRandomPhotos = () => async (dispatch) => {
  const params = {
    client_id: CLIENT_ID ,
    count: 10
  }

  dispatch({ type: 'FETCH_RANDOM_PHOTOS_START' })

  try {
    const request = await fetch(`${RANDOM_PHOTOS_URL}?${new URLSearchParams(params)}`)
    const response = await request.json()
    request.ok ? dispatch({ type: 'FETCH_RANDOM_PHOTOS_SUCCESS', payload: response }) 
    : dispatch({ type: 'FETCH_RANDOM_PHOTOS_FAIL' })
    return request.ok
  } catch (error) {
    dispatch({ type: 'FETCH_RANDOM_PHOTOS_FAIL' })
    return false
  } 
}

export default getRandomPhotos