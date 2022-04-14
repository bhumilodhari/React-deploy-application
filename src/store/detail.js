import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : 'card',
    initialState : {
        user : null,
    },
    reducers : {
        setUser(state,action){
            state.user = action.payload
        },
        removeUser(state){
            state.user = null
        }
    }
})
export const cardActions = cardSlice.actions;
export default cardSlice;