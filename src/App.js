import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';
import React, { useState } from 'react';

// Pass work array to Project component as a prop
export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // Set currentPage state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div >
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <PortfolioContainer currentPage={currentPage} />
      <Footer />
    </div>
  );
}