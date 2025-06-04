import React, { useState, useEffect } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import Wheel from './Wheel';

/**
 * HorizontalCalendarTimePicker component that combines a calendar for date selection with wheel pickers for time
 * with the time picker positioned on the right side
 *
 * @param {Object} props - Component props
 * @param {Date} props.value - Currently selected date
 * @param {Function} props.onChange - Callback when date changes
 * @param {boolean} props.showTime - Whether to show time picker
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light', 'dark', or 'crisis')
 * @param {string} props.className - Additional CSS class for the component
 * @param {Object} props.style - Additional inline styles for the component
 * @param {boolean} props.use24Hour - Whether to use 24-hour format (default: true)
 * @param {number} props.minuteStep - Step interval for minutes (default: 1)
 * @param {number} props.hourStep - Step interval for hours (default: 1)
 * @param {string} props.timeFormat - Format for displaying time ('HH:mm' or 'hh:mm a')
 */
const HorizontalCalendarTimePicker = ({
  value = new Date(),
  onChange,
  showTime = true,
  wheelProps = {},
  theme = 'light',
  className = '',
  style = {},
  use24Hour = true,
  disablePast = false,
  minuteStep = 1,
  hourStep = 1,
  timeFormat = 'HH:mm' // eslint-disable-line no-unused-vars
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
    const maxHour = use24Hour ? 23 : 12;
    return snapToNearestStep(hour, hourStep, maxHour);
  }, [hourStep, use24Hour, snapToNearestStep]);

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

  // State for time
  const [selectedTime, setSelectedTime] = useState(() => {
    const currentValue = value || new Date();
    const originalHour = use24Hour ? currentValue.getHours() : to12HourFormat(currentValue.getHours());
    const originalMinute = currentValue.getMinutes();

    return {
      hour: snapHourToStep(originalHour),
      minute: snapMinuteToStep(originalMinute),
      period: getPeriod(currentValue.getHours())
    };
  });

  // Generate dynamic arrays for hours and minutes
  const generateHours = React.useCallback((date, period = null) => {
    if (use24Hour) {
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
  }, [use24Hour, to24HourFormat, isTimeInPast, hourStep]);

  const generateMinutes = React.useCallback((date, hour, period = null) => {
    const minutes = [];
    for (let i = 0; i < 60; i += minuteStep) {
      const hour24 = use24Hour ? hour : to24HourFormat(hour, period);
      const isPastTime = isTimeInPast(date, hour24, i);
      minutes.push({
        value: i,
        label: i.toString().padStart(2, '0'),
        disabled: isPastTime
      });
    }
    return minutes;
  }, [use24Hour, to24HourFormat, isTimeInPast, minuteStep]);

  const periods = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ];

  // Generate dynamic arrays based on current selection
  const [hours, setHours] = useState(() => generateHours(selectedDate, selectedTime.period));
  const [minutes, setMinutes] = useState(() => generateMinutes(selectedDate, selectedTime.hour, selectedTime.period));

  // Update arrays when dependencies change
  useEffect(() => {
    if (showTime) {
      setHours(generateHours(selectedDate, selectedTime.period));
      setMinutes(generateMinutes(selectedDate, selectedTime.hour, selectedTime.period));
    }
  }, [selectedDate, selectedTime.hour, selectedTime.period, showTime, disablePast, generateHours, generateMinutes]);

  // Update the parent component when values change
  useEffect(() => {
    const hour = use24Hour ? selectedTime.hour : to24HourFormat(selectedTime.hour, selectedTime.period);

    const newDate = new Date(selectedDate);
    newDate.setHours(hour);
    newDate.setMinutes(selectedTime.minute);

    // Prevent unnecessary updates
    const currentValue = value || new Date();
    if (newDate.getTime() !== currentValue.getTime()) {
      onChange(newDate);
    }
  }, [selectedDate, selectedTime, onChange, value, use24Hour, to24HourFormat]);

  // Handle time wheel changes with validation
  const handleHourChange = (hour) => {
    const hour24 = use24Hour ? hour : to24HourFormat(hour, selectedTime.period);
    if (disablePast && isTimeInPast(selectedDate, hour24, selectedTime.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    const hour24 = use24Hour ? selectedTime.hour : to24HourFormat(selectedTime.hour, selectedTime.period);
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
      highlightColor: 'rgba(59, 130, 246, 0.1)',
      highlightBorderColor: 'rgba(59, 130, 246, 0.3)',
      labelColor: '#999999',
      calendarHeaderBg: '#f8f8f8',
      todayBg: '#f0f0f0',
      selectedBg: '#3b82f6', // Tailwind blue-500
      selectedText: '#ffffff',
      dayHoverBg: '#f5f5f5',
      dividerColor: '#e0e0e0',
      timeHeaderBg: '#f8f8f8',
      wheelBg: '#f5f5f5'
    },
    dark: {
      backgroundColor: '#1e1e1e',
      textColor: '#a0a0a0',
      selectedTextColor: '#ffffff',
      highlightColor: 'rgba(239, 68, 68, 0.2)',
      highlightBorderColor: 'rgba(239, 68, 68, 0.4)',
      labelColor: '#777777',
      calendarHeaderBg: '#2a2a2a',
      todayBg: '#333333',
      selectedBg: '#ef4444', // Tailwind red-500
      selectedText: '#ffffff',
      dayHoverBg: '#2c2c2c',
      dividerColor: '#333333',
      timeHeaderBg: '#2a2a2a',
      wheelBg: '#252525'
    },
    crisis: {
      backgroundColor: '#1e1e1e',
      textColor: '#a0a0a0',
      selectedTextColor: '#ffffff',
      highlightColor: 'rgba(185, 28, 28, 0.2)',
      highlightBorderColor: 'rgba(185, 28, 28, 0.4)',
      labelColor: '#777777',
      calendarHeaderBg: '#2a2a2a',
      todayBg: '#333333',
      selectedBg: '#b91c1c', // Tailwind red-700
      selectedText: '#ffffff',
      dayHoverBg: '#2c2c2c',
      dividerColor: '#333333',
      timeHeaderBg: '#2a2a2a',
      wheelBg: '#252525'
    }
  };

  const colors = themeColors[theme] || themeColors.light;

  // Render calendar header (day names)
  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(new Date());

    // Check if we're on a small screen
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 480;

    // Adjust cell size based on screen size
    const cellSize = isSmallScreen ? 28 : 30;
    const fontSize = isSmallScreen ? '10px' : '11px';

    for (let i = 0; i < 7; i++) {
      // Use shorter day names on small screens
      const dayOfWeek = format(addDays(startDate, i), isSmallScreen ? 'EEEEE' : 'EEE');
      const isWeekend = i === 0 || i === 6; // Sunday or Saturday

      days.push(
        <div
          className="day-name"
          key={i}
          style={{
            textAlign: 'center',
            padding: isSmallScreen ? '8px 0' : '10px 0',
            fontWeight: '600',
            fontSize: fontSize,
            color: isWeekend ? colors.selectedBg : colors.labelColor,
            borderBottom: `1px solid ${colors.dividerColor}`,
            width: `${cellSize}px`,
            margin: '0 auto'
          }}
        >
          {dayOfWeek}
        </div>
      );
    }

    return <div className="days" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      marginBottom: '8px'
    }}>{days}</div>;
  };

  // Render calendar cells
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    // Check if we're on a small screen
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 480;

    // Adjust cell size based on screen size
    const cellSize = isSmallScreen ? 28 : 30;
    const fontSize = isSmallScreen ? '11px' : '12px';

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        const isToday = isSameDay(day, new Date());
        const isSelected = isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isPastDate = isDateInPast(cloneDay);
        const isDisabled = !isCurrentMonth || isPastDate;

        days.push(
          <div
            className={`day ${isDisabled ? 'disabled' : ''} ${
              isSelected ? 'selected' : ''
            } ${isToday ? 'today' : ''}`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
            style={{
              padding: '0',
              textAlign: 'center',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              borderRadius: '50%',
              margin: isSmallScreen ? '1px' : '2px',
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              backgroundColor: isSelected
                ? colors.selectedBg
                : isToday
                  ? colors.todayBg
                  : 'transparent',
              color: isSelected
                ? colors.selectedText
                : isDisabled
                  ? '#ccc'
                  : colors.textColor,
              opacity: isDisabled ? 0.4 : 1,
              fontWeight: isToday || isSelected ? 'bold' : 'normal',
              fontSize: fontSize,
              textDecoration: isPastDate ? 'line-through' : 'none',
              boxShadow: isSelected ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
              ':hover': {
                backgroundColor: isDisabled ? 'transparent' : (!isSelected ? colors.dayHoverBg : colors.selectedBg),
                transform: isDisabled ? 'none' : 'scale(1.05)'
              }
            }}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toString()} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          justifyItems: 'center'
        }}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="calendar-body">{rows}</div>;
  };

  // Render time picker
  const renderTimePicker = () => {
    if (!showTime) return null;

    // Format time for display
    let formattedTime;
    if (use24Hour) {
      formattedTime = `${selectedTime.hour.toString().padStart(2, '0')}:${selectedTime.minute.toString().padStart(2, '0')}`;
    } else {
      const hour12 = selectedTime.hour % 12 || 12;
      const ampm = selectedTime.hour >= 12 ? 'PM' : 'AM';
      formattedTime = `${hour12.toString().padStart(2, '0')}:${selectedTime.minute.toString().padStart(2, '0')} ${ampm}`;
    }

    // Check if we're on a small screen
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 480;

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: isSmallScreen ? '0 5px' : '0 5px',
        width: '100%'
      }}>
        {/* Time header with formatted time */}
        <div style={{
          textAlign: 'center',
          color: colors.selectedTextColor,
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '6px',
          backgroundColor: colors.timeHeaderBg,
          padding: '4px 6px',
          borderRadius: '6px',
          width: '100%',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {formattedTime}
        </div>

        {/* Wheel containers with labels */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          width: '100%',
          justifyContent: 'center',
          padding: '0 10px'
        }}>
          {/* Hour wheel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1'
          }}>
            <div style={{
              fontSize: '11px',
              color: colors.labelColor,
              marginBottom: '3px',
              fontWeight: '500'
            }}>
              Hour
            </div>
            <div style={{
              width: isMobile ? '60px' : '50px',
              backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(245, 245, 245, 0.9)',
              borderRadius: '8px',
              padding: '2px 0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <Wheel
                items={hours}
                value={selectedTime.hour}
                onChange={handleHourChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="13px"
                itemHeight={28}
                {...wheelProps}
              />
            </div>
          </div>

          {/* Minute wheel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1'
          }}>
            <div style={{
              fontSize: '11px',
              color: colors.labelColor,
              marginBottom: '3px',
              fontWeight: '500'
            }}>
              Minute
            </div>
            <div style={{
              width: isMobile ? '60px' : '50px',
              backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(245, 245, 245, 0.9)',
              borderRadius: '8px',
              padding: '2px 0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <Wheel
                items={minutes}
                value={selectedTime.minute}
                onChange={handleMinuteChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="13px"
                itemHeight={28}
                {...wheelProps}
              />
            </div>
          </div>

          {/* AM/PM wheel for 12-hour format */}
          {!use24Hour && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: '0.8'
            }}>
              <div style={{
                fontSize: '11px',
                color: colors.labelColor,
                marginBottom: '3px',
                fontWeight: '500'
              }}>
                Period
              </div>
              <div style={{
                width: isMobile ? '50px' : '40px',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(245, 245, 245, 0.9)',
                borderRadius: '8px',
                padding: '2px 0',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <Wheel
                  items={periods}
                  value={selectedTime.period}
                  onChange={handlePeriodChange}
                  textColor={colors.textColor}
                  selectedTextColor={colors.selectedTextColor}
                  highlightColor={colors.highlightColor}
                  highlightBorderColor={colors.highlightBorderColor}
                  fontSize="13px"
                  itemHeight={28}
                  {...wheelProps}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Use a state to track screen size changes
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  });

  // Update the layout when window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`crisli-horizontal-calendar-time-picker ${className}`}
      style={{
        backgroundColor: colors.backgroundColor,
        borderRadius: '12px',
        padding: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        ...style
      }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        borderRadius: '8px',
        alignItems: isMobile ? 'stretch' : 'flex-start',
        width: '100%'
      }}>
        {/* Calendar Section */}
        <div style={{
          flex: isMobile ? '1 1 auto' : '2.5',
          marginRight: showTime && !isMobile ? '0' : '0',
          marginBottom: showTime && isMobile ? '15px' : '0',
          padding: '5px',
          width: isMobile ? '100%' : 'auto'
        }}>
          {/* Calendar Header */}
          <div className="calendar-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
            padding: '4px 6px',
            backgroundColor: colors.timeHeaderBg,
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            height: '28px'
          }}>
            <div
              className="prev-month"
              onClick={prevMonth}
              style={{
                cursor: 'pointer',
                padding: '2px 6px',
                fontSize: '16px',
                color: colors.textColor,
                borderRadius: '4px',
                transition: 'background-color 0.2s',
                ':hover': {
                  backgroundColor: colors.highlightColor
                }
              }}
            >
              &#8249;
            </div>
            <div style={{
              fontWeight: 'bold',
              color: colors.selectedTextColor,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              {format(currentMonth, 'MMMM yyyy')}
            </div>
            <div
              className="next-month"
              onClick={nextMonth}
              style={{
                cursor: 'pointer',
                padding: '2px 6px',
                fontSize: '16px',
                color: colors.textColor,
                borderRadius: '4px',
                transition: 'background-color 0.2s',
                ':hover': {
                  backgroundColor: colors.highlightColor
                }
              }}
            >
              &#8250;
            </div>
          </div>

          {/* Calendar Days */}
          <div className="calendar" style={{
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {renderDays()}
            {renderCells()}
          </div>
        </div>

        {/* Time Picker Section */}
        {showTime && (
          <div style={{
            flex: isMobile ? '1 1 auto' : '1.5',
            borderLeft: isMobile ? 'none' : `1px solid ${colors.dividerColor}`,
            borderTop: isMobile ? `1px solid ${colors.dividerColor}` : 'none',
            padding: isMobile ? '10px 5px 5px' : '5px 5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.2)' : 'rgba(245, 245, 245, 0.5)',
            borderRadius: '8px',
            width: isMobile ? '100%' : 'auto'
          }}>
            {renderTimePicker()}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 10px',
        borderTop: `1px solid ${colors.dividerColor}`,
        marginTop: '8px'
      }}>
        <button
          onClick={() => {
            // Clear the date
            setSelectedDate(new Date());
            setSelectedTime({
              hour: use24Hour ? 0 : 12,
              minute: 0,
              period: 'AM'
            });
            onChange(null);
          }}
          style={{
            background: 'transparent',
            border: 'none',
            padding: '6px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px',
            color: theme === 'crisis' ? '#ef4444' : colors.textColor,
            transition: 'color 0.2s',
            ':hover': {
              color: theme === 'crisis' ? '#dc2626' : colors.selectedBg
            }
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            // The parent is automatically updated via useEffect
            // This button can be used for additional actions if needed
          }}
          style={{
            background: colors.selectedBg,
            border: 'none',
            padding: '6px 14px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            color: '#ffffff',
            transition: 'opacity 0.2s',
            ':hover': {
              opacity: 0.9
            }
          }}
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default HorizontalCalendarTimePicker;
