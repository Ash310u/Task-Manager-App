import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/userApi";
import { topicApi } from "./apis/topicApi";
import { userReducer } from "./slices/userSlice";
import { topicReducer } from "./slices/topicSlice";

const store = configureStore({
    reducer: {
        userData: userReducer,
        topicsData: topicReducer,
        [userApi.reducerPath]: userApi.reducer,
        [topicApi.reducerPath]: topicApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(topicApi.middleware)
    }
})

setupListeners(store.dispatch);

export { addUser } from './slices/userSlice'
export { addTopic } from './slices/topicSlice'
export { useCreateAccountMutation, useLoginAccountMutation } from './apis/userApi';
export { useCreateTopicMutation, useFetchTopicQuery, useUpdateTopicMutation, useCreateTopicTaskMutation } from './apis/topicApi';
export { store };