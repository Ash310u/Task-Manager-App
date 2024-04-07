import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { taskReducer } from "./slices/taskSlice";
import { topicReducer } from "./slices/topicSlice";
import { userApi } from "./apis/userApi";
import { topicApi } from "./apis/topicApi";
import { taskApi } from "./apis/taskApi";

const store = configureStore({
    reducer: {
        taskSlice: taskReducer,
        topicSlice: topicReducer,
        [userApi.reducerPath]: userApi.reducer,
        [topicApi.reducerPath]: topicApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(topicApi.middleware)
            .concat(taskApi.middleware)
    }
})

setupListeners(store.dispatch);

export {
    stateAddManyTask,
    stateCreateTask,
    stateRemoveTask,
    stateUpdateTask,
} from "./slices/taskSlice"

export {
    stateAddManyTopic,
    stateAddTopic,
    stateUpdateTopic,
    stateRemoveTopic,
} from "./slices/topicSlice"

export {
    useCreateAccountMutation,
    useLoginAccountMutation,
} from './apis/userApi';

export {
    useCreateTopicMutation,
    useFetchTopicQuery,
    useUpdateTopicMutation,
    useDeleteTopicMutation,
} from './apis/topicApi';

export {
    useFetchTaskQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} from './apis/taskApi'

export { store };