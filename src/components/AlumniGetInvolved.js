import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  background-color: #FBF8F8;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 20px 0;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Link = styled.a`
  color: #0047AB;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

// Styled component for the Google Form iframe
const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormIframe = styled.iframe`
  width: 100%;
  border: none;
  margin: 0;
`;

// Page Component
const AlumniInvolvementPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* Title Section */}
        <Title>Alumni - How to Get Involved</Title>

        {/* Update Information Section */}
        <Section>
          <Subtitle>Update Your Information With Us!</Subtitle>
          <Paragraph>
            Stay connected by updating your contact information to receive fraternity updates and invitations.
          </Paragraph>
          <FormContainer>
            <FormIframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdwrwDZxcmZmJfTPacT8SyIZehpqJxr6vV0aO2H6LJpcIDXcQ/viewform?embedded=true"
              width="640"
              height="450"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Information Update Form"
            />
          </FormContainer>
        </Section>

        {/* Best Ways to Help Section */}
        <Section>
          <Subtitle>Best Ways to Help Us</Subtitle>
          <Box>
            <Paragraph>
              Your contributions, both time and financial, make a huge impact. Here are some of the best ways you can support Psi Omega:
            </Paragraph>
            <List>
              <ListItem>Participate in mentorship programs for active brothers.</ListItem>
              <ListItem>Attend fraternity events to share your experiences.</ListItem>
              <ListItem>Contribute to funding for scholarships or chapter improvements.</ListItem>
            </List>
            <Paragraph>
              Contact us at <Link href="mailto:alumni.dkepsiomega@gmail.com">alumni.dkepsiomega@gmail.com</Link> to learn more!
            </Paragraph>
          </Box>
        </Section>

        {/* Current Needs Section */}
        <Section>
          <Subtitle>Current Needs</Subtitle>
          <Box>
            <Paragraph>Our fraternity has identified specific needs for growth and development:</Paragraph>
            <List>
              <ListItem><strong>Lettered Tabling Tent  ~$2000</strong></ListItem>
              <ListItem><strong>New Member Support Fund  $500</strong></ListItem>
            </List>
            <Paragraph>
              You can also choose to sponsor specific events such as recruitment, brotherhood activities, formal events, philanthropy initiatives, or retreats. Every contribution directly supports programs that uphold the legacy and values of Psi Omega. Your generosity not only strengthens our chapter but also ensures future success for our members. All donors will be recognized in our semesterly newsletter as a token of our appreciation.
            </Paragraph>
          </Box>
        </Section>

        {/* Donation Section */}
        <Section>
          <Subtitle>Donate Now</Subtitle>
          <Paragraph>Your support helps us achieve our goals and continue the legacy of Psi Omega.</Paragraph>
          <FormContainer>
            <FormIframe
              src="https://www.zeffy.com/embed/donation-form/e65a8378-da29-4d87-a7e2-8bb40d94bd02"
              width="800"
              height="600"
              title="Alumni Donation Form"
              allowpaymentrequest
              allowTransparency="true"
            />
          </FormContainer>
        </Section>
      </Container>
    </>
  );
};

export default AlumniInvolvementPage;
