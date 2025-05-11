import React, { useState } from 'react';
import { DateTimePicker, TimePicker, WheelPicker, CalendarTimePicker } from '../index';

const Demo = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('option2');
  const [theme, setTheme] = useState('light');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ];

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Crisli Picker Demo</h1>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{ padding: '5px 10px' }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div>
          <h2>Date & Time Picker</h2>
          <p>Selected: {date.toLocaleString()}</p>
          <DateTimePicker
            value={date}
            onChange={setDate}
            theme={theme}
          />
        </div>

        <div>
          <h2>Time Picker</h2>
          <p>Selected: {time.toLocaleTimeString()}</p>
          <TimePicker
            value={time}
            onChange={setTime}
            theme={theme}
          />
        </div>

        <div>
          <h2>Wheel Picker</h2>
          <p>Selected: {selectedOption}</p>
          <WheelPicker
            items={options}
            value={selectedOption}
            onChange={setSelectedOption}
            label="Select an option"
            theme={theme}
          />
        </div>

        <div>
          <h2>Calendar Time Picker</h2>
          <p>Selected: {calendarDate.toLocaleString()}</p>
          <CalendarTimePicker
            value={calendarDate}
            onChange={setCalendarDate}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
