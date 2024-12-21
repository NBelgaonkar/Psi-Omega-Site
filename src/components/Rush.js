import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import rampantLion from '../Images/dke-lion.png';
import axios from 'axios';
import { 
  eachDayOfInterval, 
  endOfWeek, 
  format, 
  isSameDay, 
  startOfWeek 
} from 'date-fns';

// Styled Components
const CalendarContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: auto;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
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

const getRushTitle = (events) => {
  if (!events || events.length === 0) return "ΔKE Rush Calendar";
  const firstEventDate = new Date(events[0].event_date);
  const month = firstEventDate.getMonth() + 1;
  const year = firstEventDate.getFullYear();
  const season = month >= 7 && month <= 12 ? "Fall" : "Spring";
  return `ΔKE ${season} Rush ${year}`;
};

const RushCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchRushEvents = async () => {
      try {
        const response = await axios.get('/api/rush');
        const eventData = response.data.map((event) => ({
          ...event,
          event_date: new Date(event.event_date), // Ensure date is a Date object
          is_invite_only: event.is_invite_only === 'Yes', // Normalize to boolean
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching rush events:', error);
      }
    };
    fetchRushEvents();
  }, []);

  if (!events.length) {
    return <CalendarContainer>No Rush Events!</CalendarContainer>;
  }

  const firstEventDate = events[0]?.event_date || new Date();
  const lastEventDate = events[events.length - 1]?.event_date || new Date();

  const weeks = [];
  let currentStart = startOfWeek(firstEventDate);

  while (currentStart <= endOfWeek(lastEventDate)) {
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
    const dayEvents = events.filter((event) =>
      isSameDay(event.event_date, day)
    );
    return dayEvents.map((event, index) => (
      <Event key={index} isInviteOnly={event.is_invite_only}>
        <div><strong>{event.title}</strong></div>
        <div>{event.event_time}</div>
        {!event.is_invite_only && <div>{event.location}</div>}
        {event.is_invite_only && <span className="invite-only">Invite Only</span>}
      </Event>
    ));
  };

  const title = getRushTitle(events);

  return (
    <CalendarContainer>
      <LionImage src={rampantLion} alt="Rampant Lion" />
      <CalendarTitle>{title}</CalendarTitle>
      {renderWeekdayHeaders()}
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex}>
          {week.map((day, dayIndex) => {
            const isEvent = events.some((event) =>
              isSameDay(event.event_date, day)
            );
            const isInviteOnly = events.some(
              (event) => isSameDay(event.event_date, day) && event.is_invite_only
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
  );
};

export default RushCalendar;



/* -------- Leaving this here for reference ------------
const events = [
  {
    date: new Date(2024, 8, 7), // November 5, 2024
    title: 'Mac & Milkshakes',
    time: '5:00 PM',
    location: 'Mothers @ Union',
    isInviteOnly: false,
  },
  {
    date: new Date(2024, 8, 11), // November 15, 2024
    title: 'Hot Wings Challenge',
    time: '6:00 PM',
    location: 'Game Room @ Union',
    isInviteOnly: false,
  },
  {
    date: new Date(2024, 8, 14), // November 15, 2024
    title: 'Ziplining',
    time: '1:30 PM',
    location: 'Union Horseshoe',
    isInviteOnly: true,
  },
  {
    date: new Date(2024, 8, 17), // November 15, 2024
    title: 'Axe Throwing',
    time: '6:00 PM',
    location: 'Union Horseshoe',
    isInviteOnly: true,
  },
  {
    date: new Date(2024, 8, 21), // November 15, 2024
    title: 'BBQ Cookout',
    time: '12:00 PM',
    location: 'Freshman Hill',
    isInviteOnly: false,
  },
  {
    date: new Date(2024, 8, 23), // November 15, 2024
    title: 'Tacos & Trivia',
    time: '6:00 PM',
    location: 'Mothers @ Union',
    isInviteOnly: false,
  },
  {
    date: new Date(2024, 8, 25), // November 25, 2024
    title: 'Bid Dinner',
    time: '8:00 PM',
    location: 'Chapter House',
    isInviteOnly: true,
  },
];
*/