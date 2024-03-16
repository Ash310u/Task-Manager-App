import { createSlice } from "@reduxjs/toolkit"

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: [],
        tasks:[]
    },
    reducers: {
        stateAddManyTopic(state, action) {
            state.topics = action.payload
        },
        stateAddTopic(state, action) {
            state.topics.push(action.payload);
        },
        stateUpdateTopic(state, action) {
            state.topics.forEach(topic => {
                if(topic._id === action.payload._id) {
                    topic.title = action.payload.title
                }
            });
        },
        stateRemoveTopic(state, action) {
            const filteredTopics = state.topics.filter(topic => {
                return topic._id !== action.payload
            });
            state.topics = filteredTopics;
        },
        stateCreateTopicTask(state, action) {
            state.topics.forEach(topic => {
                if(topic._id === action.payload.topic_id) {
                    topic.tasks.push(action.payload.task) 
                }
            });
        },
        stateAddManyTask(state, action) {
            if(!state.tasks.includes(action.payload)) {
                state.tasks.push(...action.payload)
            }
        },
    }
})

export const { 
    stateAddManyTopic,
    stateAddTopic,
    stateUpdateTopic,
    stateRemoveTopic,
    stateCreateTopicTask,
    stateAddManyTask
} = topicSlice.actions;
export const topicReducer = topicSlice.reducer;