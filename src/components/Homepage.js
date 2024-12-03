import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../Images/Brotherhood.jpeg';
import crest from '../Images/Psi-Omega-Crest.png'; // Import the crest image


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  min-height: 100vh;
  padding-top: 60px;
`;

const HeaderImage = styled.img`
  width: 80%;
  max-height: 700px;
  object-fit: cover;  /* Ensure image spans the width of the screen */
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5; /* Light background color */
  padding: 0px 20px;
  width: 100%;
`;

const CrestImage = styled.img`
  width: 200px;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 5px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;  /* Lighter weight for subtitle */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
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


class HomePage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          {/* Full-width header image */}
          <HeaderImage src={background} alt="Header Image" />
          
          {/* Text, buttons, and crest */}
          <ContentSection>
            <Title>Delta Kappa Epsilon at RPI</Title>
            <Subtitle>Psi Omega Chapter</Subtitle>
            <ButtonContainer>
              <RedirectButton onClick={() => window.location.href = '/faq'}>Parents</RedirectButton>
              <RedirectButton onClick={() => window.location.href = '/about/brotherhood'}>Brotherhood</RedirectButton>
              <RedirectButton onClick={() => window.location.href = '/alumni/get-involved'}>Alumni</RedirectButton>
            </ButtonContainer>
            <CrestImage src={crest} alt="DKE Crest" />
          </ContentSection>
        </Container>
      </>
    );
  }
}

export default HomePage;
