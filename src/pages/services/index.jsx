/* eslint-disable no-unused-vars */
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="flex  items-center bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row ">
          {/* text*/}
          <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 "
            >
              My services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] md:text-lg lg:mx-0"
            >
              Elevate Your Web Presence.
              <br />I speceialize in Modular Development, and Seamless
              Interactions.
              <br />
              {`Let's`} create a standout online exprience together.
            </motion.p>
          </div>

          {/* slider*/}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] "
          >
            <ServicesSlider />

         
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
