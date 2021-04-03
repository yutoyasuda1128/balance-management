import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ModalWindow } from './ModalWindow';

export function AppCalendar() {
    const [dateObj , setDateObj] = useState(new Date());
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    const showModal = () => {
      setShow(true);
    };
    const closeModal = () => {
      setDate(null);
      setShow(false);
    };
    const onClickDay = (value, event) => {
      setDate(value);
      setShow(true);
    };
    
    return (
        <div>
          <Calendar
            onChange={setDateObj}
            value={dateObj}
            onClickDay={onClickDay} 
          />
          <div>
            <button onClick={ setShow }>全体の収支</button>
          </div>
          {show && (
            <div id="overlay">
              <ModalWindow onClose={closeModal} date={date} />
            </div>
          )}
        </div>
    );
}
