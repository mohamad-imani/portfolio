import { Link } from 'react-router-dom';
import Socials from './Socials';
const Header = () => {
  return (
    <header className="absolute z-30  flex w-full items-center p-5 xl:h-[90px] ">
      <div className="mx-auto w-full">
        <div className="flex items-center justify-end sm:justify-between sm:gap-y-6 lg:flex-row ">
          <div className="hidden gap-x-4 gap-y-3 sm:flex xxl:ml-48 ">
            <Socials />

            <Link to="/contact" className="button">
              Get in touch
            </Link>
          </div>
          <Link to="/" className='xxl:mr-8'>
            <img src={'/fav.svg'} alt="" width={50} height={50} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
