import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './logindata.js'

export default configureStore({
  reducer: {
    logindata: loginReducer,
  },
})