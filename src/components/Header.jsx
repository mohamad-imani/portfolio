import { Link } from 'react-router-dom';
import Socials from './Socials';
const Header = () => {
  return (
    <header className="absolute z-30 flex w-full items-center px-4 xl:h-[90px] xl:px-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-4 lg:flex-row ">
          <Link to="/">
            <p>
              <span className="text-3xl font-normal text-white ">mohamad</span>
              <span className="text-2xl font-thin text-white/95"> imani</span>
              <span className="font-4xl text-3xl text-accent/95">.</span>
            </p>
          </Link>
          <div className='flex gap-x-6'>
          <Socials />
          {/* <Link to='/contact' className=" group relative overflow-hidden rounded-sm border border-white/30 px-4 py-1 text-sm font-extralight text-white/90 backdrop-blur-[2px] transition-all duration-300 hover:border-primary">
            <div className='absolute inset-0 w-3 bg-accent/80 transition-all duration-300 ease-out group-hover:w-full'></div>
            <span className='relative '>
              contact <span className="font-bold text-accent/90 group-hover:text-white/90 delay-150"> .</span>
            </span>
          </Link> */}
          <Link to='/contact' className='button'>Get in touch</Link>
          </div>
    
        </div>
      </div>
    </header>
  );
};

export default Header;
