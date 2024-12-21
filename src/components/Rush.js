import React, { useState, useEffect } from 'react';
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
} from 'date-fns';
import styled from 'styled-components';
import rampantLion from '../Images/dke-lion.png'; // Replace with the correct path
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
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: auto;
  z-index: 0;
  opacity: 0.15;
  pointer-events: none;
`;

const CalendarTitle = styled.h1`
  color: #221f73;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`;

const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  color: #b32017;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
  z-index: 1;
`;

const Day = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.isEvent ? 'rgba(221, 240, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  border: ${(props) =>
    props.isEvent
      ? '2px solid #221f73'
      : '1px solid rgba(200, 200, 200, 0.6)'};
  border-radius: 5px;
  min-height: 100px;
  text-align: left;
  position: relative;
  box-shadow: ${(props) => (props.isEvent ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const DayHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => (props.isEvent ? '#221f73' : '#b32017')};
`;

const Event = styled.div`
  font-size: 14px;
  margin-top: 5px;
  padding: 8px;
  background-color: #221f73;
  color: #fff;
  border-radius: 4px;

  .location {
    font-size: 12px;
    font-style: italic;
    margin-top: 5px;
    color: #ffd700;
  }
`;

// Helper function to determine title
const getRushTitle = (events) => {
  if (!events || events.length === 0) return 'ΔKE Rush Calendar';

  const firstEventDate = new Date(events[0].date);
  const month = firstEventDate.getMonth() + 1;
  const year = firstEventDate.getFullYear();
  const season = month >= 7 && month <= 12 ? 'Fall' : 'Spring';

  return `ΔKE ${season} Rush ${year}`;
};

const RushCalendar = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from the database
  useEffect(() => {
    const fetchRushEvents = async () => {
      try {
        const response = await axios.get('/api/rush');
        const eventData = response.data.map((event) => ({
          ...event,
          date: new Date(`${event.event_date}T${event.event_time}`),
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching rush events:', error);
      }
    };
    fetchRushEvents();
  }, []);

  // Generate week intervals based on events
  const firstEventDate = events.length > 0 ? events[0].date : new Date();
  const lastEventDate =
    events.length > 0 ? events[events.length - 1].date : new Date();
  const weeks = [];
  let currentStart = startOfWeek(firstEventDate);

  while (currentStart <= lastEventDate) {
    weeks.push(
      eachDayOfInterval({
        start: currentStart,
        end: endOfWeek(currentStart),
      })
    );
    currentStart = new Date(currentStart.setDate(currentStart.getDate() + 7));
  }

  const renderEvents = (day) => {
    const dayEvents = events.filter((event) => isSameDay(event.date, day));
    return dayEvents.map((event, index) => (
      <Event key={index}>
        <div><strong>{event.title}</strong></div>
        <div>{format(event.date, 'p')}</div>
        <div className="location">{event.location}</div>
      </Event>
    ));
  };

  const title = getRushTitle(events);

  return (
    <CalendarContainer>
      <LionImage src={rampantLion} alt="Rampant Lion" />
      <CalendarTitle>{title}</CalendarTitle>
      <WeekHeader>
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
          (day, index) => (
            <div key={index}>{day}</div>
          )
        )}
      </WeekHeader>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex}>
          {week.map((day, dayIndex) => {
            const isEvent = events.some((event) => isSameDay(event.date, day));
            return (
              <Day key={dayIndex} isEvent={isEvent}>
                <DayHeader isEvent={isEvent}>{format(day, 'MMM d')}</DayHeader>
                {renderEvents(day)}
              </Day>
            );
          })}
        </Week>
      ))}
    </CalendarContainer>
  );
};

export default RushCalendar;
