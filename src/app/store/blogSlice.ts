import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Blog = {
    id: string,
    title: string,
    date: string,
}

type TodosState = {
    posts: Blog[]
}

const initialState: TodosState = {
    posts: [],
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<string>) => {
            state.posts.push({
                id: new Date().toISOString(),
                title: action.payload,
                date: new Date().toISOString(),
            })
        },
        removePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
    }
})

export const { addPost, removePost } = blogSlice.actions
export default blogSlice.reducer
