/* eslint-disable no-unused-vars */
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { Link } from 'react-router-dom';
import { FaCss3, FaGithub, FaPlay, FaReact } from 'react-icons/fa';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';

const Work = () => {
  return (
    <div className="flex h-full items-center  bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto sm:mb-16 sm:mt-32 md:mt-24 lg:mb-28 ">
        <div className="flex flex-col items-center justify-center xxl:gap-x-24">
          {/* text*/}
          <div className="mb-4 flex flex-col text-center lg:text-left xl:mt-32 ">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:-mt-24 xxl:-mt-32 xxl:mb-5 "
            >
              My Work
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-center lg:mx-0 lg:max-w-2xl"
            >
              Here , you{`'ll`} find the evolving chapters of my journey in web
              development. Each project represents a step in my learning
              process.
              <br />
              Hover to see details.
            </motion.p>
          </div>

          {/* slider*/}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <div className="mx-auto grid grid-cols-1 grid-rows-1  gap-8 xl:max-w-4xl xxl:max-w-5xl ">
              {/* card1 */}
              <div className="relative flex items-center justify-center gap-6 overflow-hidden xxl:gap-x-20 ">
                <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
                  <img
                    src={'/public/thumb1.png'}
                    className="rounded-lg"
                    width={500}
                    height={300}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>

                  <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-12">
                    <h1 className="rounded-lg p-3 text-3xl font-black text-white/90 shadow-md shadow-black/70">
                      The Wild Oasis
                    </h1>
                    <p className="text-center text-white/90">
                      This is a internal application used inside the hotel to
                      check-in guests as they arrive and also customers can book
                      their stays.
                    </p>
                    <div className="-mb-6 flex items-center justify-between gap-x-8">
                      <div className="flex gap-2 ">
                        <FaReact
                          size={40}
                          name="React.js"
                          className="transition-all duration-300 hover:text-[#61DBFB]"
                        />
                        <img
                          className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px]"
                          src={'/public/styled-components}.svg'}
                          alt=""
                          width={120}
                          name="Styled Components"
                        />

                        <img
                          className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
                          src={'/public/react-query.svg'}
                          alt=""
                          name="React Query"
                        />
                        <img
                          src={'/public/react-router.svg'}
                          className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
                          name="React Router"
                          alt=""
                        />
                        <RiSupabaseFill
                          size={40}
                          name="Supabase"
                          className="transition-all duration-300 hover:text-green-800"
                        />
                      </div>
                      <div className="flex gap-2 text-[16px]  ">
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

                {/* card2 */}
                <div className="group relative hidden cursor-pointer items-center justify-center overflow-hidden lg:flex">
                  <img
                    src={'/public/thumb3.png'}
                    className="rounded-lg"
                    width={500}
                    height={300}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
                  <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-12">
                    <h1 className="rounded-lg p-3 text-3xl font-black shadow-md shadow-black/70 ">
                      Fast Pizza
                    </h1>
                    <p className="text-center text-white/90">
                      {`It's`} a simple and fast app for buying pizza, where the
                      user can add any quantity she/he wants to the shopping
                      cart and order.
                    </p>
                    <div className="-mb-6 flex items-center justify-between gap-x-8">
                      <div className="flex gap-2 ">
                        <FaReact
                          size={40}
                          name="React.js"
                          className="transition-all duration-300 hover:text-[#61DBFB]"
                        />
                        <SiTailwindcss
                          size={40}
                          className="transition-all duration-300 hover:text-[#61DBFB]"
                        />
                        <img
                          src={'/public/react-router.svg'}
                          className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
                          name="React Router"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-2 text-[16px]  ">
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
                </div>
              </div>

              <div className="flex gap-6  xxl:gap-x-20">
                {/* card3 */}
                <div className="relative hidden items-center justify-center gap-6 overflow-hidden xl:flex xxl:gap-x-20 ">
                  <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden">
                    <img
                      src={'/public/thumb2.png'}
                      className="rounded-lg"
                      width={500}
                      height={300}
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
                    {/* <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'></div> */}
                    <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-12">
                      <h1 className="rounded-lg p-3 text-3xl font-black text-white/90 shadow-md shadow-black/70">
                        WorldWise
                      </h1>
                      <p className="text-center text-white/90">
                        A world map that tracks your footsteps into every city
                        you can think of. Add cities and countries to the list
                        and share your opinions about them with your friends.
                      </p>
                      <div className="-mb-6 flex items-center justify-between gap-x-8">
                        <div className="flex gap-2 ">
                          <FaReact
                            size={40}
                            name="React.js"
                            className="transition-all duration-300 hover:text-[#61DBFB]"
                          />
                          <img
                            src={'/public/css-module.png'}
                            alt=""
                            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
                          />

                          <img
                            src={'/public/react-router.svg'}
                            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
                            name="React Router"
                            alt=""
                          />
                        </div>
                        <div className="flex gap-2 text-[16px]  ">
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

                  {/* card4 */}
                  <div className="group relative hidden cursor-pointer items-center justify-center overflow-hidden lg:flex">
                    <img
                      src={'/public/thumb4.png'}
                      className="rounded-lg"
                      width={500}
                      height={300}
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-0 transition-all duration-700 group-hover:opacity-90"></div>
                    <div className="absolute bottom-0 flex translate-y-full flex-col items-center justify-between gap-y-6 px-2 transition-all duration-700 group-hover:-translate-y-12">
                      <h1 className="rounded-lg p-3 text-3xl font-black text-white/90 shadow-md shadow-black/70">
                        usePopcorn
                      </h1>
                      <p className="text-center text-[17px] text-white/90">
                        This is a Movie app that fetches data from real API and
                        you can search , rate & add movies to your watchlist.
                      </p>
                      <div className="-mb-6 flex items-center justify-between gap-x-20">
                        <div className="flex gap-2 ">
                          <FaReact
                            size={40}
                            name="React.js"
                            className="transition-all duration-300 hover:text-[#61DBFB]"
                          />

                          <FaCss3
                            name="CSS3"
                            size={40}
                            className="transition-all duration-300 hover:text-[#2965f1]"
                          />
                        </div>
                        <div className="flex gap-2 text-[16px]  ">
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-24 z-10  hidden w-[460px] xxl:flex">
        <img src="../../public/back.png" alt="" height={300} className="" />
      </div>
    </div>
  );
};

export default Work;
