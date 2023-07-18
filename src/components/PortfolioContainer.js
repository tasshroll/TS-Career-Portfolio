import React from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Import the work array listing all work info
// import {work1, work2} from './utils/work';
import {work1} from './utils/work';



export default function PortfolioContainer({ currentPage }) {


    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            // return <Portfolio work1={work1}  work2={work2}/>;
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

            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}