import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Adjust the path according to your project structure

const store = configureStore({
    reducer: {
        auth: authReducer, // Add the auth reducer to the store
    },
});

export default store;
