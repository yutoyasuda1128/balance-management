import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function AppCalendar() {
    const [dateObj , setDateObj] = useState(new Date());
    
    return (
        <div>
          <Calendar
            onChange={setDateObj}
            value={dateObj}
          />
        </div>
    );
}
