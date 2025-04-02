import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
}
type TodosState = {
    list: Todo[],
}

const initialState: TodosState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },

    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
