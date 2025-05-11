# Crisli Picker

A modern, customizable date and time picker library for React applications, inspired by mobile date/time pickers.

## Features

- 🎡 Smooth wheel-based pickers with mobile-like scrolling
- 📅 Calendar date selection with intuitive interface
- 🕒 Time selection with hour and minute wheels
- 🌗 Light and dark theme support
- 📱 Responsive design for both mobile and desktop
- 🧩 Multiple component variants for different use cases
- 👆 Touch and mouse support

## Installation

```bash
npm install @crisli/picker
# or
yarn add @crisli/picker
```

## Usage

### DateTimePicker

```jsx
import { DateTimePicker } from '@crisli/picker';

function MyComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      showTime={true}
      theme="light"
    />
  );
}
```

### TimePicker

```jsx
import { TimePicker } from '@crisli/picker';

function MyComponent() {
  const [time, setTime] = useState(new Date());

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      use24Hour={true}
      theme="light"
    />
  );
}
```

### CalendarTimePicker

```jsx
import { CalendarTimePicker } from '@crisli/picker';

function MyComponent() {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <CalendarTimePicker
      value={dateTime}
      onChange={setDateTime}
      theme="light" // or "dark"
      showTime={true} // can be set to false to hide time selection
    />
  );
}
```

### HorizontalCalendarTimePicker

```jsx
import { HorizontalCalendarTimePicker } from '@crisli/picker';

function MyComponent() {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <HorizontalCalendarTimePicker
      value={dateTime}
      onChange={setDateTime}
      theme="light" // or "dark"
      showTime={true} // can be set to false to hide time selection
      use24Hour={true} // set to false for 12-hour format with AM/PM
    />
  );
}
```

### WheelPicker

```jsx
import { WheelPicker } from '@crisli/picker';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <WheelPicker
      items={options}
      value={selectedOption}
      onChange={setSelectedOption}
      label="Select an option"
      theme="light"
    />
  );
}
```

## API Reference

### DateTimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected date and time |
| `onChange` | `function` | required | Callback when date changes |
| `showTime` | `boolean` | `true` | Whether to show time picker |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### TimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected time |
| `onChange` | `function` | required | Callback when time changes |
| `use24Hour` | `boolean` | `true` | Whether to use 24-hour format |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### CalendarTimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected date and time |
| `onChange` | `function` | required | Callback when date/time changes |
| `showTime` | `boolean` | `true` | Whether to show time picker |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### HorizontalCalendarTimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected date and time |
| `onChange` | `function` | required | Callback when date/time changes |
| `showTime` | `boolean` | `true` | Whether to show time picker |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |
| `className` | `string` | `''` | Additional CSS class for the component |
| `style` | `object` | `{}` | Additional inline styles for the component |
| `use24Hour` | `boolean` | `true` | Whether to use 24-hour format |
| `timeFormat` | `string` | `'HH:mm'` | Format for displaying time |

### WheelPicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of items to display in the picker |
| `value` | `any` | required | Currently selected value |
| `onChange` | `function` | required | Callback when value changes |
| `label` | `string` | `undefined` | Label for the picker |
| `wheelProps` | `object` | `{}` | Props to pass to the wheel |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### Wheel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | required | Array of items to display in the wheel |
| `value` | `any` | required | Currently selected value |
| `onChange` | `function` | required | Callback when value changes |
| `itemHeight` | `number` | `40` | Height of each item in pixels |
| `fontSize` | `string` | `'16px'` | Font size for the items |
| `fontWeight` | `string` | `'400'` | Font weight for the items |
| `textColor` | `string` | `'#666'` | Text color for the items |
| `selectedTextColor` | `string` | `'#000'` | Text color for the selected item |
| `highlightColor` | `string` | `'rgba(0, 0, 0, 0.05)'` | Background color for the selected item highlight |
| `highlightBorderColor` | `string` | `'rgba(0, 0, 0, 0.1)'` | Border color for the selected item highlight |

## License

MIT
