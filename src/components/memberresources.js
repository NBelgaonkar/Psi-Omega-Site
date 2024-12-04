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

const MemberResources = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Member Resources</Title>
        <Paragraph>
          Welcome to the Member Resources page. Here, active members can access essential tools, documents,
          and information to stay organized and make the most of their Psi Omega experience.
        </Paragraph>

        <ResourceList>
          <ResourceItem>
            <ResourceTitle>Chapter Meeting Minutes</ResourceTitle>
            <ResourceContent>
              Access the latest meeting minutes and stay informed about chapter decisions, updates, and upcoming initiatives.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Event Sign-Up Sheets</ResourceTitle>
            <ResourceContent>
              Sign up for upcoming events, including philanthropy projects, brotherhood activities, and socials. Ensure you don’t miss out!
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Member Directory</ResourceTitle>
            <ResourceContent>
              Find contact information for your brothers, including their roles, majors, and contact details. Strengthen your connections!
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Bylaws and Policies</ResourceTitle>
            <ResourceContent>
              Review the chapter’s bylaws and risk management policies to ensure you are informed and compliant with fraternity standards.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Study Resources</ResourceTitle>
            <ResourceContent>
              Access shared study materials, tutoring schedules, and academic support resources to help you excel in your coursework.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Financial Information</ResourceTitle>
            <ResourceContent>
              View your dues statements, payment options, and financial aid opportunities. Stay on top of your financial commitments.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Communication Tools</ResourceTitle>
            <ResourceContent>
              Join group chats, mailing lists, and other communication platforms to stay connected with the chapter.
            </ResourceContent>
          </ResourceItem>
        </ResourceList>
      </Container>
    </>
  );
};

export default MemberResources;