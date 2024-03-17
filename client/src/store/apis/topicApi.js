import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const topicApi = createApi({
    reducerPath: 'topic',
    baseQuery: fetchBaseQuery({
        // baseUrl:'http://localhost:3005/'
        baseUrl:process.env.REACT_APP_API_BASE_URL
    }),
    endpoints(builder) {
        return {
            fetchTopic: builder.query({
                query: (authToken) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: '/topics',
                        method: 'GET',
                        headers
                    }
                }
            }),
            createTopic: builder.mutation({
                query: ({ authToken, topic }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: '/topics',
                        method: 'POST',
                        body: topic,
                        headers
                    }
                }
            }),
            updateTopic: builder.mutation({
                query: ({ authToken, topic }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic._id}`,
                        method: 'PATCH',
                        body: topic,
                        headers
                    }
                }
            }),
            deleteTopic: builder.mutation({
                query: ({ authToken, topic_id }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic_id}`,
                        method: 'DELETE',
                        headers
                    }
                }
            }),
            createTopicTask: builder.mutation({
                query: ({ authToken, topic_id, task }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic_id}/tasks`,
                        method: 'POST',
                        body: task,
                        headers
                    }
                }
            }),
            updateTopicTask: builder.mutation({
                query: ({ authToken, topic_id, task_id, task }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic_id}/tasks/${task_id}`,
                        method: 'PATCH',
                        body: task,
                        headers
                    }
                }
            }),
            deleteTopicTask: builder.mutation({
                query: ({ authToken, topic_id, task_id }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic_id}/tasks/${task_id}`,
                        method: 'DELETE',
                        headers
                    }
                }
            }),
        }
    }
})

export const { 
    useCreateTopicMutation, 
    useFetchTopicQuery, 
    useUpdateTopicMutation,
    useDeleteTopicMutation,
    useCreateTopicTaskMutation,
    useUpdateTopicTaskMutation,
    useDeleteTopicTaskMutation
    } = topicApi;
export { topicApi };