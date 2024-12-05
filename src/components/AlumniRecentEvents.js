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

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 20px 0 10px;
  text-align: center;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const EventItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const EventTitle = styled.strong`
  font-size: 20px;
  display: block;
  margin-bottom: 15px;
`;

const EventDetails = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: center;
`;

const AlumniRecentEvents = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Subtitle>Recent Events</Subtitle>
        <EventList>
          <EventItem>
            <EventTitle>October 12th, 2024 - Alumni Weekend</EventTitle>
            <EventDetails>
              12 pm Lunch: We’ll be serving burgers and hot dogs at our new House. Our Alumni Chair will present a chapter update.
            </EventDetails>
            <EventDetails>
              8 pm Hangout: Relax and reconnect with brothers and alumni over casual conversations and good times.
            </EventDetails>
          </EventItem>
        </EventList>

        <Subtitle>Upcoming Events</Subtitle>
        <EventList>
          <EventItem>
            <EventTitle>April 12th, 2025 - Alumni Weekend</EventTitle>
            <EventDetails>
              Join us to celebrate the alumni of our Chapter! This event will feature brunch at the new House with the brothers,
              sports and yard games on the hill, evening festivities, and an early dinner at the Gala!
            </EventDetails>
          </EventItem>
          <EventItem>
            <EventTitle>April 12th, 2025 - Psi Omega 10th Anniversary Gala</EventTitle>
            <EventDetails>
              Join us as we celebrate a decade of brotherhood, achievements, and memories. This black-tie event will feature
              keynote speeches from distinguished alumni, a formal dinner and awards ceremony, entertainment and dancing,
              and opportunities to reconnect with brothers past and present.
            </EventDetails>
          </EventItem>
        </EventList>
      </Container>
    </>
  );
};

export default AlumniRecentEvents;
