import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { RootState } from '../redux/store';
// import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';

const PrivateRouteGuard: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? <DashboardLayout /> : <Navigate to="/" />;
};

export default PrivateRouteGuard;
