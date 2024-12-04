import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../Images/Brotherhood.jpeg';
import crest from '../Images/Psi-Omega-Crest.png'; // Import the crest image

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
  }

  * {
    box-sizing: border-box;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 0;
  padding: 0;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-image: url(${background});
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const HeroContent = styled.div`
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Add shadow for better readability */

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
  background-color: #F5F5F5; /* Light background color */
  padding: 40px 20px;
  width: 100%;
`;

const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
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
            <CrestImage src={crest} alt="DKE Crest" />
          </ContentSection>
        </Container>
      </>
    );
  }
}

export default HomePage;