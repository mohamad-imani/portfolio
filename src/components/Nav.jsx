/* eslint-disable react-refresh/only-export-components */
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },

  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  let location = useLocation();
  let pathname = location.pathname;
  return (
    <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max  w-full flex-col items-center gap-y-4 md:right-[2%] md:h-screen md:w-16 md:max-w-md md:justify-center">
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm sm:px-40 md:h-max md:flex-col md:justify-center md:rounded-full md:px-0 md:text-xl">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } group relative flex items-center transition-all duration-300 hover:text-accent  `}
              to={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
                <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
