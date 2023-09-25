import { createBrowserRouter } from 'react-router-dom';
import CardDetails from '../Components/Cards/CardDetails';
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
        loader: () => fetch('/public/Data.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/public/Data.json'),
      },
    ],
  },
  {},
]);

export default myCreatedRouter;
