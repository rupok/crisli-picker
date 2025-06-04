import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Wheel from './Wheel';

/**
 * DateTimePicker component using the wheel picker
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
const DateTimePicker = ({
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

  const isDateInPast = React.useCallback((year, month, day) => {
    if (!disablePast) return false;
    const date = new Date(year, month, day);
    return date < today;
  }, [disablePast, today]);

  const isTimeInPast = React.useCallback((year, month, day, hour, minute) => {
    if (!disablePast || !showTime) return false;
    const selectedDate = new Date(year, month, day);
    const isToday = selectedDate.getTime() === today.getTime();

    if (!isToday) return false;

    const selectedTime = new Date(year, month, day, hour, minute);
    return selectedTime <= now;
  }, [disablePast, showTime, today, now]);

  // Generate arrays for days, months, years, hours, minutes
  const generateDays = React.useCallback((year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const isPastDate = isDateInPast(year, month - 1, day); // month-1 because Date constructor uses 0-based months
      return {
        value: day,
        label: `${day}`,
        disabled: isPastDate
      };
    });
  }, [isDateInPast]);

  const generateMonths = React.useCallback((year) => {
    return Array.from({ length: 12 }, (_, i) => {
      const isPastMonth = disablePast && year === now.getFullYear() && i < now.getMonth();
      return {
        value: i,
        label: format(new Date(2000, i, 1), 'MMMM'),
        disabled: isPastMonth
      };
    });
  }, [disablePast, now]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => {
    const year = currentYear - 10 + i;
    const isPastYear = disablePast && year < currentYear;
    return {
      value: year,
      label: `${year}`,
      disabled: isPastYear
    };
  });

  const generateHours = React.useCallback((year, month, day, period = null) => {
    if (use24Hours) {
      const hours = [];
      for (let i = 0; i < 24; i += hourStep) {
        const isPastTime = isTimeInPast(year, month, day, i, 0);
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
        const isPastTime = isTimeInPast(year, month, day, hour24, 0);
        hours.push({
          value: hour,
          label: hour.toString(),
          disabled: isPastTime
        });
      }
      return hours;
    }
  }, [use24Hours, to24HourFormat, isTimeInPast, hourStep]);

  const generateMinutes = React.useCallback((year, month, day, hour, period = null) => {
    const minutes = [];
    for (let i = 0; i < 60; i += minuteStep) {
      const hour24 = use24Hours ? hour : to24HourFormat(hour, period);
      const isPastTime = isTimeInPast(year, month, day, hour24, i);
      minutes.push({
        value: i,
        label: i.toString().padStart(2, '0'),
        disabled: isPastTime
      });
    }
    return minutes;
  }, [use24Hours, to24HourFormat, isTimeInPast, minuteStep]);

  const periods = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ];

  // State for selected values
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentValue = value || new Date();
    const originalHour = use24Hours ? currentValue.getHours() : to12HourFormat(currentValue.getHours());
    const originalMinute = currentValue.getMinutes();

    return {
      day: currentValue.getDate(),
      month: currentValue.getMonth(),
      year: currentValue.getFullYear(),
      hour: snapHourToStep(originalHour),
      minute: snapMinuteToStep(originalMinute),
      period: getPeriod(currentValue.getHours())
    };
  });

  // Generate dynamic arrays based on current selection
  const [days, setDays] = useState(() => generateDays(selectedDate.year, selectedDate.month + 1));
  const [months, setMonths] = useState(() => generateMonths(selectedDate.year));
  const [hours, setHours] = useState(() => generateHours(selectedDate.year, selectedDate.month, selectedDate.day, selectedDate.period));
  const [minutes, setMinutes] = useState(() => generateMinutes(selectedDate.year, selectedDate.month, selectedDate.day, selectedDate.hour, selectedDate.period));

  // Update arrays when dependencies change
  useEffect(() => {
    // Update days
    setDays(generateDays(selectedDate.year, selectedDate.month + 1));

    // Update months
    setMonths(generateMonths(selectedDate.year));

    // Update hours and minutes if showTime is enabled
    if (showTime) {
      setHours(generateHours(selectedDate.year, selectedDate.month, selectedDate.day, selectedDate.period));
      setMinutes(generateMinutes(selectedDate.year, selectedDate.month, selectedDate.day, selectedDate.hour, selectedDate.period));
    }

    // If the current day is invalid for the new month, adjust it
    const maxDay = new Date(selectedDate.year, selectedDate.month + 1, 0).getDate();
    if (selectedDate.day > maxDay) {
      setSelectedDate(prev => ({ ...prev, day: maxDay }));
    }
  }, [selectedDate.month, selectedDate.year, selectedDate.day, selectedDate.hour, selectedDate.period, showTime, disablePast, generateDays, generateMonths, generateHours, generateMinutes]);

  // Update the parent component when values change
  useEffect(() => {
    const hour = use24Hours ? selectedDate.hour : to24HourFormat(selectedDate.hour, selectedDate.period);

    const newDate = new Date(
      selectedDate.year,
      selectedDate.month,
      selectedDate.day,
      hour,
      selectedDate.minute
    );

    // Prevent unnecessary updates by checking if the date/time has actually changed
    const currentValue = value || new Date();
    if (
      newDate.getFullYear() !== currentValue.getFullYear() ||
      newDate.getMonth() !== currentValue.getMonth() ||
      newDate.getDate() !== currentValue.getDate() ||
      newDate.getHours() !== currentValue.getHours() ||
      newDate.getMinutes() !== currentValue.getMinutes()
    ) {
      onChange(newDate);
    }
  }, [selectedDate, onChange, value, use24Hours, to24HourFormat]);

  // Handle individual wheel changes with validation
  const handleDayChange = (day) => {
    if (disablePast && isDateInPast(selectedDate.year, selectedDate.month, day)) {
      return; // Prevent selecting past dates
    }
    setSelectedDate(prev => ({ ...prev, day }));
  };

  const handleMonthChange = (month) => {
    if (disablePast && selectedDate.year === now.getFullYear() && month < now.getMonth()) {
      return; // Prevent selecting past months
    }
    setSelectedDate(prev => ({ ...prev, month }));
  };

  const handleYearChange = (year) => {
    if (disablePast && year < now.getFullYear()) {
      return; // Prevent selecting past years
    }
    setSelectedDate(prev => ({ ...prev, year }));
  };

  const handleHourChange = (hour) => {
    const hour24 = use24Hours ? hour : to24HourFormat(hour, selectedDate.period);
    if (disablePast && isTimeInPast(selectedDate.year, selectedDate.month, selectedDate.day, hour24, selectedDate.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedDate(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    const hour24 = use24Hours ? selectedDate.hour : to24HourFormat(selectedDate.hour, selectedDate.period);
    if (disablePast && isTimeInPast(selectedDate.year, selectedDate.month, selectedDate.day, hour24, minute)) {
      return; // Prevent selecting past times
    }
    setSelectedDate(prev => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
    const hour24 = to24HourFormat(selectedDate.hour, period);
    if (disablePast && isTimeInPast(selectedDate.year, selectedDate.month, selectedDate.day, hour24, selectedDate.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedDate(prev => ({ ...prev, period }));
  };

  // Theme colors
  const themeColors = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#666666',
      selectedTextColor: '#000000',
      highlightColor: 'rgba(0, 0, 0, 0.05)',
      highlightBorderColor: 'rgba(0, 0, 0, 0.1)',
      labelColor: '#999999'
    },
    dark: {
      backgroundColor: '#1e1e1e',
      textColor: '#a0a0a0',
      selectedTextColor: '#ffffff',
      highlightColor: 'rgba(255, 255, 255, 0.1)',
      highlightBorderColor: 'rgba(255, 255, 255, 0.2)',
      labelColor: '#777777'
    }
  };

  const colors = themeColors[theme] || themeColors.light;

  return (
    <div className="crisli-datetime-picker" style={{
      backgroundColor: colors.backgroundColor,
      borderRadius: '12px',
      padding: '20px 10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Labels */}
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px'
      }}>
        <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
          Day
        </div>
        <div style={{ flex: 1.5, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
          Month
        </div>
        <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
          Year
        </div>

        {showTime && (
          <>
            <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
              Hour
            </div>
            <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
              Min
            </div>
            {!use24Hours && (
              <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
                AM/PM
              </div>
            )}
          </>
        )}
      </div>

      {/* Wheels */}
      <div className="crisli-wheels-container" style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        gap: '5px' // Add gap between wheels
      }}>
        <div style={{ flex: 1 }}>
          <Wheel
            items={days}
            value={selectedDate.day}
            onChange={handleDayChange}
            textColor={colors.textColor}
            selectedTextColor={colors.selectedTextColor}
            highlightColor={colors.highlightColor}
            highlightBorderColor={colors.highlightBorderColor}
            fontSize="14px" // Specify font size
            {...wheelProps}
          />
        </div>
        <div style={{ flex: 1.5 }}>
          <Wheel
            items={months}
            value={selectedDate.month}
            onChange={handleMonthChange}
            textColor={colors.textColor}
            selectedTextColor={colors.selectedTextColor}
            highlightColor={colors.highlightColor}
            highlightBorderColor={colors.highlightBorderColor}
            fontSize="14px" // Specify font size
            {...wheelProps}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Wheel
            items={years}
            value={selectedDate.year}
            onChange={handleYearChange}
            textColor={colors.textColor}
            selectedTextColor={colors.selectedTextColor}
            highlightColor={colors.highlightColor}
            highlightBorderColor={colors.highlightBorderColor}
            fontSize="14px" // Specify font size
            {...wheelProps}
          />
        </div>

        {showTime && (
          <>
            <div style={{ flex: 1 }}>
              <Wheel
                items={hours}
                value={selectedDate.hour}
                onChange={handleHourChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="14px" // Specify font size
                {...wheelProps}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Wheel
                items={minutes}
                value={selectedDate.minute}
                onChange={handleMinuteChange}
                textColor={colors.textColor}
                selectedTextColor={colors.selectedTextColor}
                highlightColor={colors.highlightColor}
                highlightBorderColor={colors.highlightBorderColor}
                fontSize="14px" // Specify font size
                {...wheelProps}
              />
            </div>
            {!use24Hours && (
              <div style={{ flex: 1 }}>
                <Wheel
                  items={periods}
                  value={selectedDate.period}
                  onChange={handlePeriodChange}
                  textColor={colors.textColor}
                  selectedTextColor={colors.selectedTextColor}
                  highlightColor={colors.highlightColor}
                  highlightBorderColor={colors.highlightBorderColor}
                  fontSize="14px" // Specify font size
                  {...wheelProps}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
