import React from 'react';
import Wheel from './Wheel';

/**
 * Generic WheelPicker component for selecting from a list of options
 * 
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display in the picker
 * @param {any} props.value - Currently selected value
 * @param {Function} props.onChange - Callback when value changes
 * @param {string} props.label - Label for the picker
 * @param {Object} props.wheelProps - Props to pass to the wheel
 * @param {string} props.theme - Theme for the picker ('light' or 'dark')
 */
const WheelPicker = ({ 
  items = [], 
  value, 
  onChange,
  label,
  wheelProps = {},
  theme = 'light'
}) => {
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
    <div className="crisli-wheel-picker" style={{ 
      backgroundColor: colors.backgroundColor,
      borderRadius: '12px',
      padding: '20px 10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Label */}
      {label && (
        <div style={{ 
          textAlign: 'center',
          marginBottom: '10px',
          color: colors.labelColor,
          fontSize: '12px'
        }}>
          {label}
        </div>
      )}
      
      {/* Wheel */}
      <Wheel 
        items={items} 
        value={value} 
        onChange={onChange}
        textColor={colors.textColor}
        selectedTextColor={colors.selectedTextColor}
        highlightColor={colors.highlightColor}
        highlightBorderColor={colors.highlightBorderColor}
        {...wheelProps}
      />
    </div>
  );
};

export default WheelPicker;
