const initialState = {
  isLoading: false,
  data: [],
  username: null,
  error: null  
}

const checkData = (state, payload) =>
  state.data?.length > 0 && state.username === payload?.username ?  [...new Set([...state.data , ...payload?.photos])] : [...payload?.photos]

const usersPhotos = (state = initialState, action) => {
  switch(action?.type) {
    case 'FETCH_USER_PHOTOS_START': 
      return {...state, isLoading: true}
    case 'FETCH_USER_PHOTOS_SUCCESS': 
      return {...state, 
        data: checkData(state, action?.payload), 
        username: action?.payload?.username,
        isLoading: false}
    case 'FETCH_USER_PHOTOS_FAIL':
      return {...state, error: true, isLoading: false}
    default:
      return state        
  }
}

export default usersPhotos