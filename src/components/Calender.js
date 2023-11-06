import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, add } from 'date-fns';

const Calendar = () => {
    // Get the current date
    const currentDate = new Date();
    // Define the start and end of the current month
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);

    // Define the start and end of the weeks to display in the calendar
    const startWeek = startOfWeek(startMonth);
    const endWeek = endOfWeek(endMonth);

    // Get all the days in the interval
    const days = eachDayOfInterval({ start: startWeek, end: endWeek });

    // Get the days in weeks for display purposes
    const weeks = [];
    for (let week = 0; week < days.length / 7; week++) {
        weeks.push(days.slice(week * 7, (week + 1) * 7));
    }

    return (
        <div>
            <h2>{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="calendar">
                {weeks.map((week, index) => (
                    <div key={index} className="week">
                        {week.map(day => (
                            <div key={day} className="day">
                                {format(day, 'd')}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
