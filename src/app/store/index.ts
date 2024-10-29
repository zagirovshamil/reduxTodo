import { configureStore } from '@reduxjs/toolkit'
import todoReducers from './todoSlice'



export const store = configureStore({
    reducer: {
        todos: todoReducers
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch