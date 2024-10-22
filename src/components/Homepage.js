import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../Images/pic.png';

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&style=italic&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
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
  width: 100%;
  max-height: 820px;
  object-fit: contain;
  margin-bottom: 120px;
`;

const TextSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 20px;
  color: black;
  line-height: 2;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-style: italic;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #71797E;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const RedirectButton = styled.button`
  background-color: #5a5a5a;
  color: white;
  padding: 15px 30px;
  margin: 0 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  &:nth-child(1) {
    background-color: #8B0000; /* Red for Parents */
  }

  &:nth-child(2) {
    background-color: #4B0082; /* Indigo for Brotherhood */
  }

  &:nth-child(3) {
    background-color: #FFD700; /* Gold for Alumni */
  }
`;

class HomePage extends React.Component {
  state = {
    events: [
      {
        title: 'Gentleman',
        imageUrl: `https://source.unsplash.com/random?event&sig=1`,
        description: 'DKE cultivates a culture of respect, chivalry, and courtesy among its members. The fraternity encourages its members to exemplify the qualities of a true gentleman in their interactions with others, promoting politeness, integrity, and a commitment to treating everyone with dignity.',
      },
      {
        title: 'Scholars',
        imageUrl: `https://source.unsplash.com/random?event&sig=2`,
        description: 'DKE places a strong emphasis on academic excellence and intellectual growth. The fraternity supports its members in their pursuit of knowledge, encouraging them to excel academically and to engage in lifelong learning. Academic achievement is a fundamental component of the DKE experience.',
      },
      {
        title: 'Jolly Good Fellows',
        imageUrl: `https://source.unsplash.com/random?event&sig=3`,
        description: 'DKE embraces the spirit of camaraderie and brotherhood. Members of DKE create bonds that last a lifetime, fostering a sense of belonging, support, and friendship. The fraternity values the happiness and well-being of its members and aims to create a warm and inclusive community where all can thrive and enjoy each others company.',
      },
    ],
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <HeaderImage src={background} alt="Header Image" />
          <TextSection>
            <Title>Welcome to Delta Kappa Epsilon at RPI</Title>
            <Paragraph>The Psi Omega Chapter of Delta Kappa Epsilon (DKE) is a fraternity at Rensselaer Polytechnic Institute (RPI) committed to fostering brotherhood, leadership, and community involvement.</Paragraph>
            <Paragraph>As brothers, we strive to personify the three qualities of a DKE: the gentleman, the scholar, and the jolly good fellow. From our frequent charity events to our many gatherings throughout the semester, our aim remains the same: to foster friendships among young men as they work to achieve their goals at one of the most technical institutions in the world.</Paragraph>
            <Paragraph>We are dedicated to upholding the values and traditions of DKE while creating a welcoming and supportive community for our members. Join us in our journey to make a positive impact on campus and in the lives of our brothers.</Paragraph>
          </TextSection>

          {/* Buttons to redirect */}
          <ButtonContainer>
            <RedirectButton onClick={() => window.location.href = '/parents'}>Parents</RedirectButton>
            <RedirectButton onClick={() => window.location.href = '/brotherhood'}>Brotherhood</RedirectButton>
            <RedirectButton onClick={() => window.location.href = '/alumni'}>Alumni</RedirectButton>
          </ButtonContainer>
        </Container>
      </>
    );
  }
}

export default HomePage;
