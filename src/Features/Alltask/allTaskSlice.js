import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const featchAllTask = createAsyncThunk("allTask/featchAllTask", async () => {
    const allTask = await axios.get("https://radiant-lowlands-88709.herokuapp.com/alltask");
    return allTask.data;
})


const  allTaskSlice = createSlice({
    name: "allTask",
    initialState: {
        isLoading: false,
        error: null,
        tasks: [],
    },

    extraReducers: (builder) => {

        builder.addCase(featchAllTask.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(featchAllTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tasks = action.payload;
            state.error = null;
        });
        builder.addCase(featchAllTask.rejected, (state, action) => {
            state.isLoading = false;
            state.tasks = [];
            state.error = action.error;
        });
    }
})

export default allTaskSlice.reducer;