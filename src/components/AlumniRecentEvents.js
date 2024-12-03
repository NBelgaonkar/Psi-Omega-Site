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
  text-align: center;
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

const AlumniRecentEvents = () => {
  return (
    <>
      <GlobalStyle />
      <Container>

        <Subtitle>Recent Events</Subtitle>
        <EventList>
          <EventItem>
            <strong>September 26th, 2024 - Alumni Weekend</strong>
            <ul>
              <li> 12 pm Lunch: We’ll be serving burgers, hot dogs, and sexy men.</li>
              <li>8 pm Hangout: Relax and reconnect with brothers and alumni over casual conversations and good times.</li>
            </ul>
          </EventItem>
        </EventList>

        <Subtitle>Upcoming Events</Subtitle>
        <EventList>
        <EventItem>
            <strong>April 5th, 2025 - Alumni Weekend</strong>
            <br />
            Join us to celebrate the alumni of our Chapter! This event will feature:
            <ul>
              <li>Grilled lunch outside with the brothers</li>
              <li>Sports and yard games on the hill</li>
              <li>Evening movie night </li>
              <li>Homemande dinner</li>
            </ul>
          </EventItem>
          <br />
          <EventItem>
            <strong>April 15th, 2025 - Psi Omega 10th Anniversary Gala</strong>
            <br />
            Join us as we celebrate a decade of brotherhood, achievements, and memories. This black-tie event will feature:
            <ul>
              <li>Keynote speeches from distinguished alumni</li>
              <li>A formal dinner and awards ceremony</li>
              <li>Entertainment and dancing</li>
              <li>Opportunities to reconnect with brothers past and present</li>
            </ul>
          </EventItem>

        </EventList>

      </Container>
    </>
  );
};

export default AlumniRecentEvents;
