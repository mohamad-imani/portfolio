/* eslint-disable no-unused-vars */
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className="flex items-center  bg-primary/30 py-36">
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
              Here you{`'ll`} find the evolving chapters of my journey in web
              development. Each project represents a step in my learning
              process.
              <br />
              Hover to see details.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full "
          >
          <WorkSlider />
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-24 z-10  hidden w-[460px] xxl:flex">
        <img src="/back.png" alt="" height={300} className="" />
      </div>
    </div>
  );
};

export default Work;

