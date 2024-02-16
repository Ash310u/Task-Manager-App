import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/userApi";
import { topicApi } from "./apis/topicApi";
import { userReducer } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        userData: userReducer,
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
export { useCreateAccountMutation } from './apis/userApi';
export { useCreateTopicMutation } from './apis/topicApi';
export { store };