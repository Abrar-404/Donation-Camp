import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className=" mx-auto max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] px-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
