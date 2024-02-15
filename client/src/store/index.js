import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/userApi";
import { topicApi } from "./apis/topicApi";

const store = configureStore({
    reducer: {
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

export { useCreateAccountMutation } from './apis/userApi';
export { useCreateTopicMutation } from './apis/topicApi';
export { store };