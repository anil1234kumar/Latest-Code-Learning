import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
interface ProtectedRouteProps {
  requiredModule: string;
}

const ProtectedRouteGuard: React.FC<ProtectedRouteProps> = ({ requiredModule }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { role, permissions } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) <Navigate to="/" />;

  if (role === 'admin' && isLoggedIn) return <DashboardLayout />;

  const hasPermission = permissions?.some((p) => p.module === requiredModule);

  return hasPermission && isLoggedIn ? (
    <DashboardLayout />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default ProtectedRouteGuard;
