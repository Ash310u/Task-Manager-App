import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userData',
    initialState:{
        user:null
    },
    reducers: {
        addUser(state, action) {
            state.user =  action.payload;
        }
    }
})

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;