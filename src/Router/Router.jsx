import { createBrowserRouter } from 'react-router-dom';
import Donation from '../Components/Donation/Donation';
import Home from '../Components/Home/Home';
import MainLayout from '../Components/Layouts/MainLayout';
import Statistics from '../Components/Statistics/Statistics';

const myCreatedRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('Data.json'),
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
    ],
  },
  {},
]);

export default myCreatedRouter;
