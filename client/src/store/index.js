import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/userApi";
import { topicApi } from "./apis/topicApi";
import { topicReducer } from "./slices/topicSlice";

const store = configureStore({
    reducer: {
        topicSlice: topicReducer,
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

export {
    stateAddManyTopic,
    stateAddTopic,
    stateUpdateTopic,
    stateRemoveTopic,
    stateCreateTopicTask,
    stateUpdateTopicTask,
    stateRemoveTopicTask
} from "./slices/topicSlice"
export { useCreateAccountMutation, useLoginAccountMutation } from './apis/userApi';
export {
    useCreateTopicMutation,
    useFetchTopicQuery,
    useUpdateTopicMutation,
    useDeleteTopicMutation,
    useCreateTopicTaskMutation,
    useUpdateTopicTaskMutation,
    useDeleteTopicTaskMutation
} from './apis/topicApi';
export { store };