import { BrowserRouter, useRoutes } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { routes } from './routes';

function AppRoutes() {
  const element = useRoutes(routes);
  return <MainLayout>{element}</MainLayout>;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;