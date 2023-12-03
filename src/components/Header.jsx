import { Link } from 'react-router-dom';
import Socials from './Socials';
const Header = () => {
  return (
    <header className="absolute z-30  flex w-full items-center p-2 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between sm:gap-y-6 lg:flex-row ">
          <Link to="/" className='relative left-48 sm:left-0'>
            <img src={'/fav.svg'} alt="" width={50} height={50}  />
          </Link>
          <div className="flex flex-col gap-y-3 sm:flex-row gap-x-4">
            <Socials />

            <Link to="/contact" className="button">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
