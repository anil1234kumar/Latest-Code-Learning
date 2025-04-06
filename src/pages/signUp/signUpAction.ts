// features/signUp/signUpActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SignUpPayload } from './SignUp.type';

export const signupUser = createAsyncThunk(
  'signUp/signupUser',
  async (userData: SignUpPayload, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', userData);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Signup failed');
      } else {
        return thunkAPI.rejectWithValue('An unexpected error occurred');
      }
    }
  }
);
