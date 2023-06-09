import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';

import SingleCarDetails from '../Pages/SingleCarDetails/SingleCarDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddToy from '../Pages/AddToy/AddToy';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import MyToys from '../Pages/MyToys/MyToys';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';

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
      {
        path: '/carDetails',
        element: <SingleCarDetails></SingleCarDetails>,
      },
      {
        path: '/addToy',
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
      },
      {
        path: `/allToys/:id`,
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-murex.vercel.app/addToys/${params.id}`
          ),
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>,
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-murex.vercel.app/updateToy/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
