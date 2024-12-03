import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import crest from '../Images/Psi-Omega-Crest.png'; // Import the crest image

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
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;
const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
`;
const AlumniRecentEvents = () => {
  return (
    <>
      <GlobalStyle />
      <Container>

        <Subtitle>Recent Events</Subtitle>
        <EventList>
          <EventItem>
            <strong>October 12th, 2024 - Alumni Weekend</strong>
              <li> 12 pm Lunch: We’ll be serving burgers and hot dogs at our new House. Our Alumni Chair will present a chapter update.</li>
              <li>8 pm Hangout: Relax and reconnect with brothers and alumni over casual conversations and good times.</li>
          </EventItem>
        </EventList>

        <Subtitle>Upcoming Events</Subtitle>
        <EventList>
          <EventItem>
            <strong>April 12th, 2025 - Alumni Weekend</strong>
            <br />
            Join us to celebrate the alumni of our Chapter! This event will feature:
              <li>Brunch at the new House with the brothers</li>
              <li>Sports and yard games on the hill</li>
              <li>Evening festivities </li>
              <li>Early dinner at the Gala!</li>
          </EventItem>
            <br />
          <EventItem>
            <strong>April 12th, 2025 - Psi Omega 10th Anniversary Gala</strong>
            <br />
            Join us as we celebrate a decade of brotherhood, achievements, and memories. 
            This black-tie event will feature:
              <li>Keynote speeches from distinguished alumni</li>
              <li>A formal dinner and awards ceremony</li>
              <li>Entertainment and dancing</li>
              <li>Opportunities to reconnect with brothers past and present</li>
          </EventItem>

        </EventList>
        <CrestImage src={crest} alt="DKE Crest" />

      </Container>
    </>
  );
};

export default AlumniRecentEvents;
