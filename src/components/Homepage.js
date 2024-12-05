import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import background from '../Images/Brotherhood.jpeg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
  }

  * {
    box-sizing: border-box;
  }
`;

// Styled components
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeroSection = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url(${background}) no-repeat center center; 
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const HeroContent = styled.div`
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RedirectButton = styled.button`
  background-color: #5a5a5a;
  color: white;
  padding: 15px 30px;
  margin: 0 10px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  &:nth-child(1) {
    background-color: #B32017; /* Red for Parents */
  }

  &:nth-child(2) {
    background-color: #221F73; /* Blue for Brotherhood */
  }

  &:nth-child(3) {
    background-color: #FDB813; /* Gold for Alumni */
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
  padding: 40px 20px;
  width: 100%;
`;

class HomePage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          {/* Hero Section */}
          <HeroSection>
            <HeroContent>
              <h1>Delta Kappa Epsilon at RPI</h1>
              <h2>Psi Omega Chapter</h2>
              <ButtonContainer>
                <RedirectButton onClick={() => window.location.href = '/faq'}>Parents</RedirectButton>
                <RedirectButton onClick={() => window.location.href = '/about/brotherhood'}>Brotherhood</RedirectButton>
                <RedirectButton onClick={() => window.location.href = '/alumni/get-involved'}>Alumni</RedirectButton>
              </ButtonContainer>
            </HeroContent>
          </HeroSection>

          {/* Additional Content Section */}
          <ContentSection>
          </ContentSection>
        </Container>
      </>
    );
  }
}

export default HomePage;