import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 30px 0 15px;
`;

const ContributionSection = styled.div`
  margin-bottom: 40px;
  width: 100%;
  max-width: 800px;
`;

const ContributionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ContributionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContributionItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ContributionText = styled.p`
  font-size: 18px;
  line-height: 1.6;

  strong {
    color: #0047AB;
  }
`;

const MembershipList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MembershipItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;

  strong {
    color: #0047AB;
  }
`;

const Brotherhood = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Delta Kappa Epsilon Brotherhood</Title>

        <Paragraph>
          Delta Kappa Epsilon’s Psi Omega Chapter is built upon the pillars of friendship, leadership, and character. 
          Our brotherhood is not just a collection of individuals but a unified group dedicated to personal growth, 
          academic achievement, and lifelong bonds of camaraderie. We strive to uphold the values that make our fraternity 
          a cornerstone of excellence and support for its members.
        </Paragraph>

        <Subtitle>Membership Breakdown</Subtitle>
        <MembershipList>
          <MembershipItem>
            <strong>Active Members:</strong> Brothers who are currently enrolled at RPI and actively participate in chapter activities.
          </MembershipItem>
          <MembershipItem>
            <strong>Alumni Members:</strong> Graduates who continue to support the chapter through mentorship and involvement.
          </MembershipItem>
          <MembershipItem>
            <strong>Honorary Members:</strong> Esteemed individuals who have been recognized for their contributions to the fraternity.
          </MembershipItem>
        </MembershipList>

        <Subtitle>Brotherhood Campus Contributions</Subtitle>
        <Paragraph>
        The Delta Kappa Epsilon brotherhood is a tight-knit group of 22 dedicated brothers who excel both inside and outside the classroom. 
        Together, we bring diverse talents and passions, actively participating in a wide range of academic and school-wide clubs and societies as described below.
        </Paragraph>
        {/* Contribution Sections */}
        <ContributionSection>
          <ContributionTitle>Media & Technology</ContributionTitle>
          <ContributionList>
            <ContributionItem>
              <ContributionText>
                <strong>The Polytechnic:</strong> Several of our brothers contribute as writers, editors, and staff members, 
                helping to inform and engage the RPI community through our campus newspaper.
              </ContributionText>
            </ContributionItem>
            <ContributionItem>
              <ContributionText>
                <strong>Rensselaer Center for Open Source (RCOS):</strong> Our members participate in and lead open-source 
                software projects that drive technological progress and provide valuable tools to the global community.
              </ContributionText>
            </ContributionItem>
          </ContributionList>
        </ContributionSection>

        <ContributionSection>
          <ContributionTitle>Cybersecurity</ContributionTitle>
          <ContributionList>
            <ContributionItem>
              <ContributionText>
                <strong>RPI SEC:</strong> Brothers actively engage with the RPI SEC to deal with ethics of binary exploitation. 
              </ContributionText>
            </ContributionItem>
            <ContributionItem>
              <ContributionText>
                <strong>Rensselaer Cybersecurity Collaboratory:</strong> Some members work on cutting-edge research and projects 
                aimed at advancing cybersecurity knowledge and applications.
              </ContributionText>
            </ContributionItem>
          </ContributionList>
        </ContributionSection>

        <ContributionSection>
          <ContributionTitle>Arts & Culture</ContributionTitle>
          <ContributionList>
            <ContributionItem>
              <ContributionText>
                <strong>Rusty Pipes Acapella:</strong> Our talented brothers contribute their musical skills as part of this 
                renowned RPI acapella group, enriching campus culture and entertainment.
              </ContributionText>
            </ContributionItem>
          </ContributionList>
        </ContributionSection>

        <ContributionSection>
          <ContributionTitle>Student Support</ContributionTitle>
          <ContributionList>
            <ContributionItem>
              <ContributionText>
                <strong>Teaching Assistants and Resident Assistants:</strong> Many of our brothers serve as TAs and RAs, 
                supporting students academically and fostering a positive and inclusive living environment.
              </ContributionText>
            </ContributionItem>
          </ContributionList>
        </ContributionSection>

      </Container>
    </>
  );
};

export default Brotherhood;
