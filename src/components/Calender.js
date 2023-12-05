import React, { useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    addMonths,
    subMonths,
    isSameMonth,
    isSameDay
} from 'date-fns';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const currentDay = new Date();

    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const startWeek = startOfWeek(startMonth);
    const endWeek = endOfWeek(endMonth);
    const days = eachDayOfInterval({ start: startWeek, end: endWeek });

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const dayNames = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    }).map(day => format(day, 'EEEE'));

    return (
        <>
            <style>{`
        .calendar-container {
          font-family: 'Arial', sans-serif;
        }

        .calendar-title {
          text-align: center;
          margin-bottom: 20px;
        }

        .calendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
        }

        .day {
          padding: 10px;
          border: 1px solid #ddd;
          min-height: 50px;
        }

        .different-month {
          background-color: #f0f0f0;
        }

        .current-day {
          background-color: #bada55;
          font-weight: bold;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        .day-names {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          padding: 5px 0;
          background-color: #eee;
          font-weight: bold;
        }

        .day-name {
          padding: 5px;
        }

        button {
          padding: 5px;
          cursor: pointer;
        }
      `}</style>
            <div className="calendar-container">
                <h1 className="calendar-title">DKE Events</h1>
                <div className="header">
                    <button onClick={prevMonth}>&lt;</button>
                    <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
                    <button onClick={nextMonth}>&gt;</button>
                </div>
                <div className="day-names">
                    {dayNames.map((dayName, index) => (
                        <div key={index} className="day-name">{dayName}</div>
                    ))}
                </div>
                <div className="calDendar">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`day ${isSameMonth(day, currentMonth) ? '' : 'different-month'} 
                          ${isSameDay(day, currentDay) ? 'current-day' : ''}`}
                        >
                            {format(day, 'd')}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
