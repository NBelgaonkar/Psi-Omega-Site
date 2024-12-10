import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import AlumniGetInvolved from './components/AlumniGetInvolved';
import AlumniRecentEvents from './components/AlumniRecentEvents';
import Awards from './components/Awards';
import Admin from './components/Admin';
import Brotherhood from './components/Brotherhood';
import Calendar from './components/Calendar';
import ContactPage from './components/contactus';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HealthAndSafety from './components/HealthAndSafety';
import HistoryPage from './components/History';
import HomePage from './components/Homepage';
import HousingPage from './components/HousingPage';
import OfficerPage from './components/Officers';
import Philanthropy from './components/Philanthropy';
import POAA from './components/POAA';
import RushCalendar from './components/Rush';
/*import GlobalStyle from './globalStyles'*/

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        {/* <GlobalStyle /> */}
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/admin" element={<Admin />} />
            <Route path="/about/officers" element={<OfficerPage />} />
            <Route path="/about/brotherhood" element={<Brotherhood />} />
            <Route path="/about/philanthropy" element={<Philanthropy />} />
            <Route path="/about/history" element={<HistoryPage />} />
            <Route path="/about/house" element={<HousingPage />} />
            <Route path="/about/health-and-safety" element={<HealthAndSafety />} />
            <Route path="/about/awards" element={<Awards />} />

            {/* New external redirect path */}
            <Route
              path="/about/dke-website"
              element={<Navigate to="https://www.dke.org" replace />}
            />

            <Route path="/calendar/rush" element={<RushCalendar />} />
            <Route path="/calendar/upcoming" element={<Calendar />} />

            <Route path="/alumni/POAA" element={<POAA />} />
            <Route path="/alumni/events" element={<AlumniRecentEvents />} />
            <Route path="/alumni/get-involved" element={<AlumniGetInvolved />} />

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
