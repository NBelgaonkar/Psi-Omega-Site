import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import peoplesImage from '../Images/peoples.png';
import riverStImage from '../Images/river_st.png';
import sageAveImage from '../Images/sage_ave.png';
import tibbitsImage from '../Images/tibbits.jpg';


// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 800px;
  text-align: center;

  a {
    color: #0047AB; /* Link color */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  margin: 20px 0;
`;

const ImageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;
const ImageSubtitle = styled.h3`
  font-size: 12px;
  margin-bottom: 3px;
`;

const Image = styled.img`
  width: 75%; /* Set all images to be 3/4 of the screen width */
  max-width: 800px; /* Optional max width to prevent them from getting too large on very wide screens */
  height: auto;
  border-radius: 10px;
`;

// Sage Ave image uses the same styling now, so no need for EnlargedImage

const HousingPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Description of DPG & Housing Organization</Title>
        <Description>
          The Psi Omega Housing Organization is currently managed by the <a href="https://dke.org/about/dke-property-group/" target="_blank" rel="noopener noreferrer">Deke Property Group (DPG)</a>, which handles all the rent and insurance costs in addition to ensuring that the Psi Omega Brotherhood maintains compliance with the lease from <a href="https://iliadhousing.com/" target="_blank" rel="noopener noreferrer">The Iliad</a> off-campus housing. Internally, Psi Omega handles upkeep and maintenance and delegates responsibility to the Housing Manager.
        </Description>

        <ImageSection>
          <ImageWrapper>
            <ImageTitle>1599 Tibbits: Fall 2024-Present</ImageTitle>
            <Image src={tibbitsImage} alt="1599 Tibbits" />
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>901 Peoples: Fall 2014-Spring 2024</ImageTitle>
            <Image src={peoplesImage} alt="901 Peoples" />
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>1480 Sage Ave: 1947-1965</ImageTitle>
            <ImageSubtitle>Later converted into RPI's Admissions Building</ImageSubtitle>
            <Image src={sageAveImage} alt="1480 Sage Ave" />
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>217 River St: 1867-1887</ImageTitle>
            <Image src={riverStImage} alt="217 River St" />
          </ImageWrapper>
        </ImageSection>
      </Container>
    </>
  );
};

export default HousingPage;
