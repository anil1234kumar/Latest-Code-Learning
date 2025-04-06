import { BrowserRouter } from 'react-router-dom';
// import { routes } from './routes';
import AppRoutes from './routes/AppRoutes';

// function AppRoutes() {
//   const element = useRoutes(routes);
//   return element;
// }

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
