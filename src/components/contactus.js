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
  align-items: center; /* Ensures child elements align in the center */
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 20px 0 10px;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
`;

const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

const contactus = () => {
  return (
    <>
      <GlobalStyle />
      <Container>

        <Subtitle>Contact Us</Subtitle>
        <EventList>
        <EventItem>
            <strong>House Address </strong>
            <br />
            1599 Tibbits Ave, Troy NY, 12180 
        </EventItem>
            <br />
        <EventItem>
            <strong>RPI Address</strong>
            <br />
            110 8th St, Troy, NY 12180
        </EventItem>
            <br />
        <EventItem>
            <strong>Email</strong>
            <br />
            <a href="mailto:contactus@dkerpi.com">contactus@dkerpi.com</a>
        </EventItem>
            <br />
        <EventItem>
            <strong>Instagram</strong>
            <br />
            <a href="https://www.instagram.com/dke_rpi/?hl=en"> dke_rpi official account</a>
        </EventItem>
        </EventList>
      </Container>
    </>
  );
};

export default contactus;
