import { RouteObject } from 'react-router-dom';
import Path from '../guards/RoutePaths.tsx';
import SignUp from '@/pages/signUp/SignUp.tsx';

// Public Routes
export const publicRoutes: RouteObject[] = [
  {
    path: Path.SIGNUP,
    element: <SignUp />,
  },
  {
    path: Path.LOGIN,
    element: <SignUp />,
  },
  {
    path: Path.FORGOTPASSWORD,
    element: <SignUp />,
  },
  {
    path: Path.RESETPASSWORD,
    element: <SignUp />,
  },
  {
    path: Path.OTP,
    element: <SignUp />,
  },
];

// Private Routes
export const privateRoutes: RouteObject[] = [
  {
    // path: Path.HOME,
    // element: <Dashboard />,
  },
];
