const initialState = {
  isLoading: false,
  data: [],
  error: null  
}

const randomPhotosList = (state = initialState, action) => {
  switch(action?.type) {
    case 'FETCH_RANDOM_PHOTOS_START': 
      return {...state, isLoading: true}
    case 'FETCH_RANDOM_PHOTOS_SUCCESS': 
      return {...state, data: [...new Set([...state.data , ...action?.payload])], isLoading: false}
    case 'FETCH_RANDOM_PHOTOS_FAIL':
      return {...state, error: true, isLoading: false}
    default:
      return state        
  }
}

export default randomPhotosList