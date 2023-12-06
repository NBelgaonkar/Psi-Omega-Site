import React from 'react';
import styled from 'styled-components';
import background from '../Images/pic.png';

// Additional imports for new components
import Header from './Header'; // Sample Header component
import Footer from './Footer'; // Sample Footer component
import Calendar from './Calendar'; // Sample Calendar component
import FAQ from './FAQ'; // Sample FAQ component
import ContactForm from './ContactForm'; // Sample Contact Form component
import Gallery from './Gallery'; // Sample Gallery component

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

// Existing styled components...

class RushDKEPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <RushSection>
            <h1>Rush DKE</h1>
            <RushInfo>
              <strong>What does it mean to rush DKE:</strong> Rushing DKE means you are interested in becoming a member of our brotherhood. To do this, attend events we host at the beginning of the semester to familiarize yourself with the brothers and what we do.
            </RushInfo>
            <RushInfo>
              <strong>Questions?</strong> If you have any questions, feel free to contact our recruitment chair through the contact form below.
            </RushInfo>
            <RushInfo>
              <strong>DKE Rush Calendar:</strong> Check out our interactive calendar for all the important dates for rushing DKE.
            </RushInfo>
            <Calendar />
            <RushInfo>
              <strong>DKE Events Calendar:</strong> Refer to the main calendar on the homepage for details about all our events.
            </RushInfo>
            <FAQ />
            <Gallery />
            <ContactForm />
          </RushSection>
        </Container>
        <Footer />
      </>
    );
  }
}

export default RushDKEPage;
