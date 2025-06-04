import React, { useState, useEffect } from 'react';
import Wheel from './Wheel';

/**
 * TimePicker component using the wheel picker
 *
 * @param {Object} props - Component props
 * @param {Date} props.value - Currently selected time
 * @param {Function} props.onChange - Callback when time changes
 * @param {boolean} props.use24Hours - Whether to use 24-hour format
 * @param {number} props.minuteStep - Step interval for minutes (default: 1)
 * @param {number} props.hourStep - Step interval for hours (default: 1)
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const TimePicker = ({
  value = new Date(),
  onChange,
  use24Hours = true,
  disablePast = false,
  minuteStep = 1,
  hourStep = 1,
  wheelProps = {},
  theme = 'light'
}) => {
  // Convert 24-hour format to 12-hour format
  const to12HourFormat = (hour) => {
    if (hour === 0) return 12;
    if (hour > 12) return hour - 12;
    return hour;
  };

  // Determine if the time is AM or PM
  const getPeriod = (hour) => {
    return hour >= 12 ? 'PM' : 'AM';
  };

  // Convert 12-hour format to 24-hour format
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
  const isTimeInPast = React.useCallback((hour, minute) => {
    if (!disablePast) return false;
    const selectedTime = new Date();
    selectedTime.setHours(hour, minute, 0, 0);
    const currentTime = new Date();
    currentTime.setSeconds(0, 0); // Ignore seconds for comparison
    return selectedTime <= currentTime;
  }, [disablePast]);

  // Generate dynamic arrays for hours and minutes
  const generateHours = React.useCallback((period = null) => {
    if (use24Hours) {
      const hours = [];
      for (let i = 0; i < 24; i += hourStep) {
        const isPastTime = isTimeInPast(i, 0);
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
        const isPastTime = isTimeInPast(hour24, 0);
        hours.push({
          value: hour,
          label: hour.toString(),
          disabled: isPastTime
        });
      }
      return hours;
    }
  }, [use24Hours, to24HourFormat, isTimeInPast, hourStep]);

  const generateMinutes = React.useCallback((hour, period = null) => {
    const minutes = [];
    for (let i = 0; i < 60; i += minuteStep) {
      const hour24 = use24Hours ? hour : to24HourFormat(hour, period);
      const isPastTime = isTimeInPast(hour24, i);
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
  const [hours, setHours] = useState(() => generateHours(selectedTime.period));
  const [minutes, setMinutes] = useState(() => generateMinutes(selectedTime.hour, selectedTime.period));

  // Update arrays when dependencies change
  useEffect(() => {
    setHours(generateHours(selectedTime.period));
    setMinutes(generateMinutes(selectedTime.hour, selectedTime.period));
  }, [selectedTime.hour, selectedTime.period, disablePast, generateHours, generateMinutes]);

  // Update the parent component when values change
  useEffect(() => {
    // Skip the initial render to prevent infinite loops
    const currentValue = value || new Date();
    const newDate = new Date(currentValue);

    if (use24Hours) {
      newDate.setHours(selectedTime.hour);
    } else {
      newDate.setHours(to24HourFormat(selectedTime.hour, selectedTime.period));
    }

    newDate.setMinutes(selectedTime.minute);
    newDate.setSeconds(0);

    // Prevent unnecessary updates by checking if the time has actually changed
    if (
      newDate.getHours() !== currentValue.getHours() ||
      newDate.getMinutes() !== currentValue.getMinutes()
    ) {
      onChange(newDate);
    }
  }, [selectedTime, onChange, value, use24Hours, to24HourFormat]);

  // Handle individual wheel changes with validation
  const handleHourChange = (hour) => {
    const hour24 = use24Hours ? hour : to24HourFormat(hour, selectedTime.period);
    if (disablePast && isTimeInPast(hour24, selectedTime.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    const hour24 = use24Hours ? selectedTime.hour : to24HourFormat(selectedTime.hour, selectedTime.period);
    if (disablePast && isTimeInPast(hour24, minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
    const hour24 = to24HourFormat(selectedTime.hour, period);
    if (disablePast && isTimeInPast(hour24, selectedTime.minute)) {
      return; // Prevent selecting past times
    }
    setSelectedTime(prev => ({ ...prev, period }));
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
    <div className="crisli-time-picker" style={{
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
          Hour
        </div>
        <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
          Minute
        </div>
        {!use24Hours && (
          <div style={{ flex: 1, textAlign: 'center', color: colors.labelColor, fontSize: '12px' }}>
            AM/PM
          </div>
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
            items={hours}
            value={selectedTime.hour}
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
            value={selectedTime.minute}
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
              value={selectedTime.period}
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
      </div>
    </div>
  );
};

export default TimePicker;
