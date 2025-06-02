import React, { useState, useEffect } from 'react';
import { format, addDays, addMonths, addYears, addHours, addMinutes } from 'date-fns';
import Wheel from './Wheel';

/**
 * DateTimePicker component using the wheel picker
 *
 * @param {Object} props - Component props
 * @param {Date} props.value - Currently selected date
 * @param {Function} props.onChange - Callback when date changes
 * @param {boolean} props.showTime - Whether to show time picker
 * @param {boolean} props.use24Hours - Whether to use 24-hour format (default: true)
 * @param {Object} props.wheelProps - Props to pass to all wheels
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const DateTimePicker = ({
  value = new Date(),
  onChange,
  showTime = true,
  use24Hours = true,
  wheelProps = {},
  theme = 'light'
}) => {
  // Generate arrays for days, months, years, hours, minutes
  const generateDays = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`
    }));
  };

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: format(new Date(2000, i, 1), 'MMMM')
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => ({
    value: currentYear - 10 + i,
    label: `${currentYear - 10 + i}`
  }));

  const hours = use24Hours
    ? Array.from({ length: 24 }, (_, i) => ({
        value: i,
        label: i.toString().padStart(2, '0')
      }))
    : Array.from({ length: 12 }, (_, i) => ({
        value: i === 0 ? 12 : i,
        label: i === 0 ? '12' : i.toString()
      }));

  const periods = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' }
  ];

  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0')
  }));

  // Helper functions for 12-hour format
  const to12HourFormat = (hour) => {
    if (hour === 0) return 12;
    if (hour > 12) return hour - 12;
    return hour;
  };

  const getPeriod = (hour) => {
    return hour >= 12 ? 'PM' : 'AM';
  };

  const to24HourFormat = (hour, period) => {
    if (period === 'AM') {
      return hour === 12 ? 0 : hour;
    } else {
      return hour === 12 ? 12 : hour + 12;
    }
  };

  // State for selected values
  const [selectedDate, setSelectedDate] = useState({
    day: value.getDate(),
    month: value.getMonth(),
    year: value.getFullYear(),
    hour: use24Hours ? value.getHours() : to12HourFormat(value.getHours()),
    minute: value.getMinutes(),
    period: getPeriod(value.getHours())
  });

  // Generate days based on selected month and year
  const [days, setDays] = useState(generateDays(selectedDate.year, selectedDate.month + 1));

  // Update days when month or year changes
  useEffect(() => {
    setDays(generateDays(selectedDate.year, selectedDate.month + 1));

    // If the current day is invalid for the new month, adjust it
    const maxDay = new Date(selectedDate.year, selectedDate.month + 1, 0).getDate();
    if (selectedDate.day > maxDay) {
      setSelectedDate(prev => ({ ...prev, day: maxDay }));
    }
  }, [selectedDate.month, selectedDate.year]);

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

  // Handle individual wheel changes
  const handleDayChange = (day) => {
    setSelectedDate(prev => ({ ...prev, day }));
  };

  const handleMonthChange = (month) => {
    setSelectedDate(prev => ({ ...prev, month }));
  };

  const handleYearChange = (year) => {
    setSelectedDate(prev => ({ ...prev, year }));
  };

  const handleHourChange = (hour) => {
    setSelectedDate(prev => ({ ...prev, hour }));
  };

  const handleMinuteChange = (minute) => {
    setSelectedDate(prev => ({ ...prev, minute }));
  };

  const handlePeriodChange = (period) => {
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
