import { createBrowserRouter } from 'react-router-dom';
import CardDetails from '../Components/Cards/CardDetails';
import Donation from '../Components/Donation/Donation';
import Home from '../Components/Home/Home';
import MainLayout from '../Components/Layouts/MainLayout';
import Statistics from '../Components/Statistics/Statistics';
import ErrorElements from './../Components/ErrorElements/ErrorElements';

const myCreatedRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
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
        loader: () => fetch('/data.json'),
      },
    ],
  },
  {},
]);

export default myCreatedRouter;
