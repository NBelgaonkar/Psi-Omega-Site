import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HomePage from './components/Homepage';
import AboutUs from './components/AboutUs';  // <-- Import the AboutUs component
import FAQ from './components/FAQ';
import Calender from './components/Calender';
import Footer from './components/Footer';
import OurHistory from './components/History';
import DkesDiner from './components/DkesDiner';  
import RosterPage from './components/roster';
import PancakeOrderForm from './components/order';
import Updates from './components/news';


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
            <Route path="/DkesDiner" element={<DkesDiner />} />
            <Route path="/Calender" element={<Calender />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/history" element={<OurHistory />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/roster" element={<RosterPage />} />
            <Route path="/order" element={<PancakeOrderForm />} />
            <Route path="/news" element={<Updates />} />
            <Route path="/Admin" element={<AdminPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
