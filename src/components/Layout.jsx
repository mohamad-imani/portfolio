// components
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div
      className={`page relative bg-site bg-cover bg-no-repeat font-sora text-white `}
    >
      <TopLeftImg />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
