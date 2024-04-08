
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginUserSuccess, loginUserFailure } = loginSlice.actions;
export default loginSlice.reducer;

