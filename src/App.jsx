import React from 'react';
import Home from '../src/pages/Home'
import About from './pages/About';
import MyProjects from './pages/Project';
import SocialMedia from './components/SocialMedia';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
  <div>
    <Home/>
    <About/>
    <MyProjects/>
    <Contact/>
    <SocialMedia/>
    <Footer/>
  </div>
  );
}

export default App;
