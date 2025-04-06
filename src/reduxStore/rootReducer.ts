// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import signUpReducer from '../pages/signUp/signUpSlice';
// import loginReducer from '@/features/login/loginSlice';
// import dashboardReducer from '@/features/dashboard/dashboardSlice';

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

export default rootReducer;
