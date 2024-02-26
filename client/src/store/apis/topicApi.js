import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const topicApi = createApi({
    reducerPath: 'topic',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchTopic: builder.query({
                providesTags:['topic'],
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
                invalidatesTags:['topic'],
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
                invalidatesTags:['topic'],
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
                invalidatesTags:['topic'],
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
                invalidatesTags:['topic'],
                query: ({ authToken, topic_id, task }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: `/topics/${topic_id}/tasks`,
                        method: 'POST',
                        body: task,
                        headers
                    }
                }
            })
        }
    }
})

export const { 
    useCreateTopicMutation, 
    useFetchTopicQuery, 
    useUpdateTopicMutation,
    useDeleteTopicMutation,
    useCreateTopicTaskMutation
    } = topicApi;
export { topicApi };