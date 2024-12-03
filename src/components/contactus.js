import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // Add createGlobalStyle here
import background from '../Images/pic.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const ContactSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 150px;
  margin-bottom: 300px;
  color: black;
  p {
    font-size: 24px; 
  }
  h1 {
    font-size: 36px; 
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.6;
`;

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <ContactSection>
            <h1>Contact Us</h1>
            <ContactInfo>
              <strong>DKE Fraternity House Address:</strong><br />
              1599 Tibbits Ave, Troy, NY
            </ContactInfo>
            <ContactInfo>
              <strong>RPI Address:</strong><br />
              110 8th St, Troy, NY
            </ContactInfo>
            <ContactInfo>
              <strong>Email:</strong><br />
              <a href="mailto:contactus@dkerpi.com">contactus@dkerpi.com</a>
            </ContactInfo>
          </ContactSection>
        </Container>
      </>
    );
  }
}

export default ContactPage;
