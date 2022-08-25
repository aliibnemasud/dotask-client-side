import {configureStore } from '@reduxjs/toolkit';
import allTaskSlice from '../Features/Alltask/allTaskSlice';

const store = configureStore({
    reducer: {
        tasks: allTaskSlice,
    }
});

export default store;

