// //components
import ParticlesContainer from '../../components/ParticlesContainer';
import ProjectsBtn from '../../components/ProjectsBtn';
import Avatar from '../../components/Avatar';

// // framer motion
import { motion } from 'framer-motion';
// //variants
import { fadeIn } from '../../variants';
const Home = () => {
  return (
    <div className="bg-primary/60 ">
      {/*text*/}
      <motion.div className="w-full  h-[100dvh]">
        <div className="container mx-auto flex flex-col justify-center text-center xl:pt-40 xl:text-left h-full">
          {/*title*/}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-white/90 text-5xl mt-20 sm:mt-40  xl:mt-0 xxl:text-7xl"
          >
            
            <span className="font-[righteous]  tracking-wider -ml-[29px] xl:ml-0">Frontend
              <br />
              <span className='text-accent/90'>Developer</span> 
            </span>
            <span className="text-4xl">.</span>
          </motion.h1>
          {/*subtitle*/}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl text-white/80  xxl:text-lg font-extralight"
          >
           Hello & Welcome ,{` I'm Mohamad`}<br />
            a front-end developer born in 1998 with solid foundation of React.js , Responsive & Progressive web designs. 
            <br />
            {`I'm`} confident, naturally curious and perpetually working on improving my development skills day to day.
            Dive into my portfolio to explore projects.
          </motion.p>
          {/*btn*/}
          <div className="relative flex justify-center xl:hidden mb-2">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </motion.div>
      {/*image*/}
      <div className="absolute bottom-0 right-0 h-full w-full">
        {/*bg img*/}

        <div className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-opacity-90 xl:bg-cover xl:bg-right xl:bg-no-repeat  "></div>
        {/*particles*/}
        <ParticlesContainer />
        {/*avatar img*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:-bottom-10 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
