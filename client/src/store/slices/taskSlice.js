import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: []
    },
    reducers: {
        stateAddManyTask(state, action) {
            state.tasks = action.payload
        },
        stateCreateTask(state, action) {
            state.tasks.push(action.payload)
        },
        stateUpdateTask(state, action) {
            state.tasks.forEach((task, i) => {
                if (task._id === action.payload._id) {
                    state.tasks[i] = action.payload
                }
            })
        },
        stateRemoveTask(state, action) {
            const tasks = state.tasks.filter((task) => {
                return task._id !== action.payload
            })
            state.tasks = tasks
        },
        stateRemoveTasks(state, action) {
            const tasks = state.tasks.filter((task) => {
                return task.parent_id !== action.payload
            })
            state.tasks = tasks
        },
    }
})

export const {
    stateAddManyTask,
    stateCreateTask,
    stateRemoveTask,
    stateUpdateTask,
    stateRemoveTasks,
} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;