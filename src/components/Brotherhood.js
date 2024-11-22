import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  align-items: flex-start;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 20px 0 10px;
  text-align: left;
`;

const ContributionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContributionItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

const BannerImage = styled.img`
  width: 100%; // Full width of the container
  height: auto; // Maintain aspect ratio
  border-radius: 10px; // Optional for rounded corners
  margin-bottom: 20px; // Space below the image
`;

const Brotherhood = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
      <BannerImage src="../Images/Alex.jpg" alt="Brotherhood Banner" />
        <Paragraph>
          Delta Kappa Epsilon’s Psi Omega Chapter is built upon the pillars of friendship, leadership, and character. 
          Our brotherhood is not just a collection of individuals but a unified group dedicated to personal growth, 
          academic achievement, and lifelong bonds of camaraderie. We strive to uphold the values that make our fraternity 
          a cornerstone of excellence and support for its members.
        </Paragraph>

        <Subtitle>Brotherhood Campus Contribution</Subtitle>
        <ContributionList>
          <ContributionItem>
            <strong>The Polytechnic:</strong> Several of our brothers contribute as writers, editors, and staff members, 
            helping to inform and engage the RPI community through our campus newspaper.
          </ContributionItem>
          <ContributionItem>
            <strong>Rensselaer Center for Open Source (RCOS):</strong> Our members participate in and lead open-source 
            software projects that drive technological progress and provide valuable tools to the global community.
          </ContributionItem>
          <ContributionItem>
            <strong>RPI SEC:</strong> Brothers actively engage with the RPI SEC to deal with ethics of binary exploitation. 
          </ContributionItem>
          <ContributionItem>
            <strong>Rensselaer Cybersecurity Collaboratory:</strong> Some members work on cutting-edge research and projects 
            aimed at advancing cybersecurity knowledge and applications.
          </ContributionItem>
          <ContributionItem>
            <strong>Rusty Pipes Acapella:</strong> Our talented brothers contribute their musical skills as part of this 
            renowned RPI acapella group, enriching campus culture and entertainment.
          </ContributionItem>
          <ContributionItem>
            <strong>Teaching Assistants and Resident Assistants:</strong> Many of our brothers serve as TAs and RAs, 
            supporting students academically and fostering a positive and inclusive living environment.
          </ContributionItem>
        </ContributionList>

        <Subtitle>Membership Breakdown</Subtitle>
        <ContributionList>
          <ContributionItem>
            <strong>Active Members:</strong> Brothers who are currently enrolled at RPI and actively participate in chapter activities.
          </ContributionItem>
          <ContributionItem>
            <strong>Alumni Members:</strong> Graduates who continue to support the chapter through mentorship and involvement.
          </ContributionItem>
          <ContributionItem>
            <strong>Honorary Members:</strong> Esteemed individuals who have been recognized for their contributions to the fraternity.
          </ContributionItem>
        </ContributionList>

      </Container>
    </>
  );
};

export default Brotherhood;
