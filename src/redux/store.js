// store.js
import { configureStore } from '@reduxjs/toolkit';
//import loginReducer from './slice/user'
import authReducer from "./slice/user"
const store = configureStore({
  reducer: {
    //login: loginReducer,
    auth:authReducer,
  },
});

export default store;
