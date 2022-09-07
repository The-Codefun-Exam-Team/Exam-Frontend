import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: {payload:""},
        password: {payload:""}
    },
    reducers: {
        update_username: (state,n_username) => {
            state.username = n_username
        },
        update_password: (state,n_password) => {
            state.password = n_password
        },
    },

})

export const {update_username,update_password} = loginSlice.actions

export default loginSlice.reducer ;