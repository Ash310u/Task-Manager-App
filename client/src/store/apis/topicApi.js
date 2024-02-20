import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const topicApi = createApi({
    reducerPath: 'topic',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            createTopic: builder.mutation({
                invalidatesTags:['topic'],
                query: ({ authToken, topic }) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` }
                    return {
                        url: '/topics',
                        method: 'POST',
                        headers,
                        body: topic
                    }
                }
            }),
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
            })
        }
    }
})

export const { useCreateTopicMutation, useFetchTopicQuery } = topicApi;
export { topicApi };