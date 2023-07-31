import * as React from 'react';
import {useContext } from 'react'
import { AdapterDayjs}  from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BookingContext } from '../../Contex/BookingContext';
import './calender.css';



const Calender = () => {
  const {date,handleDateChange} = useContext(BookingContext);
  return (
    <>
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          views={['day', 'month']}
          value={date}
          className=''
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </LocalizationProvider>
      </div>
    </>
  );
};

export default Calender