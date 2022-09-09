import { createSlice } from '@reduxjs/toolkit'

export const codeSlice = createSlice({
    name: 'code',
    initialState: {
        usercode: {payload:""},
        realcode: {payload:""}
    },
    reducers: {
        update_usercode: (state,n_usercode) => {
            state.usercode = n_usercode
            
        },
        update_realcode: (state,n_realcode) => {
            state.realcode = n_realcode
        },
    },

})

export const {update_usercode,update_realcode} = codeSlice.actions

export default codeSlice.reducer ;