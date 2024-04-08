// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slice/user'

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
