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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BenefitList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const BenefitItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BenefitTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
`;

const BenefitContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const MembershipBenefits = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Membership Benefits</Title>
        <Paragraph>
          Joining Psi Omega offers a wide array of benefits that extend beyond your college years. From professional
          development to lifelong friendships, membership in Psi Omega is an investment in your personal and professional growth.
        </Paragraph>

        <BenefitList>
          <BenefitItem>
            <BenefitTitle>Leadership Development</BenefitTitle>
            <BenefitContent>
              Psi Omega provides numerous opportunities to develop leadership skills, including officer roles, committee
              chair positions, and access to leadership workshops and conferences. Gain practical experience in
              leading and managing teams.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Professional Networking</BenefitTitle>
            <BenefitContent>
              Build a robust professional network through connections with alumni, career fairs, and mentorship programs.
              Psi Omega’s network spans across various industries, offering members unique career opportunities and guidance.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Academic Support</BenefitTitle>
            <BenefitContent>
              Benefit from shared study resources, peer tutoring, and academic mentorship to excel in your coursework.
              Our fraternity emphasizes the importance of academic excellence and provides the tools to succeed.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Philanthropy and Community Service</BenefitTitle>
            <BenefitContent>
              Make a positive impact by participating in community service projects and philanthropic initiatives.
              Psi Omega members contribute to meaningful causes, developing a sense of responsibility and empathy.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Brotherhood and Lifelong Friendships</BenefitTitle>
            <BenefitContent>
              Experience a strong sense of camaraderie and belonging. Psi Omega fosters an environment of mutual
              respect, support, and friendship that lasts well beyond graduation.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Social Events and Networking</BenefitTitle>
            <BenefitContent>
              Enjoy a variety of social events, including formal banquets, mixers, and alumni gatherings. These
              events help build connections and create unforgettable memories with your brothers.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Alumni Engagement</BenefitTitle>
            <BenefitContent>
              Stay connected with a vast network of alumni who are eager to support and mentor current members.
              Alumni involvement enhances the fraternity experience and opens doors to career opportunities.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Personal Growth</BenefitTitle>
            <BenefitContent>
              Psi Omega encourages members to step out of their comfort zones, take on challenges, and grow as
              individuals. Build confidence, resilience, and skills that will serve you for a lifetime.
            </BenefitContent>
          </BenefitItem>
        </BenefitList>
      </Container>
    </>
  );
};

export default MembershipBenefits;
