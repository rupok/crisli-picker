import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wheel from '../../src/components/Wheel';

describe('Wheel Component', () => {
  const mockItems = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
  ];

  const defaultProps = {
    items: mockItems,
    value: 2,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders wheel with items', () => {
    render(<Wheel {...defaultProps} />);
    
    // Check if all items are rendered
    mockItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('highlights selected item', () => {
    render(<Wheel {...defaultProps} />);
    
    const selectedItem = screen.getByText('Option 2');
    expect(selectedItem).toBeInTheDocument();
    
    // The selected item should have different styling
    expect(selectedItem.parentElement).toHaveStyle({
      fontWeight: '600'
    });
  });

  test('calls onChange when item is clicked', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    
    render(<Wheel {...defaultProps} onChange={mockOnChange} />);
    
    const item = screen.getByText('Option 3');
    await user.click(item);
    
    // Should eventually call onChange with the new value
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith(3);
    }, { timeout: 1000 });
  });

  test('applies custom styling props', () => {
    const customProps = {
      ...defaultProps,
      fontSize: '20px',
      textColor: '#ff0000',
      selectedTextColor: '#00ff00',
      itemHeight: 50,
    };
    
    render(<Wheel {...customProps} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    expect(wheelContainer).toHaveStyle({
      height: '250px' // 5 * 50px
    });
  });

  test('handles wheel scroll events', () => {
    const mockOnChange = jest.fn();
    render(<Wheel {...defaultProps} onChange={mockOnChange} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    
    // Simulate wheel event
    fireEvent.wheel(wheelContainer, { deltaY: 100 });
    
    // The component should handle the wheel event
    expect(wheelContainer).toBeInTheDocument();
  });

  test('handles touch events', () => {
    const mockOnChange = jest.fn();
    render(<Wheel {...defaultProps} onChange={mockOnChange} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    
    // Simulate touch events
    fireEvent.touchStart(wheelContainer, {
      touches: [{ clientY: 100 }]
    });
    
    fireEvent.touchMove(wheelContainer, {
      touches: [{ clientY: 150 }]
    });
    
    fireEvent.touchEnd(wheelContainer);
    
    // The component should handle touch events
    expect(wheelContainer).toBeInTheDocument();
  });

  test('handles mouse drag events', () => {
    const mockOnChange = jest.fn();
    render(<Wheel {...defaultProps} onChange={mockOnChange} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    
    // Simulate mouse drag
    fireEvent.mouseDown(wheelContainer, { clientY: 100 });
    fireEvent.mouseMove(document, { clientY: 150 });
    fireEvent.mouseUp(document);
    
    // The component should handle mouse events
    expect(wheelContainer).toBeInTheDocument();
  });

  test('renders with empty items array', () => {
    render(<Wheel {...defaultProps} items={[]} />);
    
    const wheelContainer = document.querySelector('.crisli-wheel-container');
    expect(wheelContainer).toBeInTheDocument();
  });

  test('updates when value prop changes', () => {
    const { rerender } = render(<Wheel {...defaultProps} value={1} />);
    
    // Initially should show Option 1 as selected
    let selectedItem = screen.getByText('Option 1');
    expect(selectedItem.parentElement).toHaveStyle({
      fontWeight: '600'
    });
    
    // Change value prop
    rerender(<Wheel {...defaultProps} value={3} />);
    
    // Now Option 3 should be selected
    selectedItem = screen.getByText('Option 3');
    expect(selectedItem.parentElement).toHaveStyle({
      fontWeight: '600'
    });
  });

  test('applies theme colors correctly', () => {
    const customProps = {
      ...defaultProps,
      highlightColor: 'rgba(255, 0, 0, 0.1)',
      highlightBorderColor: 'rgba(255, 0, 0, 0.3)',
    };
    
    render(<Wheel {...customProps} />);
    
    const highlight = document.querySelector('.crisli-wheel-highlight');
    expect(highlight).toHaveStyle({
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      borderColor: 'rgba(255, 0, 0, 0.3)'
    });
  });
});
