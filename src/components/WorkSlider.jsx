import { SwiperSlide, Swiper } from 'swiper/react';
//import swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { FaCss3, FaGithub, FaPlay, FaReact } from 'react-icons/fa';
import { RiSupabaseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SiTailwindcss } from 'react-icons/si';

export default function WorkSlider() {
  return (
    <Swiper
    spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={{clickable:true}}
      modules={[Navigation, Pagination]}
      className='h-auto sm:w-[600px] '
    >
      <SwiperSlide>
      <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
    <img
      loading="lazy"
      src={'/thumb1.png'}
      className="rounded-lg "
      alt=""
      
    />
    <div className="absolute inset-0 bg-gradient-to-r rounded-lg from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>

    <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-4 sm:gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-8 sm:group-hover:-translate-y-28">
      <h1 className="rounded-lg p-3 text-2xl  sm:text-3xl font-black text-white/90 shadow-md shadow-black/70">
        The Wild Oasis
      </h1>
      <p className="text-center text-sm sm:text-base text-white/90 sm:px-12">
        This is a internal application used inside the hotel to
        check-in guests as they arrive and also customers can book
        their stays.
      </p>
      <div className="-mb-6 flex items-center justify-between gap-x-3 sm:gap-x-8">
        <div className="flex gap-2 ">
          <FaReact
            size={30}
            name="React.js"
            className="transition-all duration-300 hover:text-[#61DBFB]"
          />
          <img
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px]"
            src={'/styled-components.svg'}
            alt=""
            width={120}
            name="Styled Components"
          />

          <img
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            src={'/react-query.svg'}
            alt=""
            name="React Query"
          />
          <img
            src={'/react-router.svg'}
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            name="React Router"
            alt=""
          />
          <RiSupabaseFill
            size={30}
            name="Supabase"
            className="transition-all duration-300 hover:text-green-800"
          />
        </div>
        <div className="flex gap-1 sm:gap-2 text-[12px] sm:text-[16px]  ">
          <div className="flex items-center justify-center gap-x-1">
            <Link
              className="underline-offset-4 hover:underline "
              target="_blank"
              to={'https://m-imani-wild-oasis.vercel.app/'}
            >
              Live Demo
            </Link>
            <FaPlay />
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <Link
              to={
                'https://github.com/mohamad-imani/the-wild-oasis'
              }
              target="_blank"
              className="underline-offset-4 hover:underline "
            >
              GitHub
            </Link>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide> 
         <div className="group relative  cursor-pointer items-center justify-center overflow-hidden flex">
    <img
      src={'/thumb3.png'}
      className="rounded-lg"

      alt=""
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
    <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-8 sm:group-hover:-translate-y-28">
      <h1 className="rounded-lg p-2 sm:p-3 text-2xl sm:text-3xl font-black shadow-md shadow-black/70 ">
        Fast Pizza
      </h1>
      <p className="text-center text-sm sm:text-base text-white/90 sm:px-12">
        {`It's`} a simple and fast app for buying pizza, where the
        user can add any quantity she/he wants to the shopping
        cart and order.
      </p>
      <div className="-mb-6 flex items-center justify-between gap-x-8">
        <div className="flex gap-2 ">
          <FaReact
            size={30}
            name="React.js"
            className="transition-all duration-300 hover:text-[#61DBFB]"
          />
          <SiTailwindcss
            size={30}
            className="transition-all duration-300 hover:text-[#61DBFB]"
          />
          <img
            src={'/react-router.svg'}
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            name="React Router"
            alt=""
          />
        </div>
        <div className="flex gap-2 sm:text-[16px] text-[12px]  ">
          <div className="flex items-center justify-center gap-x-1">
            <Link
              className="underline-offset-4 hover:underline "
              target="_blank"
              to={'https://m-imani-fast-pizza.vercel.app/'}
            >
              Live Demo
            </Link>
            <FaPlay />
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <Link
              to={
                'https://github.com/mohamad-imani/fast-react-pizza'
              }
              target="_blank"
              className="underline-offset-4 hover:underline "
            >
              GitHub
            </Link>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  </div></SwiperSlide>
      <SwiperSlide>
      <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
      <img
        src={'/thumb2.png'}
        className="rounded-lg"

        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
 
      <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-4 sm:gap-y-8 px-2 transition-all duration-700 group-hover:-translate-y-7 sm:group-hover:-translate-y-28">
        <h1 className="rounded-lg p-1 sm:p-3 text-2xl sm:text-3xl font-black text-white/90 shadow-md shadow-black/70">
          WorldWise
        </h1>
        <p className="text-center text-white/90 text-sm sm:px-12">
          A world map that tracks your footsteps into every city
          you can think of. Add cities and countries to the list
          and share your opinions about them with your friends.
        </p>
        <div className="-mb-6 flex items-center justify-between gap-x-12 sm:gap-x-24">
          <div className="flex gap-2 ">
            <FaReact
              size={30}
              name="React.js"
              className="transition-all duration-300 hover:text-[#61DBFB]"
            />
            <img
              src={'/css-module.png'}
              alt=""
              className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            />

            <img
              src={'/react-router.svg'}
              className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
              name="React Router"
              alt=""
            />
          </div>
          <div className="flex gap-2 text-[12px] sm:text-[16px]  ">
            <div className="flex items-center justify-center gap-x-1">
              <Link
                className="underline-offset-4 hover:line-through"
                target="_blank"
                to={'*'}
              >
                Live Demo
              </Link>
              <FaPlay />
            </div>
            <div className="flex items-center justify-center gap-x-1">
              <Link
                to={'https://github.com/mohamad-imani/worldwise'}
                target="_blank"
                className="underline-offset-4 hover:underline "
              >
                GitHub
              </Link>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
      <img
        src={'/thumb4.png'}
        className="rounded-lg"
  
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
      <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-4 sm:gap-y-8 px-2 transition-all duration-700 group-hover:-translate-y-14 sm:group-hover:-translate-y-28">
        <h1 className="rounded-lg p-1 sm:p-3 sm:text-3xl text-2xl font-bold text-white/90 shadow-md shadow-black/70">
          usePopcorn
        </h1>
        <p className="text-center text-sm sm:text-base sm:px-12 text-white/90">
          This is a Movie app that fetches data from real API and
          you can search , rate & add movies to your watchlist.
        </p>
        <div className="-mb-6 flex items-center justify-between gap-x-20">
          <div className="flex gap-2 ">
            <FaReact
              size={30}
              name="React.js"
              className="transition-all duration-300 hover:text-[#61DBFB]"
            />

            <FaCss3
              name="CSS3"
              size={30}
              className="transition-all duration-300 hover:text-[#2965f1]"
            />
          </div>
          <div className="flex gap-2 text-[12px] sm:text-[16px]  ">
            <div className="flex items-center justify-center gap-x-1">
              <Link
                className="underline-offset-4 hover:underline"
                target="_blank"
                to={'https://m-imani-usepopcorn.vercel.app/'}
              >
                Live Demo
              </Link>
              <FaPlay />
            </div>
            <div className="flex items-center justify-center gap-x-1">
              <Link
                to={'https://github.com/mohamad-imani/usePopcorn'}
                target="_blank"
                className="underline-offset-4 hover:underline "
              >
                GitHub
              </Link>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
      </SwiperSlide>
    </Swiper>
  );
}
