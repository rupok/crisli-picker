import React, { useState, useEffect } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import Wheel from './Wheel';

/**
 * CalendarTimePicker component that combines a calendar for date selection with wheel pickers for time
 *
 * @param {Object} props - Component props
 * @param {Date} props.value - Currently selected date
 * @param {Function} props.onChange - Callback when date changes
 * @param {boolean} props.showTime - Whether to show time picker
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const CalendarTimePicker = ({
  value = new Date(),
  onChange,
  showTime = true,
  wheelProps = {},
  theme = 'light'
}) => {
  // State for the calendar
  const [currentMonth, setCurrentMonth] = useState(new Date(value));
  const [selectedDate, setSelectedDate] = useState(new Date(value));
  
  // State for time
  const [selectedTime, setSelectedTime] = useState({
    hour: value.getHours(),
    minute: value.getMinutes()
  });

  // Generate arrays for hours and minutes
  const hours = Array.from({ length: 24 }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0')
  }));

  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0')
  }));

  // Update the parent component when values change
  useEffect(() => {
    const newDate = new Date(selectedDate);
    newDate.setHours(selectedTime.hour);
    newDate.setMinutes(selectedTime.minute);

    // Prevent unnecessary updates
    if (
      newDate.getTime() !== value.getTime()
    ) {
      onChange(newDate);
    }
  }, [selectedDate, selectedTime, onChange, value]);

  // Handle time wheel changes
  const handleHourChange = (hour) => {
    setSelectedTime(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    setSelectedTime(prev => ({ ...prev, minute }));
  };

  // Calendar navigation
  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Calendar date selection
  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  // Theme colors
  const themeColors = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#666666',
      selectedTextColor: '#000000',
      highlightColor: 'rgba(0, 0, 0, 0.05)',
      highlightBorderColor: 'rgba(0, 0, 0, 0.1)',
      labelColor: '#999999',
      calendarHeaderBg: '#f8f8f8',
      todayBg: '#f0f0f0',
      selectedBg: '#4a90e2',
      selectedText: '#ffffff',
      dayHoverBg: '#f5f5f5'
    },
    dark: {
      backgroundColor: '#1e1e1e',
      textColor: '#a0a0a0',
      selectedTextColor: '#ffffff',
      highlightColor: 'rgba(255, 255, 255, 0.1)',
      highlightBorderColor: 'rgba(255, 255, 255, 0.2)',
      labelColor: '#777777',
      calendarHeaderBg: '#2a2a2a',
      todayBg: '#333333',
      selectedBg: '#4a90e2',
      selectedText: '#ffffff',
      dayHoverBg: '#2c2c2c'
    }
  };

  const colors = themeColors[theme] || themeColors.light;

  // Render calendar header (day names)
  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day-name" key={i} style={{ textAlign: 'center', padding: '8px 0', fontWeight: 'bold', color: colors.labelColor }}>
          {format(addDays(startDate, i), 'EEE')}
        </div>
      );
    }

    return <div className="days" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>{days}</div>;
  };

  // Render calendar cells
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        days.push(
          <div
            className={`day ${!isSameMonth(day, monthStart) ? 'disabled' : ''} ${
              isSameDay(day, selectedDate) ? 'selected' : ''
            } ${isSameDay(day, new Date()) ? 'today' : ''}`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
            style={{
              padding: '8px 0',
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: '50%',
              margin: '2px',
              backgroundColor: isSameDay(day, selectedDate) 
                ? colors.selectedBg 
                : isSameDay(day, new Date()) 
                  ? colors.todayBg 
                  : 'transparent',
              color: isSameDay(day, selectedDate) 
                ? colors.selectedText 
                : !isSameMonth(day, monthStart) 
                  ? colors.labelColor 
                  : colors.textColor,
              opacity: !isSameMonth(day, monthStart) ? 0.5 : 1,
              ':hover': {
                backgroundColor: colors.dayHoverBg
              }
            }}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toString()} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="calendar-body">{rows}</div>;
  };

  return (
    <div className="crisli-calendar-time-picker" style={{
      backgroundColor: colors.backgroundColor,
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '350px'
    }}>
      {/* Calendar Header */}
      <div className="calendar-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '5px 10px',
        backgroundColor: colors.calendarHeaderBg,
        borderRadius: '8px'
      }}>
        <div 
          className="prev-month" 
          onClick={prevMonth}
          style={{ cursor: 'pointer', padding: '5px 10px', fontSize: '18px' }}
        >
          &#8249;
        </div>
        <div style={{ fontWeight: 'bold', color: colors.textColor }}>
          {format(currentMonth, 'MMMM yyyy')}
        </div>
        <div 
          className="next-month" 
          onClick={nextMonth}
          style={{ cursor: 'pointer', padding: '5px 10px', fontSize: '18px' }}
        >
          &#8250;
        </div>
      </div>

      {/* Calendar Days */}
      <div className="calendar" style={{ marginBottom: showTime ? '20px' : '0' }}>
        {renderDays()}
        {renderCells()}
      </div>

      {/* Time Picker */}
      {showTime && (
        <div>
          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '10px',
            marginTop: '20px'
          }}>
            <div style={{ textAlign: 'center', color: colors.labelColor, fontSize: '14px', fontWeight: 'bold' }}>
              Time: {selectedTime.hour.toString().padStart(2, '0')}:{selectedTime.minute.toString().padStart(2, '0')}
            </div>
          </div>

          <div className="time-wheels-container" style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <div style={{ width: '80px' }}>
              <Wheel
                items={hours}
                value={selectedTime.hour}
                onChange={handleHourChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="16px"
                {...wheelProps}
              />
            </div>
            <div style={{ width: '80px' }}>
              <Wheel
                items={minutes}
                value={selectedTime.minute}
                onChange={handleMinuteChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="16px"
                {...wheelProps}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarTimePicker;
