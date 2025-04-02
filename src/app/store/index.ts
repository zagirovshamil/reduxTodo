import { configureStore } from '@reduxjs/toolkit'
import todoReducers from './todoSlice'
import numberReducers from './blogSlice'




export const store = configureStore({
    reducer: {
        todos: todoReducers,
        counter: numberReducers,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch