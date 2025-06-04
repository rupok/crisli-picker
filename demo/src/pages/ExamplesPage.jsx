import React, { useState } from 'react'
import { DateTimePicker, TimePicker, WheelPicker, CalendarTimePicker, HorizontalCalendarTimePicker } from 'crisli-picker'
import ReadyToBuildSection from '../components/ReadyToBuildSection'
import Footer from '../components/Footer'

const ExamplesPage = ({ theme }) => {
  // Medical Appointment Booking
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  const [reminderTime, setReminderTime] = useState(new Date())
  const [doctor, setDoctor] = useState('dr-smith')
  const [appointmentType, setAppointmentType] = useState('consultation')

  // Flight Booking
  const [departureDate, setDepartureDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))
  const [flightTime, setFlightTime] = useState(new Date())
  const [passengers, setPassengers] = useState('1')
  const [flightClass, setFlightClass] = useState('economy')

  // Hotel Reservation
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000))
  const [roomType, setRoomType] = useState('standard')
  const [guests, setGuests] = useState('2')

  // Meeting Room Booking
  const [meetingDate, setMeetingDate] = useState(new Date())
  const [meetingDuration, setMeetingDuration] = useState('60')
  const [meetingRoom, setMeetingRoom] = useState('conference-a')
  const [attendees, setAttendees] = useState('5')

  // Medical Options
  const doctorOptions = [
    { value: 'dr-smith', label: 'Dr. Smith - Cardiology' },
    { value: 'dr-johnson', label: 'Dr. Johnson - Dermatology' },
    { value: 'dr-williams', label: 'Dr. Williams - Orthopedics' },
    { value: 'dr-brown', label: 'Dr. Brown - Pediatrics' },
  ]

  const appointmentTypeOptions = [
    { value: 'consultation', label: 'Consultation' },
    { value: 'checkup', label: 'Regular Checkup' },
    { value: 'followup', label: 'Follow-up' },
    { value: 'emergency', label: 'Emergency' },
  ]

  // Flight Options
  const passengerOptions = [
    { value: '1', label: '1 Passenger' },
    { value: '2', label: '2 Passengers' },
    { value: '3', label: '3 Passengers' },
    { value: '4', label: '4 Passengers' },
    { value: '5+', label: '5+ Passengers' },
  ]

  const flightClassOptions = [
    { value: 'economy', label: 'Economy Class' },
    { value: 'premium', label: 'Premium Economy' },
    { value: 'business', label: 'Business Class' },
    { value: 'first', label: 'First Class' },
  ]

  // Hotel Options
  const roomTypeOptions = [
    { value: 'standard', label: 'Standard Room' },
    { value: 'deluxe', label: 'Deluxe Room' },
    { value: 'suite', label: 'Suite' },
    { value: 'penthouse', label: 'Penthouse' },
  ]

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
  ]

  // Meeting Options
  const durationOptions = [
    { value: '30', label: '30 minutes' },
    { value: '60', label: '1 hour' },
    { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' },
    { value: '180', label: '3 hours' },
  ]

  const meetingRoomOptions = [
    { value: 'conference-a', label: 'Conference Room A (10 people)' },
    { value: 'conference-b', label: 'Conference Room B (6 people)' },
    { value: 'boardroom', label: 'Executive Boardroom (20 people)' },
    { value: 'huddle', label: 'Huddle Room (4 people)' },
  ]

  const attendeeOptions = [
    { value: '2', label: '2 attendees' },
    { value: '5', label: '5 attendees' },
    { value: '10', label: '10 attendees' },
    { value: '15', label: '15 attendees' },
    { value: '20', label: '20 attendees' },
  ]

  return (
    <>
      <div className={`min-h-screen px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto ${
        theme === 'light'
          ? 'bg-gradient-to-br from-slate-50 to-slate-200'
          : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}>
        {/* Compact Header Section */}
        <div className={`text-center mb-8 py-8 px-6 rounded-2xl border relative overflow-hidden ${
          theme === 'light'
            ? 'bg-gradient-to-br from-white to-slate-50 border-slate-300'
            : 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Real-World Examples
            </h1>
          </div>

          <p className={`text-base max-w-xl mx-auto mb-6 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Professional implementations showcasing Crisli Picker in production-ready applications
          </p>

          {/* Compact Industry Badges */}
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              { icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              ), label: 'HEALTHCARE', color: 'bg-red-500' },
              { icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z"/>
                </svg>
              ), label: 'TRAVEL', color: 'bg-blue-500' },
              { icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                </svg>
              ), label: 'HOSPITALITY', color: 'bg-purple-500' },
              { icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              ), label: 'BUSINESS', color: 'bg-green-500' }
            ].map((badge, index) => (
              <div key={index} className={`${badge.color} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Medical Appointment Booking System */}
        <section className="mb-8">
          <div className={`rounded-2xl p-6 border relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-red-50 to-rose-100 border-red-300'
              : 'bg-gradient-to-br from-red-900/50 to-rose-900/50 border-red-600'
          }`}>
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-red-900' : 'text-red-100'
              }`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
                Medical Appointment Booking
              </h2>
              <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                theme === 'light' ? 'bg-red-500' : 'bg-red-600'
              }`}>
                HEALTHCARE
              </div>
            </div>

            <p className={`mb-6 text-sm leading-relaxed ${
              theme === 'light' ? 'text-red-700' : 'text-red-200'
            }`}>
              Professional medical appointment scheduling with future-only dates, 15-minute intervals, and doctor selection.
            </p>

            {/* Balanced Appointment Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-4">
              {/* Main Calendar - Narrower */}
              <div className="lg:col-span-3">
                <div className={`rounded-lg p-3 border h-full ${
                  theme === 'light'
                    ? 'bg-white/70 border-red-300'
                    : 'bg-black/30 border-red-700'
                }`}>
                  <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                    theme === 'light' ? 'text-red-900' : 'text-red-100'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Select Appointment Date & Time
                  </label>
                  <CalendarTimePicker
                    value={appointmentDate}
                    onChange={setAppointmentDate}
                    theme={theme}
                    showTime={true}
                    use24Hours={false}
                    disablePast={true}
                  />
                </div>
              </div>

              {/* Matched Height Sidebar */}
              <div className="lg:col-span-2">
                <div className={`rounded-lg p-3 border h-full flex flex-col ${
                  theme === 'light'
                    ? 'bg-white/70 border-red-300'
                    : 'bg-black/30 border-red-700'
                }`}>
                  {/* Doctor Selection */}
                  <div className="flex-1 mb-4">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-red-900' : 'text-red-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      Doctor
                    </label>
                    <WheelPicker
                      items={doctorOptions}
                      value={doctor}
                      onChange={setDoctor}
                      theme={theme}
                    />
                  </div>

                  {/* Appointment Type */}
                  <div className="flex-1">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-red-900' : 'text-red-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                      </svg>
                      Type
                    </label>
                    <WheelPicker
                      items={appointmentTypeOptions}
                      value={appointmentType}
                      onChange={setAppointmentType}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Appointment Confirmation */}
            <div className={`rounded-lg p-4 text-white ${
              theme === 'light' ? 'bg-red-500' : 'bg-red-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Appointment Confirmed</h3>
                  <p className="text-sm opacity-90 mb-2">{appointmentDate.toLocaleDateString()} at {appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    {doctorOptions.find(d => d.value === doctor)?.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75 mb-1">Type</p>
                  <p className="font-medium text-lg">
                    {appointmentTypeOptions.find(a => a.value === appointmentType)?.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flight Booking System */}
        <section className="mb-8">
          <div className={`rounded-2xl p-6 border relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-blue-50 to-sky-100 border-blue-300'
              : 'bg-gradient-to-br from-blue-900/50 to-sky-900/50 border-blue-600'
          }`}>
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-blue-900' : 'text-blue-100'
              }`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                Flight Booking System
              </h2>
              <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                theme === 'light' ? 'bg-blue-500' : 'bg-blue-600'
              }`}>
                TRAVEL
              </div>
            </div>

            <p className={`mb-6 text-sm leading-relaxed ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-200'
            }`}>
              Professional flight booking with future-only dates, flexible time selection, and passenger management.
            </p>

            {/* Balanced Flight Booking Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-4">
              {/* Main Calendar - Narrower */}
              <div className="lg:col-span-3">
                <div className={`rounded-lg p-3 border h-full ${
                  theme === 'light'
                    ? 'bg-white/70 border-blue-300'
                    : 'bg-black/30 border-blue-700'
                }`}>
                  <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                    theme === 'light' ? 'text-blue-900' : 'text-blue-100'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Select Departure Date & Time
                  </label>
                  <CalendarTimePicker
                    value={departureDate}
                    onChange={setDepartureDate}
                    theme={theme}
                    showTime={true}
                    use24Hours={false}
                    disablePast={true}
                  />
                </div>
              </div>

              {/* Matched Height Sidebar */}
              <div className="lg:col-span-2">
                <div className={`rounded-lg p-3 border h-full flex flex-col ${
                  theme === 'light'
                    ? 'bg-white/70 border-blue-300'
                    : 'bg-black/30 border-blue-700'
                }`}>
                  {/* Passengers Selection */}
                  <div className="flex-1 mb-4">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-blue-900' : 'text-blue-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      Passengers
                    </label>
                    <WheelPicker
                      items={passengerOptions}
                      value={passengers}
                      onChange={setPassengers}
                      theme={theme}
                    />
                  </div>

                  {/* Flight Class */}
                  <div className="flex-1">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-blue-900' : 'text-blue-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      Class
                    </label>
                    <WheelPicker
                      items={flightClassOptions}
                      value={flightClass}
                      onChange={setFlightClass}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Flight Booking Confirmation */}
            <div className={`rounded-lg p-4 text-white ${
              theme === 'light' ? 'bg-blue-500' : 'bg-blue-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Flight Booking Confirmed</h3>
                  <p className="text-sm opacity-90 mb-2">{departureDate.toLocaleDateString()} at {departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    {passengerOptions.find(p => p.value === passengers)?.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75 mb-1">Class</p>
                  <p className="font-medium text-lg">
                    {flightClassOptions.find(c => c.value === flightClass)?.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Booking System */}
        <section className="mb-8">
          <div className={`rounded-2xl p-6 border relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-300'
              : 'bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-600'
          }`}>
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-purple-900' : 'text-purple-100'
              }`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                  <path d="M6 8h8v2H6V8zm0 4h8v2H6v-2z"/>
                </svg>
                Hotel Booking System
              </h2>
              <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
              }`}>
                HOSPITALITY
              </div>
            </div>

            <p className={`mb-6 text-sm leading-relaxed ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-200'
            }`}>
              Professional hotel reservation with future-only dates, room type selection, and guest management.
            </p>

            {/* Balanced Hotel Booking Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-4">
              {/* Main Calendar - Narrower */}
              <div className="lg:col-span-3">
                <div className={`rounded-lg p-3 border h-full ${
                  theme === 'light'
                    ? 'bg-white/70 border-purple-300'
                    : 'bg-black/30 border-purple-700'
                }`}>
                  <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                    theme === 'light' ? 'text-purple-900' : 'text-purple-100'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Select Check-in Date & Time
                  </label>
                  <CalendarTimePicker
                    value={checkInDate}
                    onChange={setCheckInDate}
                    theme={theme}
                    showTime={true}
                    use24Hours={false}
                    disablePast={true}
                  />
                </div>
              </div>

              {/* Matched Height Sidebar */}
              <div className="lg:col-span-2">
                <div className={`rounded-lg p-3 border h-full flex flex-col ${
                  theme === 'light'
                    ? 'bg-white/70 border-purple-300'
                    : 'bg-black/30 border-purple-700'
                }`}>
                  {/* Room Type Selection */}
                  <div className="flex-1 mb-4">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-purple-900' : 'text-purple-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                      </svg>
                      Room Type
                    </label>
                    <WheelPicker
                      items={roomTypeOptions}
                      value={roomType}
                      onChange={setRoomType}
                      theme={theme}
                    />
                  </div>

                  {/* Guests */}
                  <div className="flex-1">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-purple-900' : 'text-purple-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      Guests
                    </label>
                    <WheelPicker
                      items={guestOptions}
                      value={guests}
                      onChange={setGuests}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hotel Booking Confirmation */}
            <div className={`rounded-lg p-4 text-white ${
              theme === 'light' ? 'bg-purple-500' : 'bg-purple-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Hotel Reservation Confirmed</h3>
                  <p className="text-sm opacity-90 mb-2">{checkInDate.toLocaleDateString()} at {checkInDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    {guestOptions.find(g => g.value === guests)?.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75 mb-1">Room</p>
                  <p className="font-medium text-lg">
                    {roomTypeOptions.find(r => r.value === roomType)?.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Room Booking */}
        <section className="mb-8">
          <div className={`rounded-2xl p-6 border relative overflow-hidden ${
            theme === 'light'
              ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300'
              : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600'
          }`}>
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className={`flex items-center gap-3 text-xl sm:text-2xl font-bold ${
                theme === 'light' ? 'text-green-900' : 'text-green-100'
              }`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                  <path d="M6 8h8v2H6V8zm0 4h8v2H6v-2z"/>
                </svg>
                Meeting Room Booking
              </h2>
              <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                theme === 'light' ? 'bg-green-500' : 'bg-green-600'
              }`}>
                BUSINESS
              </div>
            </div>

            <p className={`mb-6 text-sm leading-relaxed ${
              theme === 'light' ? 'text-green-700' : 'text-green-200'
            }`}>
              Professional meeting room scheduling with future-only dates, duration selection, and room management.
            </p>

            {/* Balanced Meeting Room Form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-4">
              {/* Main Calendar - Narrower */}
              <div className="lg:col-span-3">
                <div className={`rounded-lg p-3 border h-full ${
                  theme === 'light'
                    ? 'bg-white/70 border-green-300'
                    : 'bg-black/30 border-green-700'
                }`}>
                  <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                    theme === 'light' ? 'text-green-900' : 'text-green-100'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    Select Meeting Date & Time
                  </label>
                  <CalendarTimePicker
                    value={meetingDate}
                    onChange={setMeetingDate}
                    theme={theme}
                    showTime={true}
                    use24Hours={false}
                    disablePast={true}
                  />
                </div>
              </div>

              {/* Matched Height Sidebar */}
              <div className="lg:col-span-2">
                <div className={`rounded-lg p-3 border h-full flex flex-col ${
                  theme === 'light'
                    ? 'bg-white/70 border-green-300'
                    : 'bg-black/30 border-green-700'
                }`}>
                  {/* Duration Selection */}
                  <div className="flex-1 mb-4">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-green-900' : 'text-green-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Duration
                    </label>
                    <WheelPicker
                      items={durationOptions}
                      value={meetingDuration}
                      onChange={setMeetingDuration}
                      theme={theme}
                    />
                  </div>

                  {/* Meeting Room */}
                  <div className="flex-1">
                    <label className={`block mb-2 font-medium text-sm flex items-center gap-2 ${
                      theme === 'light' ? 'text-green-900' : 'text-green-100'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                      </svg>
                      Room
                    </label>
                    <WheelPicker
                      items={meetingRoomOptions}
                      value={meetingRoom}
                      onChange={setMeetingRoom}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Meeting Booking Confirmation */}
            <div className={`rounded-lg p-4 text-white ${
              theme === 'light' ? 'bg-green-500' : 'bg-green-600'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Meeting Room Booked</h3>
                  <p className="text-sm opacity-90 mb-2">{meetingDate.toLocaleDateString()} at {meetingDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    {durationOptions.find(d => d.value === meetingDuration)?.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75 mb-1">Room</p>
                  <p className="font-medium text-lg">
                    {meetingRoomOptions.find(r => r.value === meetingRoom)?.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <ReadyToBuildSection theme={theme} />
      <Footer theme={theme} />
    </>
  )
}

export default ExamplesPage
