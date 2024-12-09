import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import styled from 'styled-components';
import ChapterCrest from '../Images/Psi-Omega-Crest.png'; 
import NationalCrest from '../Images/dke-coat-of-arms.png'; 

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  flex-grow: 1;
`;

const Crest = styled.img`
  width: ${(props) => props.width || '150px'};
  height: auto;
  margin: 0 20px;
  align-self: center;
`;

const CalendarContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1000px;
  margin: auto;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CalendarTitle = styled.h1`
  color: #221F73;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    padding: 5px 10px;
    font-size: 16px;
    background-color: #221F73;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #B32017;
    }
  }
`;

const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  color: #B32017;
  margin-bottom: 10px;
`;

const DayName = styled.div`
  padding: 10px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const Day = styled.div`
  padding: 15px;
  background-color: ${(props) => (props.isCurrentDay ? '#8FA5D9' : props.isSameMonth ? '#FFF' : '#F0F0F0')};
  border: 1px solid #DDD;
  border-radius: 5px;
  position: relative;
  min-height: 120px;
  text-align: left;
  box-shadow: ${(props) => (props.hasEvents ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const DayHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => (props.isCurrentDay ? '#B32017' : '#221F73')};
`;

const Event = styled.div`
  margin-top: 5px;
  padding: 5px;
  background-color: #FDB813;
  color: #221F73;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;

  .event-caption {
    font-size: 12px;
    color: #333;
    margin-top: 2px;
  }
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const currentDay = new Date();

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        const eventData = response.data.map((event) => ({
          ...event,
          date: new Date(event.event_date), // Ensure the date is a JavaScript Date object
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth);
  const endWeek = endOfWeek(endMonth);
  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const dayNames = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  }).map((day) => format(day, 'EEEE'));

  const renderEvents = (day) => {
    const dayEvents = events.filter((event) => isSameDay(event.date, day));
    return dayEvents.map((event, index) => (
      <Event key={index}>
        {event.title}
        {event.time && <div className="event-caption"> {event.time}</div>}
        {event.location && <div className="event-caption"> {event.location}</div>}
        {event.description && <div className="event-caption">{event.description}</div>}
      </Event>
    ));
  };

  return (
    <>
      <PageContainer>
        <Crest
          src={ChapterCrest}
          alt="Chapter Crest"
          width="150px"
        />
        <CalendarContainer>
          <CalendarTitle>ΔKE Events</CalendarTitle>
          <Header>
            <button onClick={prevMonth}>&lt;</button>
            <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
            <button onClick={nextMonth}>&gt;</button>
          </Header>
          <DayNames>
            {dayNames.map((dayName, index) => (
              <DayName key={index}>{dayName}</DayName>
            ))}
          </DayNames>
          <CalendarGrid>
            {days.map((day, index) => (
              <Day
                key={index}
                isCurrentDay={isSameDay(day, currentDay)}
                isSameMonth={isSameMonth(day, currentMonth)}
                hasEvents={events.some((event) => isSameDay(event.date, day))}
              >
                <DayHeader isCurrentDay={isSameDay(day, currentDay)}>{format(day, 'd')}</DayHeader>
                {renderEvents(day)}
              </Day>
            ))}
          </CalendarGrid>
        </CalendarContainer>
        <Crest
          src={NationalCrest}
          alt="National Crest"
          width="150px"
        />
      </PageContainer>
    </>
  );
};

export default Calendar;
