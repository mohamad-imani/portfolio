import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/about/index';
import Contact from '../pages/contact/index';
import Services from '../pages/services/index';
import Work from '../pages/work/index';
import Layout from './Layout';
import Home from '../pages/home/index';
import PageNotFound from '../pages/PageNotFound'
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.key} className="h-full">
        <Transition />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
