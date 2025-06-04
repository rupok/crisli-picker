import React from 'react';
import { render, act } from '@testing-library/react';
import TimePicker from '../../src/components/TimePicker';

describe('TimePicker Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('handles null value gracefully', () => {
    // This test specifically addresses the bug reported in issue #8
    expect(() => {
      act(() => {
        render(<TimePicker value={null} onChange={jest.fn()} />);
      });
    }).not.toThrow();
  });

  test('handles undefined value gracefully', () => {
    // This test specifically addresses the bug reported in issue #8
    expect(() => {
      act(() => {
        render(<TimePicker value={undefined} onChange={jest.fn()} />);
      });
    }).not.toThrow();
  });

  test('renders with valid date value', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    expect(() => {
      act(() => {
        render(<TimePicker value={validDate} onChange={jest.fn()} />);
      });
    }).not.toThrow();
  });

  test('handles null to valid date transition', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    const mockOnChange = jest.fn();

    const { rerender } = render(
      <TimePicker value={null} onChange={mockOnChange} />
    );

    // Change from null to valid date should not crash
    expect(() => {
      act(() => {
        rerender(<TimePicker value={validDate} onChange={mockOnChange} />);
      });
    }).not.toThrow();
  });

  test('handles valid date to null transition', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    const mockOnChange = jest.fn();

    const { rerender } = render(
      <TimePicker value={validDate} onChange={mockOnChange} />
    );

    // Change from valid date to null should not crash
    expect(() => {
      act(() => {
        rerender(<TimePicker value={null} onChange={mockOnChange} />);
      });
    }).not.toThrow();
  });

  // Time step tests
  test('handles minuteStep prop correctly', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    expect(() => {
      act(() => {
        render(<TimePicker value={validDate} onChange={jest.fn()} minuteStep={15} />);
      });
    }).not.toThrow();
  });

  test('handles hourStep prop correctly', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    expect(() => {
      act(() => {
        render(<TimePicker value={validDate} onChange={jest.fn()} hourStep={2} />);
      });
    }).not.toThrow();
  });

  test('handles both minuteStep and hourStep props', () => {
    const validDate = new Date('2023-06-15T14:30:00');
    expect(() => {
      act(() => {
        render(<TimePicker value={validDate} onChange={jest.fn()} minuteStep={15} hourStep={2} />);
      });
    }).not.toThrow();
  });

  test('handles time step with null value gracefully', () => {
    expect(() => {
      act(() => {
        render(<TimePicker value={null} onChange={jest.fn()} minuteStep={15} hourStep={2} />);
      });
    }).not.toThrow();
  });
});
