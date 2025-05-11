import React, { useState, useEffect } from 'react';
import Wheel from './Wheel';

/**
 * TimePicker component using the wheel picker
 *
 * @param {Object} props - Component props
 * @param {Date} props.value - Currently selected time
 * @param {Function} props.onChange - Callback when time changes
 * @param {boolean} props.use24Hours - Whether to use 24-hour format
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const TimePicker = ({
  value = new Date(),
  onChange,
  use24Hours = true,
  wheelProps = {},
  theme = 'light'
}) => {
  // Generate arrays for hours, minutes, and AM/PM
  const hours = use24Hours
    ? Array.from({ length: 24 }, (_, i) => ({
        value: i,
        label: i.toString().padStart(2, '0')
      }))
    : Array.from({ length: 12 }, (_, i) => ({
        value: i === 0 ? 12 : i,
        label: i === 0 ? '12' : i.toString()
      }));

  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0')
  }));

  const periods = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ];

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
  const to24HourFormat = (hour, period) => {
    if (period === 'AM') {
      return hour === 12 ? 0 : hour;
    } else {
      return hour === 12 ? 12 : hour + 12;
    }
  };

  // State for selected values
  const [selectedTime, setSelectedTime] = useState({
    hour: use24Hours ? value.getHours() : to12HourFormat(value.getHours()),
    minute: value.getMinutes(),
    period: getPeriod(value.getHours())
  });

  // Update the parent component when values change
  useEffect(() => {
    // Skip the initial render to prevent infinite loops
    const newDate = new Date(value);

    if (use24Hours) {
      newDate.setHours(selectedTime.hour);
    } else {
      newDate.setHours(to24HourFormat(selectedTime.hour, selectedTime.period));
    }

    newDate.setMinutes(selectedTime.minute);
    newDate.setSeconds(0);

    // Prevent unnecessary updates by checking if the time has actually changed
    if (
      newDate.getHours() !== value.getHours() ||
      newDate.getMinutes() !== value.getMinutes()
    ) {
      onChange(newDate);
    }
  }, [selectedTime, onChange, value, use24Hours, to24HourFormat]);

  // Handle individual wheel changes
  const handleHourChange = (hour) => {
    setSelectedTime(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    setSelectedTime(prev => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
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
