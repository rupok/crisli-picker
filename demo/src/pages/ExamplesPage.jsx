import React, { useState } from 'react'
import { DateTimePicker, TimePicker, WheelPicker } from 'crisli-picker'

const ExamplesPage = ({ theme }) => {
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  const [reminderTime, setReminderTime] = useState(new Date())
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('work')

  const priorityOptions = [
    { value: 'low', label: '🟢 Low Priority' },
    { value: 'medium', label: '🟡 Medium Priority' },
    { value: 'high', label: '🔴 High Priority' },
    { value: 'urgent', label: '🚨 Urgent' },
  ]

  const categoryOptions = [
    { value: 'work', label: '💼 Work' },
    { value: 'personal', label: '👤 Personal' },
    { value: 'health', label: '🏥 Health' },
    { value: 'education', label: '📚 Education' },
    { value: 'travel', label: '✈️ Travel' },
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

  const formStyle = {
    background: theme === 'light' ? '#ffffff' : '#2a2a2a',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${theme === 'light' ? '#e0e0e0' : '#404040'}`,
    marginBottom: '2rem',
  }

  const summaryStyle = {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '2rem',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>📋 Real-World Examples</h1>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', fontSize: '1.1rem' }}>
          See how Crisli Picker components work in practical applications
        </p>
      </div>

      {/* Appointment Booking Example */}
      <div style={formStyle}>
        <h2 style={{ marginTop: 0, color: theme === 'light' ? '#333' : '#fff' }}>
          📅 Appointment Booking Form
        </h2>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '2rem' }}>
          A complete appointment booking interface using multiple picker components
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              fontWeight: '600',
              color: theme === 'light' ? '#333' : '#fff'
            }}>
              📅 Appointment Date & Time
            </label>
            <DateTimePicker
              value={appointmentDate}
              onChange={setAppointmentDate}
              theme={theme}
              showTime={true}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              fontWeight: '600',
              color: theme === 'light' ? '#333' : '#fff'
            }}>
              🔔 Reminder Time
            </label>
            <TimePicker
              value={reminderTime}
              onChange={setReminderTime}
              theme={theme}
              use24Hours={false}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              fontWeight: '600',
              color: theme === 'light' ? '#333' : '#fff'
            }}>
              ⚡ Priority Level
            </label>
            <WheelPicker
              items={priorityOptions}
              value={priority}
              onChange={setPriority}
              theme={theme}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              fontWeight: '600',
              color: theme === 'light' ? '#333' : '#fff'
            }}>
              📂 Category
            </label>
            <WheelPicker
              items={categoryOptions}
              value={category}
              onChange={setCategory}
              theme={theme}
            />
          </div>
        </div>

        <div style={summaryStyle}>
          <h3 style={{ marginTop: 0 }}>📋 Appointment Summary</h3>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p><strong>Date & Time:</strong> {appointmentDate.toLocaleString()}</p>
            <p><strong>Reminder:</strong> {reminderTime.toLocaleTimeString()}</p>
            <p><strong>Priority:</strong> {priorityOptions.find(p => p.value === priority)?.label}</p>
            <p><strong>Category:</strong> {categoryOptions.find(c => c.value === category)?.label}</p>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="demo-section">
        <h2>💻 Implementation Code</h2>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Here's how to implement the appointment booking form:
        </p>
        
        <div className="code-block">
          <pre>{`import React, { useState } from 'react';
import { DateTimePicker, TimePicker, WheelPicker } from 'crisli-picker';

const AppointmentForm = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [reminderTime, setReminderTime] = useState(new Date());
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('work');

  const priorityOptions = [
    { value: 'low', label: '🟢 Low Priority' },
    { value: 'medium', label: '🟡 Medium Priority' },
    { value: 'high', label: '🔴 High Priority' },
    { value: 'urgent', label: '🚨 Urgent' },
  ];

  const categoryOptions = [
    { value: 'work', label: '💼 Work' },
    { value: 'personal', label: '👤 Personal' },
    { value: 'health', label: '🏥 Health' },
    // ... more options
  ];

  return (
    <form>
      <DateTimePicker
        value={appointmentDate}
        onChange={setAppointmentDate}
        theme="light"
        showTime={true}
      />
      
      <TimePicker
        value={reminderTime}
        onChange={setReminderTime}
        theme="light"
        use24Hours={false}
      />
      
      <WheelPicker
        items={priorityOptions}
        value={priority}
        onChange={setPriority}
        theme="light"
      />
      
      <WheelPicker
        items={categoryOptions}
        value={category}
        onChange={setCategory}
        theme="light"
      />
    </form>
  );
};`}</pre>
        </div>
      </div>

      {/* Use Cases */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
          🎯 Common Use Cases
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div className="demo-section">
            <h4>📅 Event Scheduling</h4>
            <p>Meeting bookings, event planning, calendar applications</p>
          </div>
          
          <div className="demo-section">
            <h4>⏰ Reminder Systems</h4>
            <p>Alarm clocks, notification scheduling, task reminders</p>
          </div>
          
          <div className="demo-section">
            <h4>🏥 Healthcare Apps</h4>
            <p>Appointment booking, medication schedules, health tracking</p>
          </div>
          
          <div className="demo-section">
            <h4>✈️ Travel Booking</h4>
            <p>Flight selection, hotel check-in/out, itinerary planning</p>
          </div>
          
          <div className="demo-section">
            <h4>📊 Data Entry Forms</h4>
            <p>Survey forms, registration, configuration interfaces</p>
          </div>
          
          <div className="demo-section">
            <h4>🎮 Game Settings</h4>
            <p>Game configuration, character creation, settings panels</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamplesPage
