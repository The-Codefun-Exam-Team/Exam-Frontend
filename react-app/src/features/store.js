import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './logindata.js'
import codeReducer from './codedata.js'

export default configureStore({
  reducer: {
    logindata: loginReducer,
    codedata: codeReducer,
  },
})