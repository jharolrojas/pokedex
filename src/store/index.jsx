import { configureStore } from '@reduxjs/toolkit'
import  userNameslice  from './slices/userName.slice'

export default configureStore({
  reducer: {
    userNameslice,

	}
})