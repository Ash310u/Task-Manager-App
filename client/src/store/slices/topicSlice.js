import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name:'topicsData',
    initialState:[],
    reducers: {
        addTopic(state, action) {
            state.push(...action.payload)
        }
    }
})

export const { addTopic } = topicSlice.actions;
export const topicReducer = topicSlice.reducer;