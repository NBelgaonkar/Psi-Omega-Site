import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import rampantLion from '../Images/dke-lion.png';
import axios from 'axios';

// Styled Components
const CalendarContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 900px;
  margin: 30px auto;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const LionImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  z-index: 0;
  opacity: 0.1;
  pointer-events: none;
`;

const CalendarTitle = styled.h1`
  color: #221f73;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const EventItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventTitle = styled.h3`
  color: #221f73;
  margin: 0 0 5px;
`;

const EventDetails = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

const RushCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchRushEvents = async () => {
      try {
        const response = await axios.get('/api/rush');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching rush events:', error);
      }
    };
    fetchRushEvents();
  }, []);

  return (
    <CalendarContainer>
      <LionImage src={rampantLion} alt="Rampant Lion" />
      <CalendarTitle>ΔKE Rush Calendar</CalendarTitle>
      <EventList>
        {events.map((event) => (
          <EventItem key={event.id}>
            <EventTitle>{event.title}</EventTitle>
            <EventDetails>
              <strong>Date:</strong> {event.event_date}
            </EventDetails>
            <EventDetails>
              <strong>Time:</strong> {event.event_time}
            </EventDetails>
            <EventDetails>
              <strong>Location:</strong> {event.location}
            </EventDetails>
            <EventDetails>
              <strong>Description:</strong> {event.description}
            </EventDetails>
          </EventItem>
        ))}
      </EventList>
    </CalendarContainer>
  );
};

export default RushCalendar;
