import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { publicRoutes} from "../routes";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import PublicRouteGuard from '../guards/PublicRouteGuard';
import * as data from '../../package.json';
// import Unauthorized from "../pages/Unauthorized/Unauthoried";
// import { routesConfig } from "../guards/RouteConfig";
// import ProtectedRouteGuard from "../guards/ProtectedRouteGuard";
import { publicRoutes } from './routes';

const AppRoutes: React.FC = () => {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // console.log({ isLoggedIn });

  useEffect(() => {
    document.title = 'Plus wallet ' + data.version;
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route) => (
        <Route element={<PublicRouteGuard />}>
          <Route key={route.path} path={route.path} element={route.element} />
        </Route>
      ))}
      {/* Private Routes */}
      {/* {routesConfig.map(({ path, element: Element, module }) => (
        <Route
          key={path}
          element={<ProtectedRouteGuard requiredModule={module} />}
        >
          <Route path={path} element={<Element />} />
        </Route>
      ))} */}

      {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
    </Routes>
  );
};

export default AppRoutes;
