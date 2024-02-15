import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const topicApi = createApi({
    reducerPath:'topic',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            createTopic: builder.mutation({
                query: (topic) => {
                    return {
                        url:'/topics',
                        method:'POST',
                        body:topic
                    }
                }
            })
        }
    }
})

export const { useCreateTopicMutation } = topicApi;
export { topicApi };