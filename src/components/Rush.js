import React, { useState, useEffect } from 'react';
import { eachDayOfInterval, endOfWeek, format, isSameDay, startOfWeek } from 'date-fns';
import styled from 'styled-components';
import rampantLion from '../Images/dke-lion.png'; // Replace with the correct path
import axios from 'axios';

const CalendarContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: auto;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* Establish a positioning context */
`;

const LionImage = styled.img`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: auto;
  z-index: 0;
  pointer-events: none;
`;

const Week = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
  text-align: left;
  z-index: 1;
`;

const CalendarTitle = styled.h1`
  color: #221F73;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const Day = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border: ${(props) =>
    props.isInviteOnly
      ? '3px dashed #B32017'
      : props.isEvent
      ? '3px solid #FDB813'
      : '1px solid #ddd'};
  border-radius: 5px;
  position: relative;
  min-height: 100px;
  text-align: left;
  box-shadow: ${(props) => (props.isEvent ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const DayHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #B32017;
`;

const Event = styled.div`
  font-size: 14px;
  margin-top: 5px;
  padding: 5px;
  background-color: #221F73;
  color: #fff;
  border-radius: 4px;
  position: relative;

  .invite-only {
    font-size: 10px;
    font-style: italic;
    color: #FDB813;
    margin-top: 2px;
    display: block;
  }
`;

const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  color: #B32017;
`;

// Helper function to determine the title
const getRushTitle = (events) => {
  if (!events || events.length === 0) return "ΔKE Rush";

  const firstEventDate = new Date(events[0].event_date);
  const month = firstEventDate.getMonth() + 1;
  const year = firstEventDate.getFullYear();
  const season = month >= 7 && month <= 12 ? "Fall" : "Spring";

  return `ΔKE ${season} Rush ${year}`;
};

const RushCalendar = () => {
  const [events, setEvents] = useState([]);

  // Fetch rush events from the database
  useEffect(() => {
    const fetchRushEvents = async () => {
      try {
        const response = await axios.get('/api/rush');
        const eventData = response.data.map((event) => ({
          ...event,
          date: new Date(`${event.event_date}T${event.event_time}`), // Combine date and time
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching rush events:', error);
      }
    };
    fetchRushEvents();
  }, []);

  // Determine first and last event dates
  const firstEventDate = events.length > 0 ? events[0].date : new Date();
  const lastEventDate = events.length > 0 ? events[events.length - 1].date : new Date();

  // Generate weeks containing events
  const weeks = [];
  let currentStart = startOfWeek(firstEventDate);
  while (currentStart <= lastEventDate) {
    const week = eachDayOfInterval({
      start: currentStart,
      end: endOfWeek(currentStart),
    });
    weeks.push(week);
    currentStart = new Date(currentStart.setDate(currentStart.getDate() + 7));
  }

  const renderWeekdayHeaders = () => {
    const weekdays = eachDayOfInterval({
      start: startOfWeek(new Date()),
      end: endOfWeek(new Date()),
    }).map((day) => format(day, 'EEEE'));
    return (
      <WeekdayHeader>
        {weekdays.map((weekday, index) => (
          <div key={index}>{weekday}</div>
        ))}
      </WeekdayHeader>
    );
  };

  const renderEvents = (day) => {
    const dayEvents = events.filter((event) => isSameDay(event.date, day));
    return dayEvents.map((event, index) => (
      <Event key={index} isInviteOnly={event.is_invite_only}>
        <div><strong>{event.title}</strong></div>
        <div>{event.event_time}</div>
        <div>{event.location}</div>
        {event.is_invite_only && <span className="invite-only">Invite Only</span>}
      </Event>
    ));
  };

  const title = getRushTitle(events);

  return (
    <>
      <CalendarContainer>
        <LionImage src={rampantLion} alt="Rampant Lion" />
        <CalendarTitle>{title}</CalendarTitle>
        {renderWeekdayHeaders()}
        {weeks.map((week, weekIndex) => (
          <Week key={weekIndex}>
            {week.map((day, dayIndex) => {
              const isEvent = events.some((event) => isSameDay(event.date, day));
              const isInviteOnly = events.some(
                (event) => isSameDay(event.date, day) && event.is_invite_only
              );
              return (
                <Day key={dayIndex} isEvent={isEvent} isInviteOnly={isInviteOnly}>
                  <DayHeader>{format(day, 'MMM d')}</DayHeader>
                  {renderEvents(day)}
                </Day>
              );
            })}
          </Week>
        ))}
      </CalendarContainer>
    </>
  );
};

export default RushCalendar;
