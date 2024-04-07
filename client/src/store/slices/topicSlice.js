import { createSlice } from "@reduxjs/toolkit"

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: [],
    },
    reducers: {
        stateAddManyTopic(state, action) {
            state.topics = action.payload
        },
        stateAddTopic(state, action) {
            state.topics.push(action.payload);
        },
        stateUpdateTopic(state, action) {
            state.topics.forEach((topic,i) => {
                if(topic._id === action.payload._id) {
                    state.topics[i] = action.payload
                }
            });
        },
        stateRemoveTopic(state, action) {
            const filteredTopics = state.topics.filter(topic => {
                return topic._id !== action.payload
            });
            state.topics = filteredTopics;
        },
    }
})

export const { 
    stateAddManyTopic,
    stateAddTopic,
    stateUpdateTopic,
    stateRemoveTopic,
} = topicSlice.actions;
export const topicReducer = topicSlice.reducer;