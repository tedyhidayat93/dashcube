import './styles/main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/_layouts/main/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Task from './pages/task/Task';
import Cards from './components/cards/Cards';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/task",
          element: <Task />,
        },
        {
          path: "/cards",
          element: <Cards />,
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}


export default App
