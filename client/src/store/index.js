import { configureStore } from '@reduxjs/toolkit';
import phonesSlice from './slices/phonesList';
const store = configureStore({ reducer: {
    phonesList: phonesSlice,
} });

export default store;
