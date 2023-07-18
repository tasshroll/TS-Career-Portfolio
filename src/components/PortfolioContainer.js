import React from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Work is array listing all project details
import {work1} from './utils/work';

export default function PortfolioContainer({ currentPage }) {

    // This method is checking to see what the value of `currentPage` is. 
    // Depending on the value of currentPage, return corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio work1={work1}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    return (
        <div>
            {/* Call the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}