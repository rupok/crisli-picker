import * as React from 'react';

export interface WheelItem {
  value: any;
  label: string;
}

export interface WheelProps {
  /**
   * Array of items to display in the wheel
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
   * Height of each item in pixels
   * @default 40
   */
  itemHeight?: number;
  /**
   * Font size for the items
   * @default '16px'
   */
  fontSize?: string;
  /**
   * Font weight for the items
   * @default '400'
   */
  fontWeight?: string;
  /**
   * Text color for the items
   * @default '#666'
   */
  textColor?: string;
  /**
   * Text color for the selected item
   * @default '#000'
   */
  selectedTextColor?: string;
  /**
   * Background color for the selected item highlight
   * @default 'rgba(0, 0, 0, 0.05)'
   */
  highlightColor?: string;
  /**
   * Border color for the selected item highlight
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  highlightBorderColor?: string;
}

declare const Wheel: React.FC<WheelProps>;
export default Wheel;
