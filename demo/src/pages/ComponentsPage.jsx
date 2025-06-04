import React, { useState } from 'react'
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

const ComponentsPage = ({ theme }) => {
  // Core component states
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
  const [selectedOption, setSelectedOption] = useState('react')

  // Time step examples
  const [time15min, setTime15min] = useState(new Date())
  const [time30min, setTime30min] = useState(new Date())
  const [time5min, setTime5min] = useState(new Date())
  const [dateTime15min, setDateTime15min] = useState(new Date())
  const [calendarTime15min, setCalendarTime15min] = useState(new Date())
  const [horizontalTime15min, setHorizontalTime15min] = useState(new Date())

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ]

  return (
    <>
      <div className={`min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto ${
        theme === 'light'
          ? 'bg-gradient-to-br from-slate-50 to-slate-200'
          : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}>
        {/* Header Section */}
        <div className="text-center mb-16 py-12">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <CrisliIcon size={48} animated={true} color={theme === 'light' ? '#667eea' : '#8B5CF6'} />
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent tracking-tight ${
              theme === 'light' ? '' : ''
            }`}>
              All Components
            </h1>
          </div>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Explore every picker component with live examples, code snippets, and configuration options
          </p>

          {/* Component count badges */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap px-4">
            <div className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${
              theme === 'light'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-blue-900/50 text-blue-300 border-blue-600'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              5 Components
            </div>
            <div className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${
              theme === 'light'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-green-900/50 text-green-300 border-green-600'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              Time Steps
            </div>
            <div className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${
              theme === 'light'
                ? 'bg-red-50 text-red-700 border-red-200'
                : 'bg-red-900/50 text-red-300 border-red-600'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
              </svg>
              Disable Past
            </div>
            <div className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${
              theme === 'light'
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-purple-900/50 text-purple-300 border-purple-600'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              Themes
            </div>
          </div>
        </div>

        {/* DateTimePicker Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              DateTimePicker
            </h2>
            <p className={`text-lg sm:text-xl max-w-lg mx-auto px-4 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Complete date and time selection with smooth wheel scrolling
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* DateTimePicker 24-hour */}
            <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
              theme === 'light'
                ? 'bg-gradient-to-br from-sky-50 to-blue-100 border-sky-400'
                : 'bg-gradient-to-br from-sky-900/50 to-blue-900/50 border-sky-600'
            }`}>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  theme === 'light' ? 'text-sky-900' : 'text-sky-100'
                }`}>
                  24-Hour Format
                </h3>
                <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                  theme === 'light' ? 'bg-sky-500' : 'bg-sky-600'
                }`}>
                  MILITARY TIME
                </div>
              </div>

              <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                theme === 'light' ? 'text-sky-700' : 'text-sky-200'
              }`}>
                Professional 24-hour format (00:00 - 23:59) perfect for business applications and international use.
              </p>

              <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                theme === 'light' ? 'bg-sky-500' : 'bg-sky-600'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                {date ? date.toLocaleString() : 'No date selected'}
              </div>

              <div className="mb-6 picker-container">
                <DateTimePicker
                  value={date || new Date()}
                  onChange={setDate}
                  theme={theme}
                  showTime={true}
                  use24Hours={true}
                />
              </div>

              <div className={`rounded-xl p-4 font-mono text-xs overflow-auto ${
                theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
              }`}>
                <div className="text-green-400 mb-2">// 24-hour format</div>
                <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{true}`}</span></div>
              </div>
            </div>

            {/* DateTimePicker 12-hour */}
            <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
              theme === 'light'
                ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400'
                : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600'
            }`}>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  theme === 'light' ? 'text-green-900' : 'text-green-100'
                }`}>
                  12-Hour Format
                </h3>
                <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                  theme === 'light' ? 'bg-green-500' : 'bg-green-600'
                }`}>
                  AM/PM
                </div>
              </div>

              <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
                theme === 'light' ? 'text-green-700' : 'text-green-200'
              }`}>
                User-friendly 12-hour format with AM/PM selection. Perfect for consumer applications and everyday use.
              </p>

              <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
                theme === 'light' ? 'bg-green-500' : 'bg-green-600'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                {date12h ? date12h.toLocaleString() : 'No date selected'}
              </div>

              <div className="mb-6 picker-container">
                <DateTimePicker
                  value={date12h || new Date()}
                  onChange={setDate12h}
                  theme={theme}
                  showTime={true}
                  use24Hours={false}
                />
              </div>

              <div className={`rounded-xl p-4 font-mono text-xs overflow-auto ${
                theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
              }`}>
                <div className="text-green-400 mb-2">// 12-hour format with AM/PM</div>
                <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{false}`}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* TimePicker Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              TimePicker
            </h2>
            <p className={`text-lg sm:text-xl max-w-lg mx-auto px-4 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Time-only selection with configurable intervals and formats
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* TimePicker 24-hour */}
          <div className={`rounded-2xl p-6 sm:p-10 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-400'
              : 'bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-amber-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-amber-900' : 'text-amber-100'
              }`}>
                24-Hour Time
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
              }`}>
                00:00-23:59
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-amber-700' : 'text-amber-200'
            }`}>
              Professional time selection in 24-hour format. Perfect for business hours and international applications.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              {time ? time.toLocaleTimeString() : 'No time selected'}
            </div>

            <TimePicker
              value={time || new Date()}
              onChange={setTime}
              theme={theme}
              use24Hours={true}
            />

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Time only, 24-hour format</div>
              <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{true}`}</span></div>
            </div>
          </div>

          {/* TimePicker 12-hour */}
          <div className={`rounded-2xl p-6 sm:p-10 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-400'
              : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-purple-900' : 'text-purple-100'
              }`}>
                12-Hour Time
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
              }`}>
                AM/PM
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-200'
            }`}>
              User-friendly time selection with AM/PM wheel. Ideal for consumer apps and everyday scheduling.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              {time12h ? time12h.toLocaleTimeString() : 'No time selected'}
            </div>

            <TimePicker
              value={time12h || new Date()}
              onChange={setTime12h}
              theme={theme}
              use24Hours={false}
            />

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Time only, 12-hour with AM/PM</div>
              <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{false}`}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WheelPicker Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <CrisliIcon size={48} animated={true} color={theme === 'light' ? '#8B5CF6' : '#A855F7'} />
            WheelPicker
          </h2>
          <p className={`text-lg sm:text-xl max-w-lg mx-auto px-4 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Generic wheel picker for any custom options and data
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`rounded-2xl p-6 sm:p-10 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-400'
              : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-purple-900' : 'text-purple-100'
              }`}>
                Custom Options
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
              }`}>
                FLEXIBLE
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-200'
            }`}>
              Create custom wheel pickers for any data. Perfect for dropdowns, selectors, and choice lists.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              {options.find(o => o.value === selectedOption)?.label || selectedOption}
            </div>

            <WheelPicker
              items={options}
              value={selectedOption}
              onChange={setSelectedOption}
              label="Choose your favorite framework"
              theme={theme}
            />

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Custom options array</div>
              <div><span className="text-purple-300">items</span><span className="text-gray-100">={`{options}`}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            Special Features
          </h2>
          <p className={`text-lg sm:text-xl max-w-lg mx-auto px-4 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Advanced features for booking systems and professional applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Disable Past Feature */}
          <div className={`rounded-2xl p-6 sm:p-10 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-red-50 to-rose-100 border-red-400'
              : 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-red-900' : 'text-red-100'
              }`}>
                Disable Past Dates
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-red-500' : 'bg-red-600'
              }`}>
                BOOKING
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-red-700' : 'text-red-200'
            }`}>
              Perfect for appointment booking and scheduling. Automatically prevents selection of past dates and times.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-red-500' : 'bg-red-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
              </svg>
              {dateFuture ? dateFuture.toLocaleString() : 'No date selected'}
            </div>

            <DateTimePicker
              value={dateFuture || new Date()}
              onChange={setDateFuture}
              theme={theme}
              showTime={true}
              use24Hours={false}
              disablePast={true}
            />

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Disable past dates/times</div>
              <div><span className="text-purple-300">disablePast</span><span className="text-gray-100">={`{true}`}</span></div>
            </div>
          </div>

          {/* Time Steps Feature */}
          <div className={`rounded-2xl p-6 sm:p-10 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400'
              : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-green-900' : 'text-green-100'
              }`}>
                Time Step Intervals
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-green-500' : 'bg-green-600'
              }`}>
                15-MIN
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-green-700' : 'text-green-200'
            }`}>
              Configure 5, 15, or 30-minute intervals for efficient time selection. Perfect for appointment slots.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-green-500' : 'bg-green-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              {time15min ? time15min.toLocaleTimeString() : 'No time selected'}
            </div>

            <TimePicker
              value={time15min || new Date()}
              onChange={setTime15min}
              theme={theme}
              use24Hours={false}
              minuteStep={15}
            />

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// 15-minute intervals</div>
              <div><span className="text-purple-300">minuteStep</span><span className="text-gray-100">={`{15}`}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CalendarTimePicker Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            CalendarTimePicker
          </h2>
          <p className={`text-lg sm:text-xl max-w-lg mx-auto px-4 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Traditional calendar grid with integrated time picker wheels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* CalendarTimePicker 24-hour */}
          <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-red-50 to-rose-100 border-red-400'
              : 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-red-900' : 'text-red-100'
              }`}>
                Calendar + 24-Hour
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-red-500' : 'bg-red-600'
              }`}>
                CLASSIC
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-red-700' : 'text-red-200'
            }`}>
              Traditional calendar grid interface with 24-hour time wheels. Familiar UI pattern for users who prefer calendar views.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-red-500' : 'bg-red-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              {calendarDate ? calendarDate.toLocaleString() : 'No date selected'}
            </div>

            <div className="flex justify-center w-full mb-6">
              <CalendarTimePicker
                value={calendarDate || new Date()}
                onChange={setCalendarDate}
                theme={theme}
                showTime={true}
                use24Hours={true}
              />
            </div>

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Calendar grid + 24-hour time</div>
              <div><span className="text-purple-300">showTime</span><span className="text-gray-100">={`{true}`}</span></div>
              <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{true}`}</span></div>
            </div>
          </div>

          {/* CalendarTimePicker 12-hour */}
          <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-400'
              : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-purple-900' : 'text-purple-100'
              }`}>
                Calendar + 12-Hour
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
              }`}>
                FAMILIAR
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-200'
            }`}>
              Calendar grid with user-friendly 12-hour time and AM/PM selection. Perfect for consumer applications and everyday scheduling.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              {calendarDate12h ? calendarDate12h.toLocaleString() : 'No date selected'}
            </div>

            <div className="flex justify-center w-full mb-6">
              <CalendarTimePicker
                value={calendarDate12h || new Date()}
                onChange={setCalendarDate12h}
                theme={theme}
                showTime={true}
                use24Hours={false}
              />
            </div>

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Calendar grid + 12-hour AM/PM</div>
              <div><span className="text-purple-300">showTime</span><span className="text-gray-100">={`{true}`}</span></div>
              <div><span className="text-purple-300">use24Hours</span><span className="text-gray-100">={`{false}`}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* HorizontalCalendarTimePicker Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            HorizontalCalendarTimePicker
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Horizontal layout with calendar and time picker side by side for efficient space usage
          </p>
        </div>

        {/* Single wide layout for horizontal component */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-400'
              : 'bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-emerald-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-emerald-900' : 'text-emerald-100'
              }`}>
                Horizontal Layout - 24 Hour
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-emerald-500' : 'bg-emerald-600'
              }`}>
                WIDE LAYOUT
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-emerald-700' : 'text-emerald-200'
            }`}>
              Calendar and time picker positioned side by side for better space utilization. Perfect for dashboards and booking interfaces.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-emerald-500' : 'bg-emerald-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              {horizontalDate ? horizontalDate.toLocaleString() : 'No date selected'}
            </div>

            <div className="flex justify-center w-full mb-6 horizontal-picker-wrapper">
              <HorizontalCalendarTimePicker
                value={horizontalDate || new Date()}
                onChange={setHorizontalDate}
                theme={theme}
                showTime={true}
                use24Hour={true}
              />
            </div>

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Horizontal layout for dashboards</div>
              <div><span className="text-purple-300">showTime</span><span className="text-gray-100">={`{true}`}</span></div>
              <div><span className="text-purple-300">use24Hour</span><span className="text-gray-100">={`{true}`}</span></div>
            </div>
          </div>

          {/* Horizontal 12-hour with booking features */}
          <div className={`rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-400'
              : 'bg-gradient-to-br from-amber-900/50 to-yellow-900/50 border-amber-600'
          }`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-amber-900' : 'text-amber-100'
              }`}>
                Booking System Ready
              </h3>
              <div className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${
                theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
              }`}>
                FUTURE ONLY
              </div>
            </div>

            <p className={`mb-6 text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-amber-700' : 'text-amber-200'
            }`}>
              Horizontal layout with 12-hour format and past date/time restrictions. Ideal for appointment booking and scheduling systems.
            </p>

            <div className={`rounded-xl p-4 mb-6 text-sm font-medium text-white flex items-center gap-2 ${
              theme === 'light' ? 'bg-amber-500' : 'bg-amber-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              {horizontalDateFuture ? horizontalDateFuture.toLocaleString() : 'No date selected'}
            </div>

            <div className="flex justify-center w-full mb-6 horizontal-picker-wrapper">
              <HorizontalCalendarTimePicker
                value={horizontalDateFuture || new Date()}
                onChange={setHorizontalDateFuture}
                theme={theme}
                showTime={true}
                use24Hour={false}
                disablePast={true}
              />
            </div>

            <div className={`rounded-xl p-4 mt-6 font-mono text-xs overflow-auto ${
              theme === 'light' ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-100'
            }`}>
              <div className="text-green-400 mb-2">// Perfect for booking systems</div>
              <div><span className="text-purple-300">use24Hour</span><span className="text-gray-100">={`{false}`}</span></div>
              <div><span className="text-purple-300">disablePast</span><span className="text-gray-100">={`{true}`}</span></div>
            </div>
          </div>
        </div>
      </section>

      </div>

      {/* Ready to Build Section */}
      <ReadyToBuildSection theme={theme} />

      {/* Footer */}
      <Footer theme={theme} />
    </>
  )
}

export default ComponentsPage
