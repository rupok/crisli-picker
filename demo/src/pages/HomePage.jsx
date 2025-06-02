import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  DateTimePicker, 
  TimePicker, 
  WheelPicker, 
  CalendarTimePicker, 
  HorizontalCalendarTimePicker 
} from 'crisli-picker'

const HomePage = ({ theme }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState('option2')
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [horizontalDate, setHorizontalDate] = useState(new Date())

  const options = [
    { value: 'option1', label: 'React' },
    { value: 'option2', label: 'Vue.js' },
    { value: 'option3', label: 'Angular' },
    { value: 'option4', label: 'Svelte' },
    { value: 'option5', label: 'Next.js' },
  ]

  const heroStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: theme === 'light' 
      ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      : 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
  }

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
  }

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: theme === 'light' ? '#666' : '#bbb',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  }

  const buttonStyle = {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '600',
    transition: 'transform 0.2s',
    margin: '0 0.5rem',
  }

  const featuresStyle = {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  }

  const featureGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  }

  const featureCardStyle = {
    padding: '2rem',
    borderRadius: '12px',
    background: theme === 'light' ? '#ffffff' : '#2a2a2a',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${theme === 'light' ? '#e0e0e0' : '#404040'}`,
    textAlign: 'center',
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={titleStyle}>🎡 Crisli Picker</h1>
        <p style={subtitleStyle}>
          A modern, customizable date and time picker library for React applications, 
          inspired by mobile date/time pickers with smooth wheel-based interactions.
        </p>
        <div>
          <Link 
            to="/components" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View Components
          </Link>
          <a 
            href="https://www.npmjs.com/package/crisli-picker" 
            target="_blank" 
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            NPM Package
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresStyle}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
          ✨ Features
        </h2>
        <p style={{ textAlign: 'center', color: theme === 'light' ? '#666' : '#bbb', fontSize: '1.1rem' }}>
          Everything you need for modern date and time selection
        </p>
        
        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎡</div>
            <h3>Smooth Wheel Pickers</h3>
            <p>Mobile-like scrolling with momentum and smooth animations</p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
            <h3>Mobile First</h3>
            <p>Responsive design optimized for touch and mobile devices</p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌗</div>
            <h3>Theme Support</h3>
            <p>Built-in light and dark themes with customization options</p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h3>TypeScript Ready</h3>
            <p>Full TypeScript support with comprehensive type definitions</p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧩</div>
            <h3>Multiple Components</h3>
            <p>Date, time, calendar, and custom wheel picker components</p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
            <h3>Customizable</h3>
            <p>Extensive customization options for colors, fonts, and behavior</p>
          </div>
        </div>
      </section>

      {/* Quick Demo Section */}
      <section style={{ padding: '4rem 2rem', background: theme === 'light' ? '#f8f9fa' : '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            🚀 Quick Demo
          </h2>
          
          <div className="demo-grid">
            <div className="demo-section">
              <h3>📅 Date & Time Picker</h3>
              <div className="selected-value">
                Selected: {date ? date.toLocaleString() : 'No date selected'}
              </div>
              <DateTimePicker
                value={date || new Date()}
                onChange={setDate}
                theme={theme}
              />
            </div>

            <div className="demo-section">
              <h3>🕒 Time Picker</h3>
              <div className="selected-value">
                Selected: {time ? time.toLocaleTimeString() : 'No time selected'}
              </div>
              <TimePicker
                value={time || new Date()}
                onChange={setTime}
                theme={theme}
              />
            </div>

            <div className="demo-section">
              <h3>🎡 Wheel Picker</h3>
              <div className="selected-value">
                Selected: {options.find(o => o.value === selectedOption)?.label || selectedOption}
              </div>
              <WheelPicker
                items={options}
                value={selectedOption}
                onChange={setSelectedOption}
                label="Choose your favorite framework"
                theme={theme}
              />
            </div>

            <div className="demo-section" style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
              <h3>📅 Horizontal Calendar Time Picker</h3>
              <div className="selected-value">
                Selected: {horizontalDate ? horizontalDate.toLocaleString() : 'No date selected'}
              </div>
              <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
                A horizontal layout variant with calendar and time picker side by side.
              </p>
              <HorizontalCalendarTimePicker
                value={horizontalDate || new Date()}
                onChange={setHorizontalDate}
                theme={theme}
                showTime={true}
                use24Hour={true}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link 
              to="/components" 
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Explore All Components →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
