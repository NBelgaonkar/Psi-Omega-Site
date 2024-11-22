import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HomePage from './components/Homepage';
import FAQ from './components/FAQ';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import HistoryPage from './components/History';
import OfficerPage from './components/officers';
import Philanthropy from './components/Philanthropy';
import HousingPage from './components/HousingPage';
import UpcomingEvents from './components/Upcoming';
import Brotherhood from './components/Brotherhood'
import POAA from './components/POAA'
import AlumniRecentEvents from './components/AlumniRecentEvents'
import AlumniConnectSupport from './components/AlumniConnectSupport'
import ContactPage from './components/contactus'


const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about/officers" element={<OfficerPage />} />
            <Route path="/about/brotherhood" element={<Brotherhood />} />
            <Route path="/about/philanthropy" element={<Philanthropy />} />
            <Route path="/about/history" element={<HistoryPage />} />
            <Route path="/about/house" element={<HousingPage />} />

            <Route path="/calendar/rush" element={<Calendar />} />
            <Route path="/calendar/upcoming" element={<UpcomingEvents />} />

            <Route path="/alumni/POAA" element={<POAA />} />
            <Route path="/alumni/events" element={<AlumniRecentEvents />} />
            <Route path="/alumni/connect+support" element={<AlumniConnectSupport />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactPage />} />




 
            
            
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
