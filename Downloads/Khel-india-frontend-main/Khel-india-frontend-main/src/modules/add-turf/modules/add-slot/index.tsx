/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import {
  Button,
  Collapse,
  css,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {LocalizationProvider,TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAtom } from 'jotai';
import { addTurfDataAtom } from '../../../../shared/states/add-turf';
import dayjs from 'dayjs';

const daysOfWeek = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY'
];

function TimeSlotsForm() {
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<string>('');
  const [selectedStartTime, setSelectedStartTime] = useState<string>('');
  const [selectedEndTime, setSelectedEndTime] = useState<string>('');
  const [selectedCost, setSelectedCost] = useState<number>(0);
  const [showSlots, setShowSlots] = useState(false);
  const [turfData, setTurfData] = useAtom(addTurfDataAtom);

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newSlot = {
      day: selectedDayOfWeek,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
      cost: selectedCost.toString()
    };
    setSelectedDayOfWeek('');
    setSelectedStartTime('');
    setSelectedEndTime('');
    setSelectedCost(0);
    setTurfData((old) => ({
      ...old,
      slots: [...turfData.slots, newSlot]
    }));
  };

  const handleDeleteSlot = (index: number) => {
    const updatedSlots = [...turfData.slots];
    updatedSlots.splice(index, 1);
    setTurfData((old) => ({
      ...old,
      slots: updatedSlots
    }));
  };

  return (
    <>
      <Button
        onClick={() => setShowSlots(!showSlots)}
        disabled={!turfData.slots.length}
      >
        {showSlots && !!turfData.slots.length
          ? 'Hide Slots'
          : 'Show Added Slots'}
      </Button>
      <Collapse in={showSlots && !!turfData.slots.length}>
        <List>
          {turfData.slots.map((slot, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={slot.day}
                secondary={`${new Date(
                  slot.startTime
                ).toLocaleTimeString()} - ${new Date(
                  slot.endTime
                ).toLocaleTimeString()}\tRs.${slot.cost}`}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleDeleteSlot(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <form onSubmit={handleFormSubmit}>
        <div
          css={css({
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            gap: '10px',
            '@media (max-width: 768px)': {
              flexDirection: 'column'
            }
          })}
        >
          <TextField
            required
            select
            value={selectedDayOfWeek}
            onChange={(event) => setSelectedDayOfWeek(event.target.value)}
            label="Day of Week"
            css={css({
              width: '30%',
              '@media (max-width: 768px)': {
                width: '100%'
              }
            })}
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              // renderInput={(params) => <TextField {...params} />}
              label="Start Time"
              value={selectedStartTime}
              disabled={!selectedDayOfWeek}
              onChange={(time) => {
                if (time) {
                  setSelectedStartTime(time);
                  setSelectedEndTime(dayjs(time).add(1, 'hour').toString());
                }
              }}
            />
            <TimePicker
              minTime={
                selectedStartTime
                  ? ['11', '23'].includes(
                      new Date(selectedStartTime)
                        .toLocaleTimeString()
                        .split(':')[0]
                    )
                    ? undefined
                    : selectedStartTime
                  : undefined
              }
              // renderInput={(params) => <TextField {...params} />}
              label="End Time"
              value={selectedEndTime}
              disabled={!selectedStartTime}
              onChange={(time) => time && setSelectedEndTime(time)}
            />
          </LocalizationProvider>
          <TextField
            disabled={!selectedEndTime}
            placeholder={'Cost'}
            value={!!selectedCost && selectedCost}
            type={'number'}
            onChange={(event) => setSelectedCost(+event.target.value)}
          />
          <Button type="submit" disabled={!selectedCost}>
            Save Slot
          </Button>
        </div>
      </form>
    </>
  );
}

export default TimeSlotsForm;
