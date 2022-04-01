import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./detail";
import userSlice from './user';

const store = configureStore({
    reducer : {card : cardSlice.reducer, user : userSlice}
})

export default store;