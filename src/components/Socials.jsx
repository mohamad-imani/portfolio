import { FaGithub, FaInstagram, FaLinkedinIn,  FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link
        to="https://linkedin.com/in/mohamad-imani"
        target="_blank"
        className="hover transition-all duration-300 hover:text-accent "
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to="https://github.com/mohamad-imani"
        target="_blank"
        className="hover transition-all duration-300 hover:text-accent "
      >
        <FaGithub />
      </Link>
      <Link
        to="https://www.instagram.com/mohmd.imani"
        target="_blank"
        className="hover transition-all duration-300 hover:text-accent "
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://t.me/forza_roma"
        target="_blank"
        className="hover transition-all duration-300 hover:text-accent "
      >
        <FaTelegramPlane />
      </Link>
    </div>
  );
};

export default Socials;
