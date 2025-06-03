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
  const [date12h, setDate12h] = useState(new Date())
  const [dateFuture, setDateFuture] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [time12h, setTime12h] = useState(new Date())
  const [timeFuture, setTimeFuture] = useState(new Date())
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [calendarDate12h, setCalendarDate12h] = useState(new Date())
  const [calendarDateFuture, setCalendarDateFuture] = useState(new Date())
  const [horizontalDate, setHorizontalDate] = useState(new Date())
  const [horizontalDate12h, setHorizontalDate12h] = useState(new Date())
  const [horizontalDateFuture, setHorizontalDateFuture] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState('option2')

  // Time step examples
  const [time15min, setTime15min] = useState(new Date())
  const [time30min, setTime30min] = useState(new Date())
  const [time5min, setTime5min] = useState(new Date())
  const [dateTime15min, setDateTime15min] = useState(new Date())
  const [calendarTime15min, setCalendarTime15min] = useState(new Date())
  const [horizontalTime15min, setHorizontalTime15min] = useState(new Date())

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
          <h3>📅 DateTimePicker (24-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Combined date and time selection with wheel pickers for day, month, year, hour, and minute in 24-hour format.
          </p>
          <div className="selected-value">
            Selected: {date ? date.toLocaleString() : 'No date selected'}
          </div>
          <DateTimePicker
            value={date || new Date()}
            onChange={setDate}
            theme={theme}
            showTime={true}
            use24Hours={true}
          />

          <div className="code-block">
            <pre>{`import { DateTimePicker } from 'crisli-picker';

<DateTimePicker
  value={date}
  onChange={setDate}
  theme="light"
  showTime={true}
  use24Hours={true}
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>📅 DateTimePicker (12-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Same component with 12-hour format including AM/PM selection wheel.
          </p>
          <div className="selected-value">
            Selected: {date12h ? date12h.toLocaleString() : 'No date selected'}
          </div>
          <DateTimePicker
            value={date12h || new Date()}
            onChange={setDate12h}
            theme={theme}
            showTime={true}
            use24Hours={false}
          />

          <div className="code-block">
            <pre>{`import { DateTimePicker } from 'crisli-picker';

<DateTimePicker
  value={date}
  onChange={setDate}
  theme="light"
  showTime={true}
  use24Hours={false}
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🕒 TimePicker (24-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time-only selection with 24-hour format (00:00 - 23:59).
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
          <h3>🕒 TimePicker (12-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time-only selection with 12-hour format including AM/PM wheel.
          </p>
          <div className="selected-value">
            Selected: {time12h ? time12h.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={time12h || new Date()}
            onChange={setTime12h}
            theme={theme}
            use24Hours={false}
          />

          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={false}
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
          <h3>🚫 DateTimePicker (Future Only)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Date and time picker with <code>disablePast=true</code> - prevents selection of past dates and times.
          </p>
          <div className="selected-value">
            Selected: {dateFuture ? dateFuture.toLocaleString() : 'No date selected'}
          </div>
          <DateTimePicker
            value={dateFuture || new Date()}
            onChange={setDateFuture}
            theme={theme}
            showTime={true}
            use24Hours={false}
            disablePast={true}
          />

          <div className="code-block">
            <pre>{`import { DateTimePicker } from 'crisli-picker';

<DateTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={false}
  disablePast={true}  // 🚫 Disable past dates/times
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🚫 TimePicker (Future Only)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time-only picker with <code>disablePast=true</code> - only future times can be selected (for today).
          </p>
          <div className="selected-value">
            Selected: {timeFuture ? timeFuture.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={timeFuture || new Date()}
            onChange={setTimeFuture}
            theme={theme}
            use24Hours={true}
            disablePast={true}
          />

          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={true}
  disablePast={true}  // 🚫 Disable past times
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>📆 CalendarTimePicker (24-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Calendar-based date selection combined with time picker wheels in 24-hour format.
          </p>
          <div className="selected-value">
            Selected: {calendarDate ? calendarDate.toLocaleString() : 'No date selected'}
          </div>
          <CalendarTimePicker
            value={calendarDate || new Date()}
            onChange={setCalendarDate}
            theme={theme}
            showTime={true}
            use24Hours={true}
          />

          <div className="code-block">
            <pre>{`import { CalendarTimePicker } from 'crisli-picker';

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={true}
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>📆 CalendarTimePicker (12-hour)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Same calendar component with 12-hour format including AM/PM selection.
          </p>
          <div className="selected-value">
            Selected: {calendarDate12h ? calendarDate12h.toLocaleString() : 'No date selected'}
          </div>
          <CalendarTimePicker
            value={calendarDate12h || new Date()}
            onChange={setCalendarDate12h}
            theme={theme}
            showTime={true}
            use24Hours={false}
          />

          <div className="code-block">
            <pre>{`import { CalendarTimePicker } from 'crisli-picker';

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={false}
/>`}</pre>
          </div>
        </div>
      </div>

      {/* Horizontal Calendar Time Picker - Full Width */}
      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>📅 HorizontalCalendarTimePicker (24-hour)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          A horizontal layout variant with calendar and time picker positioned side by side for better space utilization in 24-hour format.
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

      {/* Future-only Calendar Demo */}
      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>🚫 CalendarTimePicker (Future Only)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Calendar with <code>disablePast=true</code> - only future dates and times can be selected. Perfect for scheduling appointments or bookings.
        </p>
        <div className="selected-value">
          Selected: {calendarDateFuture ? calendarDateFuture.toLocaleString() : 'No date selected'}
        </div>
        <CalendarTimePicker
          value={calendarDateFuture || new Date()}
          onChange={setCalendarDateFuture}
          theme={theme}
          showTime={true}
          use24Hours={false}
          disablePast={true}
        />

        <div className="code-block">
          <pre>{`import { CalendarTimePicker } from 'crisli-picker';

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={false}
  disablePast={true}  // 🚫 Disable past dates/times
/>`}</pre>
        </div>
      </div>

      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>📅 HorizontalCalendarTimePicker (12-hour)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Same horizontal layout with 12-hour format including AM/PM selection.
        </p>
        <div className="selected-value">
          Selected: {horizontalDate12h ? horizontalDate12h.toLocaleString() : 'No date selected'}
        </div>
        <HorizontalCalendarTimePicker
          value={horizontalDate12h || new Date()}
          onChange={setHorizontalDate12h}
          theme={theme}
          showTime={true}
          use24Hour={false}
        />

        <div className="code-block">
          <pre>{`import { HorizontalCalendarTimePicker } from 'crisli-picker';

<HorizontalCalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hour={false}
/>`}</pre>
        </div>
      </div>

      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>🚫 HorizontalCalendarTimePicker (Future Only)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Horizontal layout with <code>disablePast=true</code> - ideal for booking systems and appointment scheduling.
        </p>
        <div className="selected-value">
          Selected: {horizontalDateFuture ? horizontalDateFuture.toLocaleString() : 'No date selected'}
        </div>
        <HorizontalCalendarTimePicker
          value={horizontalDateFuture || new Date()}
          onChange={setHorizontalDateFuture}
          theme={theme}
          showTime={true}
          use24Hour={true}
          disablePast={true}
        />

        <div className="code-block">
          <pre>{`import { HorizontalCalendarTimePicker } from 'crisli-picker';

<HorizontalCalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hour={true}
  disablePast={true}  // 🚫 Disable past dates/times
/>`}</pre>
        </div>
      </div>

      {/* Time Step Feature Section */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          ⏰ Time Step Intervals
        </h2>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Configure time intervals for more efficient time selection - perfect for appointment booking and scheduling systems
        </p>
      </div>

      <div className="demo-grid">
        <div className="demo-section">
          <h3>🕒 TimePicker (15-minute steps)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time picker with 15-minute intervals: 00:00, 00:15, 00:30, 00:45, etc.
          </p>
          <div className="selected-value">
            Selected: {time15min ? time15min.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={time15min || new Date()}
            onChange={setTime15min}
            theme={theme}
            use24Hours={true}
            minuteStep={15}
          />

          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={true}
  minuteStep={15}  // ⏰ 15-minute intervals
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🕒 TimePicker (30-minute steps)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Time picker with 30-minute intervals: 00:00, 00:30, 01:00, 01:30, etc.
          </p>
          <div className="selected-value">
            Selected: {time30min ? time30min.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={time30min || new Date()}
            onChange={setTime30min}
            theme={theme}
            use24Hours={false}
            minuteStep={30}
          />

          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={false}
  minuteStep={30}  // ⏰ 30-minute intervals
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>🕒 TimePicker (5-minute + 2-hour steps)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Custom intervals: 5-minute steps with 2-hour steps (00:00, 00:05, 00:10... but only 00:xx, 02:xx, 04:xx hours).
          </p>
          <div className="selected-value">
            Selected: {time5min ? time5min.toLocaleTimeString() : 'No time selected'}
          </div>
          <TimePicker
            value={time5min || new Date()}
            onChange={setTime5min}
            theme={theme}
            use24Hours={true}
            minuteStep={5}
            hourStep={2}
          />

          <div className="code-block">
            <pre>{`import { TimePicker } from 'crisli-picker';

<TimePicker
  value={time}
  onChange={setTime}
  theme="light"
  use24Hours={true}
  minuteStep={5}   // ⏰ 5-minute intervals
  hourStep={2}     // ⏰ 2-hour intervals
/>`}</pre>
          </div>
        </div>

        <div className="demo-section">
          <h3>📅 DateTimePicker (15-minute steps)</h3>
          <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
            Full date and time picker with 15-minute time intervals.
          </p>
          <div className="selected-value">
            Selected: {dateTime15min ? dateTime15min.toLocaleString() : 'No date selected'}
          </div>
          <DateTimePicker
            value={dateTime15min || new Date()}
            onChange={setDateTime15min}
            theme={theme}
            showTime={true}
            use24Hours={false}
            minuteStep={15}
          />

          <div className="code-block">
            <pre>{`import { DateTimePicker } from 'crisli-picker';

<DateTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={false}
  minuteStep={15}  // ⏰ 15-minute intervals
/>`}</pre>
          </div>
        </div>
      </div>

      {/* Full width calendar examples with time steps */}
      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>📆 CalendarTimePicker (15-minute steps)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Calendar-based picker with 15-minute time intervals - ideal for appointment booking systems.
        </p>
        <div className="selected-value">
          Selected: {calendarTime15min ? calendarTime15min.toLocaleString() : 'No date selected'}
        </div>
        <CalendarTimePicker
          value={calendarTime15min || new Date()}
          onChange={setCalendarTime15min}
          theme={theme}
          showTime={true}
          use24Hours={true}
          minuteStep={15}
          disablePast={true}
        />

        <div className="code-block">
          <pre>{`import { CalendarTimePicker } from 'crisli-picker';

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hours={true}
  minuteStep={15}    // ⏰ 15-minute intervals
  disablePast={true} // 🚫 Perfect for bookings
/>`}</pre>
        </div>
      </div>

      <div className="demo-section" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto 0' }}>
        <h3>📅 HorizontalCalendarTimePicker (15-minute steps)</h3>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Horizontal layout with 15-minute time intervals - perfect for scheduling interfaces.
        </p>
        <div className="selected-value">
          Selected: {horizontalTime15min ? horizontalTime15min.toLocaleString() : 'No date selected'}
        </div>
        <HorizontalCalendarTimePicker
          value={horizontalTime15min || new Date()}
          onChange={setHorizontalTime15min}
          theme={theme}
          showTime={true}
          use24Hour={false}
          minuteStep={15}
          disablePast={true}
        />

        <div className="code-block">
          <pre>{`import { HorizontalCalendarTimePicker } from 'crisli-picker';

<HorizontalCalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  theme="light"
  showTime={true}
  use24Hour={false}
  minuteStep={15}    // ⏰ 15-minute intervals
  disablePast={true} // 🚫 Perfect for bookings
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

          <div className="demo-section">
            <h4>🚫 Disable Past</h4>
            <p>Prevent selection of past dates/times - perfect for booking systems</p>
          </div>

          <div className="demo-section">
            <h4>🕐 12/24 Hour</h4>
            <p>Support for both 12-hour (AM/PM) and 24-hour time formats</p>
          </div>

          <div className="demo-section">
            <h4>⏰ Time Steps</h4>
            <p>Configurable time intervals (5, 15, 30 minutes) for efficient time selection</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentsPage
