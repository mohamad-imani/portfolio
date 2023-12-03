import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { lazy } from 'react';
import Transition from './Transition';

const Home = lazy(() => import('../pages/home/index'));
const About = lazy(() => import('../pages/about/index'));
const Contact = lazy(() => import('../pages/contact/index'));
const Services = lazy(() => import('../pages/services/index'));
const Work = lazy(() => import('../pages/work/index'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Layout = lazy(()=> import('../components/Layout'))

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
