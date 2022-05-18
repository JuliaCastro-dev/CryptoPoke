import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userStore';
import cryptoSlice from './cryptoStore';

const middlewares = [];

const store = configureStore({
    reducer: {
        user: userSlice,
         crypto: cryptoSlice
    },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

export default store;


