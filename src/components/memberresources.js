import React from 'react';
import styled from 'styled-components';

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

const HighlightedText = styled.span`
  font-weight: bold;
  color: #0047AB;
`;

const MemberResources = () => {
  return (
    <>
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
              Archived minutes are also available for reference to ensure transparency and continuity.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Event Sign-Up Sheets</ResourceTitle>
            <ResourceContent>
              Sign up for upcoming events, including philanthropy projects, brotherhood activities, and socials. Ensure you don’t miss out!
              The page is updated weekly with new opportunities to get involved.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Member Directory</ResourceTitle>
            <ResourceContent>
              Find contact information for your brothers, including their roles, majors, and contact details. Strengthen your connections!
              The directory also includes information about alumni who are available for mentorship.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Bylaws and Policies</ResourceTitle>
            <ResourceContent>
              Review the chapter’s bylaws and risk management policies to ensure you are informed and compliant with fraternity standards.
              Regularly updated to reflect new policies and procedural changes.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Study Resources</ResourceTitle>
            <ResourceContent>
              Access shared study materials, tutoring schedules, and academic support resources to help you excel in your coursework.
              You can also submit resources to contribute to the shared library.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Financial Information</ResourceTitle>
            <ResourceContent>
              View your dues statements, payment options, and financial aid opportunities. Stay on top of your financial commitments.
              If you have questions, reach out to the chapter treasurer for personalized assistance.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Communication Tools</ResourceTitle>
            <ResourceContent>
              Join group chats, mailing lists, and other communication platforms to stay connected with the chapter.
              Ensure you are part of the discussion for key updates and announcements.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Leadership Development Materials</ResourceTitle>
            <ResourceContent>
              Explore resources designed to enhance leadership skills, including guides on project management,
              public speaking, and conflict resolution.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Calendar of Events</ResourceTitle>
            <ResourceContent>
              Stay informed about all upcoming chapter events, deadlines, and activities. Easily add events to your
              personal calendar to keep track of commitments.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Alumni Connection</ResourceTitle>
            <ResourceContent>
              Access the alumni portal for networking opportunities, career advice, and updates on alumni involvement.
              Strengthen ties with past brothers who can guide and support your journey.
            </ResourceContent>
          </ResourceItem>

          <ResourceItem>
            <ResourceTitle>Volunteer Opportunities</ResourceTitle>
            <ResourceContent>
              Get involved in community service and campus initiatives. Browse open volunteer roles and sign up to
              make a difference while earning service hours.
            </ResourceContent>
          </ResourceItem>
        </ResourceList>

        <Paragraph>
          If you have suggestions or need assistance, please contact our <HighlightedText>Member Support Team</HighlightedText> at
          support@psiomega.org. Your engagement and feedback help us improve our resources and services!
        </Paragraph>
      </Container>
    </>
  );
};

export default MemberResources;
