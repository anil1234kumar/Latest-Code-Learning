// features/signUp/signUpSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { signupUser } from './signUpAction';
import { SignUpState } from './SignUp.type';

const initialState: SignUpState = {
  loading: false,
  user: null,
  error: null,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default signUpSlice.reducer;
