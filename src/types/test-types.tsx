// TypeScript test file to verify type definitions work correctly
// This file is not included in the build, it's just for testing types

import React, { useState } from 'react';
import { 
  DateTimePicker, 
  TimePicker, 
  WheelPicker, 
  CalendarTimePicker, 
  HorizontalCalendarTimePicker,
  Wheel,
  WheelItem,
  Theme
} from './index';

// Test component to verify all types work correctly
const TypeTestComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [theme, setTheme] = useState<Theme>('light');

  const options: WheelItem[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div>
      {/* DateTimePicker - all props should be type-checked */}
      <DateTimePicker
        value={date}
        onChange={setDate}
        showTime={true}
        theme={theme}
        wheelProps={{
          fontSize: '14px',
          textColor: '#666',
          selectedTextColor: '#000'
        }}
      />

      {/* TimePicker - all props should be type-checked */}
      <TimePicker
        value={time}
        onChange={setTime}
        use24Hours={true}
        theme={theme}
        wheelProps={{
          itemHeight: 40,
          fontWeight: '500'
        }}
      />

      {/* WheelPicker - all props should be type-checked */}
      <WheelPicker
        items={options}
        value={selectedOption}
        onChange={setSelectedOption}
        label="Select an option"
        theme={theme}
        wheelProps={{
          highlightColor: 'rgba(0, 0, 0, 0.1)',
          highlightBorderColor: 'rgba(0, 0, 0, 0.2)'
        }}
      />

      {/* CalendarTimePicker - all props should be type-checked */}
      <CalendarTimePicker
        value={date}
        onChange={setDate}
        showTime={true}
        theme={theme}
      />

      {/* HorizontalCalendarTimePicker - all props should be type-checked */}
      <HorizontalCalendarTimePicker
        value={date}
        onChange={setDate}
        showTime={true}
        theme={theme}
        use24Hour={true}
        timeFormat="HH:mm"
        className="custom-class"
        style={{ margin: '10px' }}
      />

      {/* Wheel component - all props should be type-checked */}
      <Wheel
        items={options}
        value={selectedOption}
        onChange={setSelectedOption}
        itemHeight={40}
        fontSize="16px"
        fontWeight="400"
        textColor="#666"
        selectedTextColor="#000"
        highlightColor="rgba(0, 0, 0, 0.05)"
        highlightBorderColor="rgba(0, 0, 0, 0.1)"
      />

      {/* Theme selector to test Theme type */}
      <select 
        value={theme} 
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default TypeTestComponent;
