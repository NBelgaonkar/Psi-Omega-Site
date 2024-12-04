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

const ScholarshipList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const ScholarshipItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ScholarshipTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ScholarshipDetails = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const ScholarshipDeadline = styled.p`
  font-size: 14px;
  color: #999;
`;

const Scholarships = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Scholarship Opportunities</Title>
        <Paragraph>
          Psi Omega is proud to offer scholarships to support academic excellence and leadership development.
          Explore the opportunities below and take the next step in your educational journey.
        </Paragraph>

        <ScholarshipList>
          <ScholarshipItem>
            <ScholarshipTitle>Psi Omega Academic Excellence Scholarship</ScholarshipTitle>
            <ScholarshipDetails>
              Awarded annually to a member who demonstrates outstanding academic performance and a commitment to personal growth.
              Applicants must have a minimum GPA of 3.5 and provide a 500-word essay on how Psi Omega has influenced their academic journey.
            </ScholarshipDetails>
            <ScholarshipDeadline>Application Deadline: April 15, 2024</ScholarshipDeadline>
          </ScholarshipItem>

          <ScholarshipItem>
            <ScholarshipTitle>Leadership and Service Award</ScholarshipTitle>
            <ScholarshipDetails>
              This scholarship recognizes members who have exhibited exceptional leadership skills and dedication to community service.
              Applicants must provide documentation of their leadership roles and a letter of recommendation from a faculty advisor or employer.
            </ScholarshipDetails>
            <ScholarshipDeadline>Application Deadline: May 1, 2024</ScholarshipDeadline>
          </ScholarshipItem>

          <ScholarshipItem>
            <ScholarshipTitle>Alumni Legacy Scholarship</ScholarshipTitle>
            <ScholarshipDetails>
              Open to members who are direct descendants of Psi Omega alumni. This scholarship celebrates the enduring legacy of our fraternity.
              Applicants must submit a 300-word essay about their family’s connection to Psi Omega and how it has shaped their values.
            </ScholarshipDetails>
            <ScholarshipDeadline>Application Deadline: June 15, 2024</ScholarshipDeadline>
          </ScholarshipItem>

          <ScholarshipItem>
            <ScholarshipTitle>Financial Need-Based Scholarship</ScholarshipTitle>
            <ScholarshipDetails>
              Designed to support members who demonstrate financial need. Applicants must provide financial documentation and a personal statement
              outlining their educational and career goals.
            </ScholarshipDetails>
            <ScholarshipDeadline>Application Deadline: July 1, 2024</ScholarshipDeadline>
          </ScholarshipItem>
        </ScholarshipList>
      </Container>
    </>
  );
};

export default Scholarships;
