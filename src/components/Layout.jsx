// components

import { useEffect, useState } from 'react';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isOverFlow, setIsOverflow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight <= 500 && window.innerWidth >= 400) {
        setIsOverflow(true);
      } else {
        setIsOverflow(false);
      }
      console.log('Window innerHeight:', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isOverFlow ? 'overflow-y-scroll' : 'overflow-y-hidden'
      } page relative bg-site bg-cover bg-no-repeat font-sora text-white `}
    >
      <TopLeftImg />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
