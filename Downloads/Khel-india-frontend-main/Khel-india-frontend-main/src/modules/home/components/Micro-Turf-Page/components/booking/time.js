import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './time.css';

const Time = ({setSlot}) => {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const [selectedFromTime, setSelectedFromTime] = React.useState(dayjs('2022-04-17T15:30'));
  const [selectedToTime, setSelectedToTime] = React.useState(value);

  React.useEffect(() => {
    console.log("Selected Time From: " + selectedFromTime.format("HH:mm"));
    console.log("Selected Time To: " + selectedToTime.format("HH:mm"));
    // setSelectedToTime(value);
    setSlot(`${selectedFromTime.format("HH:mm")}-${selectedToTime.format("HH:mm")}`);

    // setSlot()
  }, [selectedFromTime,selectedToTime]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='flex gap-5 pt-12 mt-10' style={{color:'white'}}>
          <TimePicker
            style={{color:'white'}}
            label="From"
            defaultValue={dayjs('2022-04-17T15:30')}
            onChange={(newValue) => setSelectedFromTime(newValue)}
          />
          <TimePicker
          style={{color:'white'}}
            label="To"
            value={value}
            onChange={(newValue) => setSelectedToTime(newValue)}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Time