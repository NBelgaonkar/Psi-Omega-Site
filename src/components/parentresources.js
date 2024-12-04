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

const ResourceList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const ResourceItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResourceTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ResourceContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ParentResources = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Parent Resources</Title>
        <Paragraph>
          Welcome to the Psi Omega Parent Resources page. Here, we provide information and answers to help parents
          understand the fraternity experience and how it supports the growth, leadership, and well-being of our members.
        </Paragraph>

        <ResourceList>
          <ResourceItem>
            <ResourceTitle>About Psi Omega</ResourceTitle>
            <ResourceContent>
              Psi Omega is committed to fostering academic excellence, leadership development, and lifelong
              brotherhood. Learn more about our mission and how it shapes the experience of your student.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Safety and Well-Being</ResourceTitle>
            <ResourceContent>
              The safety and well-being of our members are our top priorities. We adhere to strict risk management policies
              and promote a supportive, inclusive environment for all brothers.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Academic Support</ResourceTitle>
            <ResourceContent>
              Psi Omega provides resources to help members excel academically, including study groups, peer mentorship,
              and access to alumni networks for career guidance.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Philanthropy and Community Engagement</ResourceTitle>
            <ResourceContent>
              Our fraternity is dedicated to giving back to the community through philanthropic initiatives and service projects.
              These experiences teach valuable skills and instill a sense of responsibility in our members.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Financial Information</ResourceTitle>
            <ResourceContent>
              We are transparent about dues and fees, and we offer financial aid and scholarships to eligible members.
              If you have concerns, feel free to reach out to our finance team for assistance.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Contact Us</ResourceTitle>
            <ResourceContent>
              Have more questions? Reach out to our Parent Liaison or Chapter Advisor for more information. We’re here to
              support you and your student.
            </ResourceContent>
          </ResourceItem>
        </ResourceList>
      </Container>
    </>
  );
};

export default ParentResources;
