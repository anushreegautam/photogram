const initialState = {
  isLoading: false,
  data: [],
  error: null  
}

const userInfo = (state = initialState, action) => {
  switch(action?.type) {
    case 'FETCH_USER_INFO_START': 
      return {...state, isLoading: true}
    case 'FETCH_USER_INFO_SUCCESS': 
      return {...state, data: action?.payload, isLoading: false}
    case 'FETCH_USER_INFO_FAIL':
      return {...state, error: true, isLoading: false}
    default:
      return state        
  }
}

export default userInfo