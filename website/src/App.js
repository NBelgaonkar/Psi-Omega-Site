import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HomePage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';

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
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
