/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { Tooltip } from '@material-tailwind/react';

import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiTestinglibrary,
} from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';

import Avatarr from '../../components/Avatarr';
import { BsGit } from 'react-icons/bs';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Core languages',
        icons: [
          <FaHtml5
            name="HTML"
            className="transition-all duration-300 hover:text-orange-900"
          />,
          <FaCss3
            name="CSS3"
            className="transition-all duration-300 hover:text-[#2965f1]"
          />,
          <FaJs
            name="JavaScript"
            className="transition-all duration-300 hover:text-[#f7df1e]"
          />,
        ],
      },
      {
        title: 'Frameworks & Libraries',
        icons: [
          <FaReact
            name="React.js"
            className="transition-all duration-300 hover:text-[#61DBFB]"
          />,

          <img
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            src={"/react-query.svg"}
            alt=""
            name="React Query"
          />,
          <SiRedux
            name="Redux"
            className="transition-all duration-300 hover:text-[#764abc]"
          />,

          <img
            src={"/react-router.svg"}
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px] "
            name="React Router"
            alt=""
          />,

          <SiTestinglibrary
            name="React Testing Library"
            className="transition-all duration-300 hover:text-[#dd3214]"
          />,
        ],
      },
      {
        title: 'Styling',
        icons: [
          <SiTailwindcss
            name="TailwindCSS"
            className="transition-all duration-300 hover:text-[#a5f3fc]"
          />,
          <img
            className="w-7 max-w-[28px] grayscale transition-all duration-300 hover:grayscale-0 md:w-10 md:max-w-[40px]"
            src={"/styled-components.svg"}
            alt=""
            width={150}
            name="Styled Components"
          />,

          <SiSass
            name="Sass"
            className="transition-all duration-300 hover:text-[#c69] "
          />,
        ],
      },
      {
        title: 'Dev Tools',
        icons: [
          <BsGit
            name="Git"
            className="transition-all duration-300 hover:text-[#f14e32]"
          />,
          <RiSupabaseFill
            name="Supabase"
            className="transition-all duration-300 hover:text-green-800"
          />,
        ],
      },
    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'Seeking for real jobs , Never worked officially ',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Software engineering Bachelor - Azad University',
        stage: ' 2020',
      },
      {
        title: 'Software engineering Master - Azad University',
        stage: ' Currently',
      },

      {
        title: 'Web / JS  -  Barnamenevisan Academy',
        stage: ' 2022',
      },
      {
        title: 'Web / React  -  Udemy Ultimate React Course',
        stage: `2023`,
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isExp, setIsExp] = useState(false);
  function handleIndex(itemIndex) {
    setIndex(itemIndex);
    if (itemIndex == 1) {
      setIsExp(true);
    } else setIsExp(false);
    console.log(itemIndex);
  }

  return (
    <div className="mt-12 h-full py-32 text-center md:mt-24 lg:mt-12 xl:mt-0 xl:text-left ">
      <Circles />
      <motion.div
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -bottom-4 -left-[270px] hidden mix-blend-color-dodge xxl:flex"
      >
        <Avatarr />
      </motion.div>
      <div className="container mx-auto -mt-10 flex h-full flex-col items-center gap-x-6  xl:max-w-6xl xl:flex-row ">
        {/* text*/}
        <div className="flex flex-1 flex-col justify-center ">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-7"
          >
            Code meets design
            <br />
            <span className="text-accent">
              Creating an{' '}
              <span className="bg-gradient-to-r from-[#f333c3] via-[#3056ff] to-[#680fcd] bg-clip-text text-transparent">
                Art
              </span>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
          >
            {`As a developer i enjoy building everything from small tasks to rich interactive web apps , I revel in crafting animations that add rhythm and soul to the UserExperience. Exploring modern designs are integral aspects of my journey.`}
          </motion.p>
        </div>
        {/* info*/}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="skills mt-2 flex h-[480px] w-full flex-col md:mt-8 xl:mt-56 xl:max-w-[48%] "
        >
          <div className="mx-auto mb-2 flex gap-x-4 xl:mx-0 xl:gap-x-8 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent  after:w-full after:bg-[rgba(241,50,36,0.89)] after:transition-all after:duration-300 '
                  }
                  relative mr-6 cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-xl`}
                  onClick={() => handleIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" mt-2 sm:mt-6 flex flex-col items-center gap-y-2 py-2 xl:mt-0 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex max-w-max flex-1 flex-col items-center  gap-x-4 text-white/60 md:flex-row xl:mt-5 "
                >
                  <div className="mb-2 w-max font-light md:mb-0 ">
                    {item.title}
                  </div>

                  {isExp === false ? (
                    <div className="hidden h-6 w-[1px] bg-white/20 md:flex md:gap-x-4"></div>
                  ) : (
                    ''
                  )}

                  <div className="">{item.stage}</div>
                  <div className="flex items-center gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <Tooltip
                          content={icon.props.name}
                          className={`bg-white/10 px-2 py-1 font-medium text-white backdrop-blur-sm`}
                          position="top-start"
                        >
                          <div
                            key={itemIndex}
                            className="cursor-pointer text-2xl md:text-4xl"
                          >
                            {icon}
                          </div>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
