import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import oakwoodLogo from '../Images/oakwood.png';
import specialOlympicsLogo from '../Images/specialOlympics.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

const PhilanthropyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7f2f3;
`;

const Title = styled.h1`
  font-size: 36px;
  color: black;
  margin-bottom: 50px;
`;

const PhilanthropyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 20px;
`;

const PhilanthropyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45%;
`;

const Logo = styled.img`
  max-width: 150px;
  height: auto;
  margin-bottom: 20px;
  min-height: 100px; /* Ensures consistent space for logos */
  padding: 10px; /* Adds extra space around the logo */
`;

const PhilanthropyDescription = styled.div`
  font-size: 18px;
  color: black;
  line-height: 1.6;
`;

const PhilanthropyLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Philanthropy = () => {
  return (
    <>
      <GlobalStyle />
      <PhilanthropyContainer>
        <Title>Philanthropy</Title>

        <PhilanthropyRow>
          {/* Oakwood Community Center Section */}
          <PhilanthropyItem>
            <Logo src={oakwoodLogo} alt="Oakwood Community Center Logo" />
            <PhilanthropyDescription>
              Every weekend, DKE Brothers volunteer to assist the Oakwood Community Center’s Weekly Food Pantry.
              Learn more about their mission here:{' '}
              <PhilanthropyLink
                href="https://www.oakwoodcommunitycenter.org/food-pantry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oakwood Community Center Food Pantry
              </PhilanthropyLink>
            </PhilanthropyDescription>
          </PhilanthropyItem>

          {/* Special Olympics Section */}
          <PhilanthropyItem>
            <Logo src={specialOlympicsLogo} alt="Special Olympics Logo" />
            <PhilanthropyDescription>
              Once per semester, DKE runs a pancake delivery event we call DKE’s Diner to support the Special Olympics.
              Learn more about their organization here:{' '}
              <PhilanthropyLink
                href="https://www.specialolympics.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Special Olympics
              </PhilanthropyLink>
            </PhilanthropyDescription>
          </PhilanthropyItem>
        </PhilanthropyRow>
      </PhilanthropyContainer>
    </>
  );
};

export default Philanthropy;
