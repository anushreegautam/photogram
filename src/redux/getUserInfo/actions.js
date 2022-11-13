import { USER_URL } from '../../constants'
import { CLIENT_ID } from '../../config'

const getUserInfo = (username) => async (dispatch) => {
  const params = {
    client_id: CLIENT_ID 
  }

  dispatch({ type: 'FETCH_USER_INFO_START' })
  
  try {
    const request = await fetch(`${USER_URL}/${username}?${new URLSearchParams(params)}`)
    const response = await request.json()
    request.ok ? dispatch({ type: 'FETCH_USER_INFO_SUCCESS', payload: response }) 
    : dispatch({ type: 'FETCH_USER_INFO_FAIL' })
    return request.ok
  } catch (error) {
    dispatch({ type: 'FETCH_USER_INFO_FAIL' })
    return false
  } 
}

export default getUserInfo