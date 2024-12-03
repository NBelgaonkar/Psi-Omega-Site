import React from 'react';
import { startOfWeek, endOfWeek, eachDayOfInterval, format, isSameDay } from 'date-fns';
import styled, { createGlobalStyle } from 'styled-components';
import rampantLion from '../Images/dke-lion.png'; // Replace with the correct path


/*
This webpage can be connected to an event database and will be properly formated
based on the event days and details. No update to the design is necessary.
*/

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;
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
  top: 100px; /* Position below the title */
  left: 50%;
  transform: translateX(-50%);
  width: 500px; /* Restrict the lion's width */
  height: auto; /* Maintain aspect ratio */
  z-index: 0; /* Place it in the background */
  pointer-events: none; /* Prevent interaction with the lion */
`;

const Week = styled.div`
  position: relative; /* Ensure content stacks correctly above the lion */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
  text-align: left;
  z-index: 1; /* Place content above the lion */
`;

const CalendarTitle = styled.h1`
  color: #221F73;
  margin-bottom: 20px;
  position: relative; /* Ensure title stacks above the lion */
  z-index: 1; /* Title above the lion */
`;


const Day = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
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
  if (!events || events.length === 0) return "ΔKE Rush"; // Default title

  const firstEventDate = new Date(events[0].date);
  const month = firstEventDate.getMonth() + 1; // Months are 0-indexed
  const year = firstEventDate.getFullYear();

  const season = month >= 7 && month <= 12 ? "Fall" : "Spring";
  return `ΔKE ${season} Rush ${year}`;
};

// Example event data
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

const RushCalendar = () => {
  // Helper function to find the first and last event dates
  const firstEventDate = events[0].date;
  const lastEventDate = events[events.length - 1].date;

  // Helper function to get all weeks containing events
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

  // Render the weekday headers
  const renderWeekdayHeaders = () => {
    const weekdays = eachDayOfInterval({
      start: startOfWeek(new Date()),
      end: endOfWeek(new Date()),
    }).map((day) => format(day, 'EEEE')); // Full weekday names
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
    return dayEvents.length > 0
      ? dayEvents.map((event, index) => (
          <Event key={index} isInviteOnly={event.isInviteOnly}>
            <div><strong>{event.title}</strong></div>
            <div>{event.time}</div>
            {!event.isInviteOnly && <div>{event.location}</div>}
            {event.isInviteOnly && <span className="invite-only">Invite Only</span>}
          </Event>
        ))
      : null; // Blank for days without events
  };

  const title = getRushTitle(events);

  return (
    <>
    <GlobalStyle />
    <CalendarContainer>
      <LionImage src={rampantLion} alt="Rampant Lion" />
      <CalendarTitle>{title}</CalendarTitle>
      {renderWeekdayHeaders()}
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex}>
          {week.map((day, dayIndex) => {
            const isEvent = events.some((event) => isSameDay(event.date, day));
            const isInviteOnly = events.some(
              (event) => isSameDay(event.date, day) && event.isInviteOnly
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
