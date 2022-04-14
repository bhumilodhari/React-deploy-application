import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../config/config.env";
export const getUser = createAsyncThunk("user/getUser", async ({ page, perPage }) => {
    return fetch(`${config.API_URL}/users?page=${page}&per_page=${perPage}`).then(res => res.json())

});

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        status: null,
        currentPage: 1,
        totalPage: null,
        perPage: 2
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.status = "loading";
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.users = payload.data;
            state.currentPage = payload.page
            state.totalPage = payload.total_pages
            state.perPage = payload.per_page
            state.status = "success";
        },
        [getUser.rejected]: (state) => {
            state.status = "failed";
        },
    },
});

export default userSlice.reducer;