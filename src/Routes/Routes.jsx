import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default router;
