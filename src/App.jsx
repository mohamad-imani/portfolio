/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
//components
import { BrowserRouter } from 'react-router-dom';
import Transition from './components/Transition';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Transition />
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </>
  );
}
