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
 * @param {boolean} props.use24Hours - Whether to use 24-hour format (default: true)
 * @param {number} props.minuteStep - Step interval for minutes (default: 1)
 * @param {number} props.hourStep - Step interval for hours (default: 1)
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const CalendarTimePicker = ({
  value = new Date(),
  onChange,
  showTime = true,
  use24Hours = true,
  disablePast = false,
  minuteStep = 1,
  hourStep = 1,
  wheelProps = {},
  theme = 'light'
}) => {
  // Helper functions for 12-hour format
  const to12HourFormat = (hour) => {
    if (hour === 0) return 12;
    if (hour > 12) return hour - 12;
    return hour;
  };

  const getPeriod = (hour) => {
    return hour >= 12 ? 'PM' : 'AM';
  };

  const to24HourFormat = React.useCallback((hour, period) => {
    if (period === 'AM') {
      return hour === 12 ? 0 : hour;
    } else {
      return hour === 12 ? 12 : hour + 12;
    }
  }, []);

  // Helper functions for step intervals
  const snapToNearestStep = React.useCallback((value, step, max) => {
    if (step <= 1) return value;
    const snapped = Math.round(value / step) * step;
    return Math.min(snapped, max);
  }, []);

  const snapMinuteToStep = React.useCallback((minute) => {
    return snapToNearestStep(minute, minuteStep, 59);
  }, [minuteStep, snapToNearestStep]);

  const snapHourToStep = React.useCallback((hour) => {
    const maxHour = use24Hours ? 23 : 12;
    return snapToNearestStep(hour, hourStep, maxHour);
  }, [hourStep, use24Hours, snapToNearestStep]);

  // Helper functions for disablePast functionality
  const now = React.useMemo(() => new Date(), []);
  const today = React.useMemo(() => new Date(now.getFullYear(), now.getMonth(), now.getDate()), [now]);

  const isDateInPast = React.useCallback((date) => {
    if (!disablePast) return false;
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return dateOnly < today;
  }, [disablePast, today]);

  const isTimeInPast = React.useCallback((date, hour, minute) => {
    if (!disablePast || !showTime) return false;
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const isToday = selectedDate.getTime() === today.getTime();

    if (!isToday) return false;

    const selectedTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute);
    return selectedTime <= now;
  }, [disablePast, showTime, today, now]);

  // State for the calendar
  const [currentMonth, setCurrentMonth] = useState(new Date(value || new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date(value || new Date()));

  // Generate dynamic arrays for hours and minutes
  const generateHours = React.useCallback((date, period = null) => {
    if (use24Hours) {
      const hours = [];
      for (let i = 0; i < 24; i += hourStep) {
        const isPastTime = isTimeInPast(date, i, 0);
        hours.push({
          value: i,
          label: i.toString().padStart(2, '0'),
          disabled: isPastTime
        });
      }
      return hours;
    } else {
      const hours = [];
      for (let i = 1; i <= 12; i += hourStep) {
        const hour = i;
        const hour24 = period ? to24HourFormat(hour, period) : hour;
        const isPastTime = isTimeInPast(date, hour24, 0);
        hours.push({
          value: hour,
          label: hour.toString(),
          disabled: isPastTime
        });
      }
      return hours;
    }
  }, [use24Hours, disablePast, to24HourFormat, isTimeInPast, hourStep]);

  const generateMinutes = React.useCallback((date, hour, period = null) => {
    const minutes = [];
    for (let i = 0; i < 60; i += minuteStep) {
      const hour24 = use24Hours ? hour : to24HourFormat(hour, period);
      const isPastTime = isTimeInPast(date, hour24, i);
      minutes.push({
        value: i,
        label: i.toString().padStart(2, '0'),
        disabled: isPastTime
      });
    }
    return minutes;
  }, [use24Hours, disablePast, to24HourFormat, isTimeInPast, minuteStep]);

  // State for time
  const [selectedTime, setSelectedTime] = useState(() => {
    const currentValue = value || new Date();
    const originalHour = use24Hours ? currentValue.getHours() : to12HourFormat(currentValue.getHours());
    const originalMinute = currentValue.getMinutes();

    return {
      hour: snapHourToStep(originalHour),
      minute: snapMinuteToStep(originalMinute),
      period: getPeriod(currentValue.getHours())
    };
  });

  // Generate dynamic arrays based on current selection
  const [hours, setHours] = useState(() => generateHours(selectedDate, selectedTime.period));
  const [minutes, setMinutes] = useState(() => generateMinutes(selectedDate, selectedTime.hour, selectedTime.period));

  const periods = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ];

  // Update arrays when dependencies change
  useEffect(() => {
    if (showTime) {
      setHours(generateHours(selectedDate, selectedTime.period));
      setMinutes(generateMinutes(selectedDate, selectedTime.hour, selectedTime.period));
    }
  }, [selectedDate, selectedTime.hour, selectedTime.period, showTime, disablePast, generateHours, generateMinutes]);

  // Update the parent component when values change
  useEffect(() => {
    const hour = use24Hours ? selectedTime.hour : to24HourFormat(selectedTime.hour, selectedTime.period);

    const newDate = new Date(selectedDate);
    newDate.setHours(hour);
    newDate.setMinutes(selectedTime.minute);

    // Prevent unnecessary updates
    const currentValue = value || new Date();
    if (
      newDate.getTime() !== currentValue.getTime()
    ) {
      onChange(newDate);
    }
  }, [selectedDate, selectedTime, onChange, value, use24Hours, to24HourFormat]);

  // Handle time wheel changes with validation
  const handleHourChange = (hour) => {
    const hour24 = use24Hours ? hour : to24HourFormat(hour, selectedTime.period);
    if (disablePast && isTimeInPast(selectedDate, hour24, selectedTime.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    const hour24 = use24Hours ? selectedTime.hour : to24HourFormat(selectedTime.hour, selectedTime.period);
    if (disablePast && isTimeInPast(selectedDate, hour24, minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
    const hour24 = to24HourFormat(selectedTime.hour, period);
    if (disablePast && isTimeInPast(selectedDate, hour24, selectedTime.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, period }));
  };

  // Calendar navigation
  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Calendar date selection with validation
  const onDateClick = (day) => {
    if (disablePast && isDateInPast(day)) {
      return; // Prevent selecting past dates
    }
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
        const isPastDate = isDateInPast(cloneDay);
        const isDisabled = !isSameMonth(day, monthStart) || isPastDate;

        days.push(
          <div
            className={`day ${isDisabled ? 'disabled' : ''} ${
              isSameDay(day, selectedDate) ? 'selected' : ''
            } ${isSameDay(day, new Date()) ? 'today' : ''}`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
            style={{
              padding: '8px 0',
              textAlign: 'center',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              borderRadius: '50%',
              margin: '2px',
              backgroundColor: isSameDay(day, selectedDate)
                ? colors.selectedBg
                : isSameDay(day, new Date())
                  ? colors.todayBg
                  : 'transparent',
              color: isSameDay(day, selectedDate)
                ? colors.selectedText
                : isDisabled
                  ? '#ccc'
                  : colors.textColor,
              opacity: isDisabled ? 0.4 : 1,
              textDecoration: isPastDate ? 'line-through' : 'none',
              ':hover': {
                backgroundColor: isDisabled ? 'transparent' : colors.dayHoverBg
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
      width: '100%'
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
              Time: {selectedTime.hour.toString().padStart(2, '0')}:{selectedTime.minute.toString().padStart(2, '0')}{!use24Hours ? ` ${selectedTime.period}` : ''}
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
            {!use24Hours && (
              <div style={{ width: '60px' }}>
                <Wheel
                  items={periods}
                  value={selectedTime.period}
                  onChange={handlePeriodChange}
                  textColor={colors.textColor}
                  selectedTextColor={colors.selectedTextColor}
                  highlightColor={colors.highlightColor}
                  highlightBorderColor={colors.highlightBorderColor}
                  fontSize="16px"
                  {...wheelProps}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarTimePicker;
