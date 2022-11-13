import { configureStore } from '@reduxjs/toolkit'

import randomPhotosList from './redux/getRandomPhotos/reducer'
import userInfo from './redux/getUserInfo/reducer'
import userPhotos from './redux/getUserPhotos/reducer'

const store = configureStore({
  reducer: {
    randomPhotosList,
    userInfo,
    userPhotos
  }
})

export default store