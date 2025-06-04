import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  DateTimePicker,
  TimePicker,
  WheelPicker,
  CalendarTimePicker,
  HorizontalCalendarTimePicker
} from 'crisli-picker'
import CrisliIcon from '../components/CrisliIcon'
import ReadyToBuildSection from '../components/ReadyToBuildSection'
import Footer from '../components/Footer'

const HomePage = ({ theme }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState('option2')
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [horizontalDate, setHorizontalDate] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const options = [
    { value: 'option1', label: 'React' },
    { value: 'option2', label: 'Vue.js' },
    { value: 'option3', label: 'Angular' },
    { value: 'option4', label: 'Svelte' },
    { value: 'option5', label: 'Next.js' },
  ]

  const heroStyle = {
    textAlign: 'center',
    padding: '4rem 1rem 3rem', // Reduced padding for mobile
    background: theme === 'light'
      ? 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)'
      : 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80vh', // Reduced for mobile
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', // Responsive font size
    fontWeight: '800',
    color: theme === 'light' ? '#1F2937' : '#F9FAFB',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  }

  const highlightStyle = {
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    display: 'inline-block',
  }

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)', // Responsive font size
    color: theme === 'light' ? '#6B7280' : '#9CA3AF',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
    fontWeight: '400',
    padding: '0 1rem', // Add padding for mobile
  }

  const buttonStyle = {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '0.875rem 1.5rem', // Slightly smaller for mobile
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', // Responsive font size
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '600',
    transition: 'transform 0.2s',
    margin: '0 0.25rem 0.5rem', // Better mobile spacing
  }

  const featuresStyle = {
    padding: 'clamp(2rem, 8vw, 4rem) 1rem', // Responsive padding
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
      {/* Modern Hero Section */}
      <section className={`py-20 lg:py-32 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden ${
        theme === 'light'
          ? 'bg-gradient-to-br from-slate-50 to-slate-200'
          : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}>
        <div className={`${isVisible ? 'animate-fade-in-up' : ''} z-10 max-w-6xl w-full`}>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Build your schedules{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              smoothly
            </span>{' '}
            with Crisli Picker.
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed px-4 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Design and develop your scheduling interface in the era of modern React components.
            Bring your ideas to life with smooth interactions—simply think, see, and create!
          </p>

          {/* Three-card layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 mb-8 px-2">
            {/* Card 1: NPM Installation */}
            <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-blue-50 to-sky-100 border-blue-300 hover:border-blue-400'
                : 'bg-gradient-to-br from-blue-900/50 to-sky-900/50 border-blue-600 hover:border-blue-500'
            }`}>
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center ${
                theme === 'light' ? 'text-blue-900' : 'text-blue-100'
              }`}>
                Quick Installation
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-4 text-center ${
                theme === 'light' ? 'text-blue-700' : 'text-blue-200'
              }`}>
                Get started with Crisli Picker in seconds. Just one command and you're ready to build.
              </p>
              <div className={`rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm break-all ${
                theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
              }`}>
                npm install crisli-picker
              </div>
            </div>

            {/* Card 2: Interactive Demo */}
            <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center text-white transform transition-all duration-300 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-500 to-violet-600 border-purple-400 hover:border-purple-300'
                : 'bg-gradient-to-br from-purple-600 to-violet-700 border-purple-500 hover:border-purple-400'
            }`}>
              <div className="mb-4 flex justify-center opacity-90">
                <CrisliIcon size={64} animated={true} color="white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                Smooth Wheel Interface
              </h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                Experience intuitive wheel-based date and time selection inspired by mobile interfaces. Smooth scrolling, beautiful animations, and precise control.
              </p>
            </div>

            {/* Card 3: Sample Code */}
            <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-800 border-gray-600 hover:border-gray-500'
                : 'bg-gray-700 border-gray-600 hover:border-gray-500'
            }`}>
              <div className="flex items-center justify-center gap-2 text-green-400 text-base sm:text-lg font-semibold mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                </svg>
                Simple Integration
              </div>
              <div className="text-gray-100 font-mono text-xs sm:text-sm leading-relaxed text-left overflow-x-auto">
                <div className="text-purple-300">function</div>
                <div>
                  <span className="text-amber-400"> App</span>
                  <span className="text-gray-100">() {'{'}</span>
                </div>
                <div className="ml-4 mt-2">
                  <span className="text-purple-300">const</span>
                  <span className="text-gray-100"> [date, setDate] = </span>
                </div>
                <div className="ml-8">
                  <span className="text-amber-400">useState</span>
                  <span className="text-gray-100">(</span>
                  <span className="text-purple-300">new</span>
                  <span className="text-amber-400"> Date</span>
                  <span className="text-gray-100">());</span>
                </div>
                <div className="mt-2 ml-4">
                  <span className="text-purple-300">return</span>
                  <span className="text-gray-100"> (</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-100">&lt;</span>
                  <span className="text-green-400">DateTimePicker</span>
                </div>
                <div className="ml-12">
                  <span className="text-amber-400">value</span>
                  <span className="text-gray-100">={`{date}`}</span>
                </div>
                <div className="ml-12">
                  <span className="text-amber-400">onChange</span>
                  <span className="text-gray-100">={`{setDate}`}</span>
                </div>
                <div className="ml-12">
                  <span className="text-amber-400">theme</span>
                  <span className="text-gray-100">="</span>
                  <span className="text-purple-300">light</span>
                  <span className="text-gray-100">"</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-100">/&gt;</span>
                </div>
                <div className="ml-4">
                  <span className="text-gray-100">);</span>
                </div>
                <div className="text-gray-100">{'}'}</div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            Stunning Features
          </h2>
          <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Everything you need for modern, beautiful date and time selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 12-Hour Format Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-blue-50 to-sky-100 border-blue-300 hover:border-blue-400'
              : 'bg-gradient-to-br from-blue-900/50 to-sky-900/50 border-blue-600 hover:border-blue-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-blue-900' : 'text-blue-100'
            }`}>
              12-Hour Format Support
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-200'
            }`}>
              Complete AM/PM support with intuitive wheel selection. Perfect for user-friendly time picking.
            </p>
            <div className={`rounded-lg p-3 font-mono text-xs sm:text-sm ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              use24Hours={`{false}`}
            </div>
          </div>

          {/* Time Step Intervals Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300 hover:border-green-400'
              : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600 hover:border-green-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-green-900' : 'text-green-100'
            }`}>
              Time Step Intervals
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-green-700' : 'text-green-200'
            }`}>
              Configure 5, 15, 30-minute intervals for appointment booking and scheduling systems.
            </p>
            <div className={`rounded-lg p-3 font-mono text-xs sm:text-sm ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              minuteStep={`{15}`}
            </div>
          </div>

          {/* Disable Past Dates Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-red-50 to-rose-100 border-red-300 hover:border-red-400'
              : 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-600 hover:border-red-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-red-900' : 'text-red-100'
            }`}>
              Disable Past Dates
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-red-700' : 'text-red-200'
            }`}>
              Perfect for booking systems. Automatically prevents selection of past dates and times.
            </p>
            <div className={`rounded-lg p-3 font-mono text-xs sm:text-sm ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              disablePast={`{true}`}
            </div>
          </div>

          {/* TypeScript Support Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-gray-50 to-slate-100 border-gray-300 hover:border-gray-400'
              : 'bg-gradient-to-br from-gray-800/50 to-slate-800/50 border-gray-600 hover:border-gray-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-gray-900' : 'text-gray-100'
            }`}>
              TypeScript Ready
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-200'
            }`}>
              Full TypeScript support with comprehensive type definitions. Works with both JSX and TSX.
            </p>
            <div className={`rounded-lg p-3 font-mono text-xs sm:text-sm ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <span className="text-blue-400">Date</span> | <span className="text-green-400">undefined</span>
            </div>
          </div>

          {/* Mobile Optimized Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300 hover:border-amber-400'
              : 'bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-amber-600 hover:border-amber-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm2 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-amber-900' : 'text-amber-100'
            }`}>
              Mobile Optimized
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-amber-700' : 'text-amber-200'
            }`}>
              Touch-friendly with momentum scrolling. Responsive design for mobile, tablet, and desktop.
            </p>
            <div className="flex justify-center gap-2 text-2xl">
              <div>📱</div>
              <div>💻</div>
              <div>🖥️</div>
            </div>
          </div>

          {/* Multiple Components Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-300 hover:border-purple-400'
              : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600 hover:border-purple-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-purple-900' : 'text-purple-100'
            }`}>
              5 Components
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-200'
            }`}>
              DateTimePicker, TimePicker, CalendarTimePicker, HorizontalCalendarTimePicker, WheelPicker.
            </p>
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
          </div>

          {/* Smooth Wheel Scrolling Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-300 hover:border-emerald-400'
              : 'bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-emerald-600 hover:border-emerald-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <CrisliIcon size={56} animated={true} color={theme === 'light' ? '#059669' : '#34D399'} />
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-emerald-900' : 'text-emerald-100'
            }`}>
              Smooth Wheel Scrolling
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-emerald-700' : 'text-emerald-200'
            }`}>
              Mobile-like momentum scrolling with buttery smooth animations. Native feel on all devices.
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-1 h-5 bg-emerald-500 rounded-sm animate-bounce"></div>
              <div className="w-1 h-5 bg-emerald-500 rounded-sm animate-bounce delay-200"></div>
              <div className="w-1 h-5 bg-emerald-500 rounded-sm animate-bounce delay-400"></div>
            </div>
          </div>

          {/* Theme Support Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-violet-50 to-purple-100 border-violet-300 hover:border-violet-400'
              : 'bg-gradient-to-br from-violet-900/50 to-purple-900/50 border-violet-600 hover:border-violet-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-violet-900' : 'text-violet-100'
            }`}>
              Light & Dark Themes
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-violet-700' : 'text-violet-200'
            }`}>
              Built-in theme support with customizable colors, fonts, and styling options.
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-gray-400"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600"></div>
            </div>
          </div>

          {/* Accessibility & Keyboard Navigation Card */}
          <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden text-center transform transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-fuchsia-50 to-pink-100 border-fuchsia-300 hover:border-fuchsia-400'
              : 'bg-gradient-to-br from-fuchsia-900/50 to-pink-900/50 border-fuchsia-600 hover:border-fuchsia-500'
          }`}>
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-fuchsia-900' : 'text-fuchsia-100'
            }`}>
              Accessibility Ready
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
              theme === 'light' ? 'text-fuchsia-700' : 'text-fuchsia-200'
            }`}>
              Full keyboard navigation, screen reader support, and ARIA labels. WCAG compliant for enterprise use.
            </p>
            <div className="flex justify-center gap-2">
              <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-fuchsia-600' : 'bg-fuchsia-500'
              }`}>
                TAB
              </div>
              <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-fuchsia-600' : 'bg-fuchsia-500'
              }`}>
                ↑↓
              </div>
              <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-fuchsia-600' : 'bg-fuchsia-500'
              }`}>
                ENTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative ${
        theme === 'light'
          ? 'bg-gradient-to-br from-slate-50 to-gray-100'
          : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
              Interactive Demo
            </h2>
            <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Experience the components in action with live interactions
            </p>
          </div>
          
          <div className="space-y-12 lg:space-y-16">
            {/* Row 1: Two Column Layout - DateTimePicker & TimePicker */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* DateTimePicker Card */}
              <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-sky-50 to-blue-100 border-sky-400'
                  : 'bg-gradient-to-br from-sky-900/50 to-blue-900/50 border-sky-600'
              }`}>
                {/* Header with icon and badge */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h3 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                    theme === 'light' ? 'text-sky-900' : 'text-sky-100'
                  }`}>
                    <CrisliIcon size={28} animated={true} color={theme === 'light' ? '#0EA5E9' : '#38BDF8'} />
                    DateTimePicker
                  </h3>
                  <div className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${
                    theme === 'light' ? 'bg-sky-500' : 'bg-sky-600'
                  }`}>
                    POPULAR
                  </div>
                </div>

                <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                  theme === 'light' ? 'text-sky-700' : 'text-sky-200'
                }`}>
                  Complete date and time selection with smooth wheel scrolling. Perfect for appointments and scheduling.
                </p>

                <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white ${
                  theme === 'light' ? 'bg-sky-500' : 'bg-sky-600'
                }`}>
                  📅 {date ? date.toLocaleString() : 'No date selected'}
                </div>

                <div className="mb-6 picker-container">
                  <DateTimePicker
                    value={date || new Date()}
                    onChange={setDate}
                    theme={theme}
                    use24Hours={false}
                  />
                </div>

                {/* Feature highlights */}
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-sky-900/50 text-sky-200'
                  }`}>
                    12-hour format
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-sky-900/50 text-sky-200'
                  }`}>
                    Smooth scrolling
                  </span>
                </div>
              </div>

              {/* TimePicker Card */}
              <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400'
                  : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600'
              }`}>
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h3 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                    theme === 'light' ? 'text-green-900' : 'text-green-100'
                  }`}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    TimePicker
                  </h3>
                  <div className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${
                    theme === 'light' ? 'bg-green-500' : 'bg-green-600'
                  }`}>
                    15-MIN STEPS
                  </div>
                </div>

                <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                  theme === 'light' ? 'text-green-700' : 'text-green-200'
                }`}>
                  Time-only selection with configurable intervals. Great for booking systems with specific time slots.
                </p>

                <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                  theme === 'light' ? 'bg-green-500' : 'bg-green-600'
                }`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  {time ? time.toLocaleTimeString() : 'No time selected'}
                </div>

                <div className="mb-6 picker-container">
                  <TimePicker
                    value={time || new Date()}
                    onChange={setTime}
                    theme={theme}
                    use24Hours={false}
                    minuteStep={15}
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-green-900/50 text-green-200'
                  }`}>
                    15-min intervals
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-green-900/50 text-green-200'
                  }`}>
                    AM/PM support
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2: Single Column - Horizontal Calendar Time Picker */}
            <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden ${
              theme === 'light'
                ? 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-400'
                : 'bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-amber-600'
            }`}>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h3 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                  theme === 'light' ? 'text-amber-900' : 'text-amber-100'
                }`}>
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  HorizontalCalendarTimePicker
                </h3>
                <div className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${
                  theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
                }`}>
                  WIDE LAYOUT
                </div>
              </div>

              <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                theme === 'light' ? 'text-amber-700' : 'text-amber-200'
              }`}>
                Horizontal layout perfect for booking interfaces and dashboards. Calendar and time picker side by side for efficient space usage.
              </p>

              <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                {horizontalDate ? horizontalDate.toLocaleString() : 'No date selected'}
              </div>

              <div className="mb-6 picker-container">
                <HorizontalCalendarTimePicker
                  value={horizontalDate || new Date()}
                  onChange={setHorizontalDate}
                  theme={theme}
                  showTime={true}
                  use24Hour={false}
                  disablePast={true}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  theme === 'light'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-amber-900/50 text-amber-200'
                }`}>
                  Horizontal layout
                </span>
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  theme === 'light'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-amber-900/50 text-amber-200'
                }`}>
                  Disable past dates
                </span>
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  theme === 'light'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-amber-900/50 text-amber-200'
                }`}>
                  Perfect for booking
                </span>
              </div>
            </div>

            {/* Row 3: Two Column Layout - WheelPicker & CalendarTimePicker */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* WheelPicker Card */}
              <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-400'
                  : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600'
              }`}>
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h3 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                    theme === 'light' ? 'text-purple-900' : 'text-purple-100'
                  }`}>
                    <CrisliIcon size={28} animated={true} color={theme === 'light' ? '#7C3AED' : '#A78BFA'} />
                    WheelPicker
                  </h3>
                  <div className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${
                    theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
                  }`}>
                    CUSTOM
                  </div>
                </div>

                <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                  theme === 'light' ? 'text-purple-700' : 'text-purple-200'
                }`}>
                  Generic wheel picker for any custom options. Perfect for dropdowns, selectors, and custom choice lists.
                </p>

                <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                  theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
                }`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  {options.find(o => o.value === selectedOption)?.label || selectedOption}
                </div>

                <div className="mb-6 picker-container">
                  <WheelPicker
                    items={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    label="Choose your favorite framework"
                    theme={theme}
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-purple-900/50 text-purple-200'
                  }`}>
                    Custom options
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-purple-900/50 text-purple-200'
                  }`}>
                    Flexible data
                  </span>
                </div>
              </div>

              {/* CalendarTimePicker Card */}
              <div className={`p-6 lg:p-8 rounded-2xl border-2 relative overflow-hidden ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-red-50 to-rose-100 border-red-400'
                  : 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-600'
              }`}>
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h3 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                    theme === 'light' ? 'text-red-900' : 'text-red-100'
                  }`}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    CalendarTimePicker
                  </h3>
                  <div className={`px-3 py-1 rounded-xl text-xs font-semibold text-white ${
                    theme === 'light' ? 'bg-red-500' : 'bg-red-600'
                  }`}>
                    CLASSIC
                  </div>
                </div>

                <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                  theme === 'light' ? 'text-red-700' : 'text-red-200'
                }`}>
                  Traditional calendar view with integrated time picker. Familiar interface for users who prefer calendar grids.
                </p>

                <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                  theme === 'light' ? 'bg-red-500' : 'bg-red-600'
                }`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  {calendarDate ? calendarDate.toLocaleString() : 'No date selected'}
                </div>

                <div className="mb-6 picker-container">
                  <CalendarTimePicker
                    value={calendarDate || new Date()}
                    onChange={setCalendarDate}
                    theme={theme}
                    showTime={true}
                    use24Hours={false}
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-red-900/50 text-red-200'
                  }`}>
                    Calendar grid
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    theme === 'light'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-red-900/50 text-red-200'
                  }`}>
                    Familiar UI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/components"
              className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                  : 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white hover:from-indigo-500 hover:to-purple-600'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Explore All Components →
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Build Section */}
      <ReadyToBuildSection theme={theme} />

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  )
}

export default HomePage
