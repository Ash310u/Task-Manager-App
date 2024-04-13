import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const taskApi = createApi({
    reducerPath:'task',
    baseQuery: fetchBaseQuery({
        // baseUrl:'http://localhost:3005/'
        baseUrl:process.env.REACT_APP_API_BASE_URL
    }),
    endpoints: (builder) => {
        return {
            fetchTask: builder.query({
                query: (authToken) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` };
                    return {
                        url: `/tasks`,
                        method: 'GET',
                        headers
                    }
                }
            }),
            createTask: builder.mutation({
                query: ({authToken, topic_id, task}) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` };
                    return {
                        url: `/${topic_id}/tasks`,
                        method: 'POST',
                        body:task,
                        headers
                    }
                }
            }),
            updateTask: builder.mutation({
                query: ({authToken, topic_id, task_id, task}) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` };
                    return {
                        url: `/${topic_id}/tasks/${task_id}`,
                        method: 'PATCH',
                        body:task,
                        headers
                    }
                }
            }),
            deleteTask: builder.mutation({
                query: ({authToken, topic_id, task_id}) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` };
                    return {
                        url: `/${topic_id}/tasks/${task_id}`,
                        method: 'DELETE',
                        headers
                    }
                }
            }),
            deleteAllTask: builder.mutation({
                query: ({authToken, topic_id}) => {
                    const headers = { 'Authorization': `Bearer ${authToken}` };
                    return {
                        url: `/${topic_id}/tasks`,
                        method: 'DELETE',
                        headers
                    };
                }
            }),

        }
    }
})

export const {
    useFetchTaskQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useDeleteAllTaskMutation
} = taskApi;

export { taskApi };