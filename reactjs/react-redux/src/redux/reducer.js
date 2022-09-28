import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
            (data) => data.json()
        )
        return res
    })

export const getPostById = createAsyncThunk(
    'posts/getPostById',
    async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            (data) => data.json()
        )
        return res
    }
)


export const getUserById = createAsyncThunk(
    'posts/getUserById',
    async id =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
            (data) => data.json()
        )
        return res
    }
    
)

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        news: [],
        singlenews:{},
        user:{},
    },
    extraReducers: {
        [getPosts.fulfilled]: (state, { payload }) => {
            state.news = payload
        },
        [getPostById.fulfilled]: (state, { payload }) => {
            state.singlenews = payload
        },
        [getUserById.fulfilled]:(state,{payload})=>{
            state.user = payload
        }
    }
})

export const postReducer = postSlice.reducer