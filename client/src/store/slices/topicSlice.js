import { createSlice } from "@reduxjs/toolkit"

const topicSlice = createSlice({
    name: 'topic',
    initialState:{
        topics:[]
    },
    reducers: {
        stateAddTopics(state, action) {
            action.payload.forEach(topic => {
                return state.topics = action.payload;
            });
        }
    }
})

export const { stateAddTopics } = topicSlice.actions;
export const topicReducer = topicSlice.reducer;