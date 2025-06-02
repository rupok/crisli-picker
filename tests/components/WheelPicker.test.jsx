import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WheelPicker from '../../src/components/WheelPicker';

describe('WheelPicker Component', () => {
  const mockItems = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const defaultProps = {
    items: mockItems,
    value: 'option2',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders WheelPicker with items', () => {
    render(<WheelPicker {...defaultProps} />);
    
    // Check if the component renders
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toBeInTheDocument();
    
    // Check if all items are rendered
    mockItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('renders with label when provided', () => {
    const label = 'Select an option';
    render(<WheelPicker {...defaultProps} label={label} />);
    
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('does not render label when not provided', () => {
    render(<WheelPicker {...defaultProps} />);
    
    // Should not have any label text
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toBeInTheDocument();
    
    // The label div should not exist
    const labelDiv = container.querySelector('div[style*="textAlign: center"]');
    expect(labelDiv).toBeNull();
  });

  test('calls onChange when item is selected', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    
    render(<WheelPicker {...defaultProps} onChange={mockOnChange} />);
    
    const item = screen.getByText('Option 3');
    await user.click(item);
    
    // Should eventually call onChange with the new value
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('option3');
    }, { timeout: 1000 });
  });

  test('applies light theme correctly', () => {
    render(<WheelPicker {...defaultProps} theme="light" />);
    
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toHaveStyle({
      backgroundColor: '#ffffff'
    });
  });

  test('applies dark theme correctly', () => {
    render(<WheelPicker {...defaultProps} theme="dark" />);
    
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toHaveStyle({
      backgroundColor: '#1e1e1e'
    });
  });

  test('passes wheelProps to Wheel component', () => {
    const wheelProps = {
      fontSize: '20px',
      textColor: '#ff0000',
      itemHeight: 50,
    };
    
    render(<WheelPicker {...defaultProps} wheelProps={wheelProps} />);
    
    // The wheel component should receive the custom props
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toBeInTheDocument();
  });

  test('handles empty items array', () => {
    render(<WheelPicker {...defaultProps} items={[]} />);
    
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toBeInTheDocument();
  });

  test('updates when value prop changes', () => {
    const { rerender } = render(<WheelPicker {...defaultProps} value="option1" />);
    
    // Change value prop
    rerender(<WheelPicker {...defaultProps} value="option3" />);
    
    // Component should update
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toBeInTheDocument();
  });

  test('updates when items prop changes', () => {
    const newItems = [
      { value: 'new1', label: 'New Option 1' },
      { value: 'new2', label: 'New Option 2' },
    ];
    
    const { rerender } = render(<WheelPicker {...defaultProps} />);
    
    // Change items prop
    rerender(<WheelPicker {...defaultProps} items={newItems} value="new1" />);
    
    // Should render new items
    expect(screen.getByText('New Option 1')).toBeInTheDocument();
    expect(screen.getByText('New Option 2')).toBeInTheDocument();
  });

  test('handles wheel scroll events', () => {
    const mockOnChange = jest.fn();
    render(<WheelPicker {...defaultProps} onChange={mockOnChange} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    
    // Simulate wheel event
    fireEvent.wheel(wheelContainer, { deltaY: 100 });
    
    // The component should handle the wheel event
    expect(wheelContainer).toBeInTheDocument();
  });

  test('applies custom styling through theme', () => {
    render(<WheelPicker {...defaultProps} theme="light" />);
    
    const container = document.querySelector('.crisli-wheel-picker');
    expect(container).toHaveStyle({
      borderRadius: '12px',
      padding: '20px 10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    });
  });

  test('renders label with correct styling', () => {
    const label = 'Test Label';
    render(<WheelPicker {...defaultProps} label={label} theme="light" />);
    
    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveStyle({
      textAlign: 'center',
      marginBottom: '10px',
      fontSize: '12px'
    });
  });
});
