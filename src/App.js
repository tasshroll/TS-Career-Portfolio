// components that will rendered different pages
import Home from './components/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import React, { useState } from 'react';

// React Router
import { Route, Routes, useLocation } from 'react-router-dom';

// Work contains all my project details, it is a prop for Portfolio component
import { work1 } from './components/utils/work';

export default function App() {

  // get location object from react-router-dom to define path
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      {currentPage === '/' ? null : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio work1={work1} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {currentPage === '/' ? null : <Footer />}

    </>
  );
}