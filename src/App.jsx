import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const MyProjects = lazy(() => import('./pages/Project'));
const Footer = lazy(() => import('./components/Footer'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className='bg-[#0c0f11]'>
        <Suspense fallback={
          <div className="min-h-screen bg-[#0c0f11] flex items-center justify-center text-white">
            <div className="animate-pulse">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <MyProjects />
                <Contact/>
                <Footer />
              </>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
