import React, { useState } from 'react'
import { 
  DateTimePicker, 
  TimePicker, 
  WheelPicker, 
  CalendarTimePicker, 
  HorizontalCalendarTimePicker 
} from 'crisli-picker'

const ComponentsPage = ({ theme }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [horizontalDate, setHorizontalDate] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState('option2')

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ]

  const containerStyle = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>🧩 All Components</h1>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', fontSize: '1.1rem' }}>
          Explore all available picker components with interactive examples
        </p>
      </div>

      <div className="demo-grid">
        <div className="demo-section">
          <h3>📅 DateTimePicker</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Combined date and time selection with wheel pickers for day, month, year, hour, and minute.
          </p>
          <div className="selected-value">
            Selected: {date ? date.toLocaleString() : 'No date selected'}
          </div>
          <DateTimePicker
            value={date || new Date()}
            onChange={setDate}
            theme={theme}
            showTime={true}
          />
          
          <div className="code-block">
            <pre>{`import { DateTimePicker } from 'crisli-picker';

<DateTimePicker
  value={date}
  onChange={setDate}
  theme="light"
  showTime={true}
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🕒 TimePicker</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time-only selection with support for both 12-hour and 24-hour formats.
          </p>
          <div className="selected-value">
            Selected: {time ? time.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={time || new Date()}
            onChange={setTime}
            theme={theme}
            use24Hours={true}
          />
          
          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={true}
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🎡 WheelPicker</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Generic wheel picker for selecting from any list of options.
          </p>
          <div className="selected-value">
            Selected: {options.find(o => o.value === selectedOption)?.label || selectedOption}
          </div>
          <WheelPicker
            items={options}
            value={selectedOption}
            onChange={setSelectedOption}
            label="Select an option"
            theme={theme}
          />
          
          <div className="code-block">
            <pre>{`import { WheelPicker } from 'crisli-picker';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  // ...
];

<WheelPicker
  items={options}
  value={selectedOption}
  onChange={setSelectedOption}
  label="Select an option"
  theme="light"
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>📆 CalendarTimePicker</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Calendar-based date selection combined with time picker wheels.
          </p>
          <div className="selected-value">
            Selected: {calendarDate ? calendarDate.toLocaleString() : 'No date selected'}
          </div>
          <CalendarTimePicker
            value={calendarDate || new Date()}
            onChange={setCalendarDate}
            theme={theme}
            showTime={true}
          />
          
          <div className="code-block">
            <pre>{`import { CalendarTimePicker } from 'crisli-picker';

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
/>`}</pre>
          </div>
        </div>
      </div>

      {/* Horizontal Calendar Time Picker - Full Width */}
      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>📅 HorizontalCalendarTimePicker</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          A horizontal layout variant with calendar and time picker positioned side by side for better space utilization.
        </p>
        <div className="selected-value">
          Selected: {horizontalDate ? horizontalDate.toLocaleString() : 'No date selected'}
        </div>
        <HorizontalCalendarTimePicker
          value={horizontalDate || new Date()}
          onChange={setHorizontalDate}
          theme={theme}
          showTime={true}
          use24Hour={true}
        />
        
        <div className="code-block">
          <pre>{`import { HorizontalCalendarTimePicker } from 'crisli-picker';

<HorizontalCalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hour={true}
/>`}</pre>
        </div>
      </div>

      {/* Component Features */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>✨ Component Features</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div className="demo-section">
            <h4>🎡 Smooth Scrolling</h4>
            <p>Mobile-like wheel scrolling with momentum and smooth animations</p>
          </div>
          
          <div className="demo-section">
            <h4>👆 Touch & Mouse</h4>
            <p>Full support for both touch gestures and mouse interactions</p>
          </div>
          
          <div className="demo-section">
            <h4>🌗 Theme Support</h4>
            <p>Built-in light and dark themes with customization options</p>
          </div>
          
          <div className="demo-section">
            <h4>📱 Responsive</h4>
            <p>Optimized for mobile devices and responsive design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentsPage
