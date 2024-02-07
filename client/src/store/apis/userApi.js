import { createApi, fetchBaseQuery } from  "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            createAccount: builder.mutation({
                query: (user) => {
                    return {
                        url:'/users',
                        method:'POST',
                        body:user
                    }
                }
            })
        }
    }
})

export const { useCreateAccountMutation } = userApi;
export { userApi };