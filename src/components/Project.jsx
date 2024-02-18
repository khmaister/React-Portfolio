import { useState } from 'react';
import Navigation from './Navigation';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';

export default function Project() {
    const [currentPage, setCurrentPage] = useState('AboutPage');
  
    const renderPage = () => {
      if (currentPage === 'AboutPage') {
        return <AboutPage />;
      }
      if (currentPage === 'PortfolioPage') {
        return <PortfolioPage />;
      }
      if (currentPage === 'ContactPage') {
        return <ContactPage />;
      }
      if (currentPage === 'ResumePage') {
        return <ResumePage />;
      }
      return <AboutPage />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="mx-3">{renderPage()}</main>
      </div>
    );
  }