import * as React from 'react';

// Common types
export type Theme = 'light' | 'dark';

export interface WheelItem {
  value: any;
  label: string;
  disabled?: boolean;
}

// Base wheel props that can be passed to any wheel component
export interface WheelProps {
  items: WheelItem[];
  value: any;
  onChange: (value: any) => void;
  itemHeight?: number;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  selectedTextColor?: string;
  highlightColor?: string;
  highlightBorderColor?: string;
}

// Props that can be passed to customize wheels within picker components
export interface WheelCustomProps {
  itemHeight?: number;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  selectedTextColor?: string;
  highlightColor?: string;
  highlightBorderColor?: string;
}

// DateTimePicker component props
export interface DateTimePickerProps {
  /**
   * The selected date and time
   */
  value?: Date;
  /**
   * Callback when date/time changes
   */
  onChange: (date: Date) => void;
  /**
   * Whether to show time picker wheels
   * @default true
   */
  showTime?: boolean;
  /**
   * Whether to use 24-hour format
   * @default true
   */
  use24Hours?: boolean;
  /**
   * Step interval for minutes (e.g., 15 for 15-minute intervals)
   * @default 1
   */
  minuteStep?: number;
  /**
   * Step interval for hours (e.g., 2 for 2-hour intervals)
   * @default 1
   */
  hourStep?: number;
  /**
   * Whether to disable past dates and times
   * @default false
   */
  disablePast?: boolean;
  /**
   * Props to pass to all wheels
   * @default {}
   */
  wheelProps?: WheelCustomProps;
  /**
   * Theme for the picker
   * @default 'light'
   */
  theme?: Theme;
}

// TimePicker component props
export interface TimePickerProps {
  /**
   * The selected time
   */
  value?: Date;
  /**
   * Callback when time changes
   */
  onChange: (date: Date) => void;
  /**
   * Whether to use 24-hour format
   * @default true
   */
  use24Hours?: boolean;
  /**
   * Step interval for minutes (e.g., 15 for 15-minute intervals)
   * @default 1
   */
  minuteStep?: number;
  /**
   * Step interval for hours (e.g., 2 for 2-hour intervals)
   * @default 1
   */
  hourStep?: number;
  /**
   * Whether to disable past times (for current day)
   * @default false
   */
  disablePast?: boolean;
  /**
   * Props to pass to all wheels
   * @default {}
   */
  wheelProps?: WheelCustomProps;
  /**
   * Theme for the picker
   * @default 'light'
   */
  theme?: Theme;
}

// WheelPicker component props
export interface WheelPickerProps {
  /**
   * Array of items to display in the picker
   */
  items: WheelItem[];
  /**
   * Currently selected value
   */
  value: any;
  /**
   * Callback when value changes
   */
  onChange: (value: any) => void;
  /**
   * Label for the picker
   */
  label?: string;
  /**
   * Props to pass to the wheel
   * @default {}
   */
  wheelProps?: WheelCustomProps;
  /**
   * Theme for the picker
   * @default 'light'
   */
  theme?: Theme;
}

// CalendarTimePicker component props
export interface CalendarTimePickerProps {
  /**
   * The selected date and time
   */
  value?: Date;
  /**
   * Callback when date/time changes
   */
  onChange: (date: Date) => void;
  /**
   * Whether to show time picker
   * @default true
   */
  showTime?: boolean;
  /**
   * Whether to use 24-hour format
   * @default true
   */
  use24Hours?: boolean;
  /**
   * Step interval for minutes (e.g., 15 for 15-minute intervals)
   * @default 1
   */
  minuteStep?: number;
  /**
   * Step interval for hours (e.g., 2 for 2-hour intervals)
   * @default 1
   */
  hourStep?: number;
  /**
   * Whether to disable past dates and times
   * @default false
   */
  disablePast?: boolean;
  /**
   * Props to pass to all wheels
   * @default {}
   */
  wheelProps?: WheelCustomProps;
  /**
   * Theme for the picker
   * @default 'light'
   */
  theme?: Theme;
}

// HorizontalCalendarTimePicker component props
export interface HorizontalCalendarTimePickerProps {
  /**
   * The selected date and time
   */
  value?: Date;
  /**
   * Callback when date/time changes
   */
  onChange: (date: Date) => void;
  /**
   * Whether to show time picker
   * @default true
   */
  showTime?: boolean;
  /**
   * Whether to use 24-hour format
   * @default true
   */
  use24Hour?: boolean;
  /**
   * Step interval for minutes (e.g., 15 for 15-minute intervals)
   * @default 1
   */
  minuteStep?: number;
  /**
   * Step interval for hours (e.g., 2 for 2-hour intervals)
   * @default 1
   */
  hourStep?: number;
  /**
   * Whether to disable past dates and times
   * @default false
   */
  disablePast?: boolean;
  /**
   * Props to pass to all wheels
   * @default {}
   */
  wheelProps?: WheelCustomProps;
  /**
   * Theme for the picker
   * @default 'light'
   */
  theme?: Theme;
  /**
   * Additional CSS class for the component
   */
  className?: string;
  /**
   * Additional inline styles for the component
   */
  style?: React.CSSProperties;
  /**
   * Format for displaying time
   * @default 'HH:mm'
   */
  timeFormat?: string;
}

// Component declarations
export declare const Wheel: React.FC<WheelProps>;
export declare const DateTimePicker: React.FC<DateTimePickerProps>;
export declare const TimePicker: React.FC<TimePickerProps>;
export declare const WheelPicker: React.FC<WheelPickerProps>;
export declare const CalendarTimePicker: React.FC<CalendarTimePickerProps>;
export declare const HorizontalCalendarTimePicker: React.FC<HorizontalCalendarTimePickerProps>;

// Default export (if needed)
export interface CrisliPickerComponents {
  Wheel: React.FC<WheelProps>;
  DateTimePicker: React.FC<DateTimePickerProps>;
  TimePicker: React.FC<TimePickerProps>;
  WheelPicker: React.FC<WheelPickerProps>;
  CalendarTimePicker: React.FC<CalendarTimePickerProps>;
  HorizontalCalendarTimePicker: React.FC<HorizontalCalendarTimePickerProps>;
}

declare const CrisliPicker: CrisliPickerComponents;
export default CrisliPicker;
