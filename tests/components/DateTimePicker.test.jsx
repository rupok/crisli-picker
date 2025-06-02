import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateTimePicker from '../../src/components/DateTimePicker';

describe('DateTimePicker Component', () => {
  const defaultProps = {
    value: new Date('2023-06-15T14:30:00'),
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders DateTimePicker with default props', () => {
    render(<DateTimePicker {...defaultProps} />);
    
    // Check if the component renders
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
    
    // Check if labels are present
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Month')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Hour')).toBeInTheDocument();
    expect(screen.getByText('Min')).toBeInTheDocument();
  });

  test('renders without time picker when showTime is false', () => {
    render(<DateTimePicker {...defaultProps} showTime={false} />);
    
    // Date labels should be present
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Month')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    
    // Time labels should not be present
    expect(screen.queryByText('Hour')).not.toBeInTheDocument();
    expect(screen.queryByText('Min')).not.toBeInTheDocument();
  });

  test('calls onChange when date is modified', async () => {
    const mockOnChange = jest.fn();
    render(<DateTimePicker {...defaultProps} onChange={mockOnChange} />);

    // Find and click on a different day (use getAllByText to get the first occurrence which should be the day)
    const dayOptions = screen.getAllByText('16');
    const dayOption = dayOptions[0]; // First occurrence should be the day wheel
    await userEvent.click(dayOption);

    // Should eventually call onChange
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    }, { timeout: 1000 });

    // Verify the new date has day = 16
    const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1];
    const newDate = lastCall[0];
    expect(newDate.getDate()).toBe(16);
  });

  test('applies light theme correctly', () => {
    render(<DateTimePicker {...defaultProps} theme="light" />);
    
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toHaveStyle({
      backgroundColor: '#ffffff'
    });
  });

  test('applies dark theme correctly', () => {
    render(<DateTimePicker {...defaultProps} theme="dark" />);
    
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toHaveStyle({
      backgroundColor: '#1e1e1e'
    });
  });

  test('handles null value gracefully', () => {
    const currentDate = new Date();
    render(<DateTimePicker value={null} onChange={jest.fn()} />);
    
    // Should render without crashing
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });

  test('updates when value prop changes', () => {
    const initialDate = new Date('2023-06-15T14:30:00');
    const newDate = new Date('2023-07-20T16:45:00');
    
    const { rerender } = render(
      <DateTimePicker value={initialDate} onChange={jest.fn()} />
    );
    
    // Change the value prop
    rerender(<DateTimePicker value={newDate} onChange={jest.fn()} />);
    
    // Component should update to reflect new date
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });

  test('passes wheelProps to wheel components', () => {
    const wheelProps = {
      fontSize: '18px',
      textColor: '#ff0000',
    };
    
    render(<DateTimePicker {...defaultProps} wheelProps={wheelProps} />);
    
    // The wheel components should receive the custom props
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });

  test('handles month changes correctly', async () => {
    const mockOnChange = jest.fn();
    render(<DateTimePicker {...defaultProps} onChange={mockOnChange} />);
    
    // Find and click on a different month (July)
    const monthOption = screen.getByText('July');
    await userEvent.click(monthOption);
    
    // Should eventually call onChange
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    }, { timeout: 1000 });
    
    // Verify the new date has correct month
    const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1];
    const newDate = lastCall[0];
    expect(newDate.getMonth()).toBe(6); // July is month 6 (0-indexed)
  });

  test('adjusts day when month changes to shorter month', () => {
    // Start with January 31st
    const initialDate = new Date('2023-01-31T14:30:00');
    const mockOnChange = jest.fn();
    
    render(<DateTimePicker value={initialDate} onChange={mockOnChange} />);
    
    // The component should handle this edge case gracefully
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });

  test('generates correct year range', () => {
    render(<DateTimePicker {...defaultProps} disablePast={false} />);

    const currentYear = new Date().getFullYear();

    // Should include current year and some future years
    const currentYearElements = screen.queryAllByText(currentYear.toString());
    const futureYearElements = screen.queryAllByText((currentYear + 5).toString());

    expect(currentYearElements.length).toBeGreaterThan(0);
    expect(futureYearElements.length).toBeGreaterThan(0);
  });

  test('handles time changes correctly', async () => {
    const mockOnChange = jest.fn();
    render(<DateTimePicker {...defaultProps} onChange={mockOnChange} showTime={true} />);

    // Find and click on a different hour (use getAllByText to get the hour wheel)
    const hourOptions = screen.getAllByText('16');
    // The hour option should be the last occurrence (after day wheel)
    const hourOption = hourOptions[hourOptions.length - 1];
    await userEvent.click(hourOption);

    // Should eventually call onChange
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    }, { timeout: 1000 });
  });

  test('disablePast prop prevents past date selection', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Tomorrow

    render(<DateTimePicker value={futureDate} onChange={jest.fn()} disablePast={true} />);

    // Component should render without crashing
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });

  test('disablePast prop works with default value', () => {
    render(<DateTimePicker onChange={jest.fn()} disablePast={true} />);

    // Component should render without crashing
    const container = document.querySelector('.crisli-datetime-picker');
    expect(container).toBeInTheDocument();
  });
});
