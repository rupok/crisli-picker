# Crisli Picker

A modern, customizable date and time picker library for React applications with configurable time intervals, inspired by mobile date/time pickers.

Originally created for [Crisli App](https://crisli.app) and now available as an open-source library for the React community.

## 🎡 [Live Demo](https://rupok.github.io/crisli-picker/) | [NPM Package](https://www.npmjs.com/package/crisli-picker) | [GitHub](https://github.com/rupok/crisli-picker)

## Features

### **🎡 Core Components**
- **Smooth wheel-based pickers** with mobile-like scrolling and momentum
- **Calendar date selection** with intuitive interface
- **Time selection** with hour and minute wheels (**12-hour with AM/PM** or **24-hour formats**)
- **⏰ Time step intervals** - Configure 5, 15, 30-minute intervals for appointment booking
- **Generic wheel picker** for custom option lists
- **Horizontal calendar layout** for better space utilization

### **🎨 Design & Theming**
- **Light and dark theme support** with customizable colors
- **Responsive design** optimized for mobile, tablet, and desktop
- **Touch and mouse support** with gesture recognition
- **Smooth animations** and transitions
- **Customizable styling** for fonts, colors, and dimensions

### **⚡ Developer Experience**
- **TypeScript support** with comprehensive type definitions
- **Works with both JSX and TSX** projects seamlessly
- **Comprehensive test suite** with Jest + React Testing Library
- **Interactive demo application** with live examples
- **Complete documentation** and API reference
- **Modern build system** with Rollup (CommonJS + ESM)

### **📱 Accessibility & UX**
- **Mobile-first design** with touch optimization
- **Keyboard navigation** support
- **Screen reader friendly** with proper ARIA labels
- **Momentum scrolling** like native mobile pickers
- **Edge case handling** (null values, date boundaries)
- **🚫 Disable past dates/times** - perfect for booking and scheduling systems

## Installation

```bash
npm install crisli-picker
# or
yarn add crisli-picker
```

## TypeScript Support

This package includes comprehensive TypeScript definitions. Both JSX and TSX projects are fully supported:

### JSX Projects
```jsx
// Works perfectly - no changes needed
import { DateTimePicker } from 'crisli-picker';

function MyComponent() {
  const [date, setDate] = useState(new Date());
  return <DateTimePicker value={date} onChange={setDate} />;
}
```

### TSX Projects
```tsx
// Gets full TypeScript support automatically
import { DateTimePicker } from 'crisli-picker';

const MyComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <DateTimePicker
      value={date}           // ✅ Type checked
      onChange={setDate}     // ✅ Type checked
      theme="light"          // ✅ Autocomplete: "light" | "dark"
      showTime={true}        // ✅ IntelliSense shows all props
    />
  );
};
```

## Usage

### DateTimePicker

```jsx
import { DateTimePicker } from 'crisli-picker';

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
import { TimePicker } from 'crisli-picker';

function MyComponent() {
  const [time, setTime] = useState(new Date());

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      use24Hours={true}  // or false for 12-hour format with AM/PM
      theme="light"
    />
  );
}
```

### ⏰ Time Step Intervals (NEW!)

Configure time intervals for more efficient time selection - perfect for appointment booking and scheduling systems:

```jsx
import { TimePicker, DateTimePicker, CalendarTimePicker } from 'crisli-picker';

// 15-minute intervals: 00:00, 00:15, 00:30, 00:45, etc.
<TimePicker
  value={time}
  onChange={setTime}
  minuteStep={15}  // ⏰ 15-minute intervals
  use24Hours={true}
/>

// 30-minute intervals with 12-hour format
<TimePicker
  value={time}
  onChange={setTime}
  minuteStep={30}  // ⏰ 30-minute intervals
  use24Hours={false}
/>

// Custom intervals: 5-minute steps with 2-hour steps
<TimePicker
  value={time}
  onChange={setTime}
  minuteStep={5}   // ⏰ 5-minute intervals
  hourStep={2}     // ⏰ 2-hour intervals (00:xx, 02:xx, 04:xx, etc.)
/>

// Works with all time picker components
<DateTimePicker
  value={dateTime}
  onChange={setDateTime}
  minuteStep={15}  // ⏰ Perfect for appointment booking
  disablePast={true}
/>

<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  minuteStep={30}  // ⏰ 30-minute scheduling slots
  hourStep={1}     // ⏰ Every hour (default)
/>
```

**Perfect for:**
- 📅 **Appointment Booking** (15 or 30-minute slots)
- 🏥 **Medical Scheduling** (15-minute intervals)
- 🎬 **Event Planning** (30-minute or 1-hour slots)
- 🚗 **Service Booking** (Custom intervals)
- 📞 **Meeting Scheduling** (15 or 30-minute meetings)

**Features:**
- ✅ **Smart Value Snapping** - Automatically snaps to nearest valid interval
- ✅ **Independent Control** - Set different steps for minutes and hours
- ✅ **Backward Compatible** - Default behavior unchanged (step = 1)
- ✅ **Performance Optimized** - Only generates valid time options
- ✅ **Works with All Components** - TimePicker, DateTimePicker, CalendarTimePicker, HorizontalCalendarTimePicker

### 12-Hour Format Support

All time-related components support both 24-hour and 12-hour formats:

```jsx
// 24-hour format (default)
<DateTimePicker use24Hours={true} />
<TimePicker use24Hours={true} />
<CalendarTimePicker use24Hours={true} />
<HorizontalCalendarTimePicker use24Hour={true} />

// 12-hour format with AM/PM wheel
<DateTimePicker use24Hours={false} />
<TimePicker use24Hours={false} />
<CalendarTimePicker use24Hours={false} />
<HorizontalCalendarTimePicker use24Hour={false} />
```

### CalendarTimePicker

```jsx
import { CalendarTimePicker } from 'crisli-picker';

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
import { HorizontalCalendarTimePicker } from 'crisli-picker';

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

### 🚫 Disable Past Dates/Times

Perfect for booking systems, appointment scheduling, and any scenario where past dates/times should not be selectable:

```jsx
// Disable past dates and times - only future selections allowed
<DateTimePicker
  value={dateTime}
  onChange={setDateTime}
  disablePast={true}  // 🚫 Prevents past date/time selection
  use24Hours={false}  // Works with both 12-hour and 24-hour formats
/>

// Time-only picker with past time restriction (for today)
<TimePicker
  value={time}
  onChange={setTime}
  disablePast={true}  // 🚫 Only future times selectable
/>

// Calendar with future-only dates
<CalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  disablePast={true}  // 🚫 Past dates are grayed out and unselectable
  showTime={true}
/>

// Horizontal layout for booking interfaces
<HorizontalCalendarTimePicker
  value={dateTime}
  onChange={setDateTime}
  disablePast={true}  // 🚫 Perfect for appointment booking
  use24Hour={true}
/>
```

**Features:**
- ✅ **Past dates** are visually disabled (grayed out with strikethrough)
- ✅ **Past times** are disabled when today is selected
- ✅ **Click/touch prevention** on disabled items
- ✅ **Automatic scrolling** skips disabled items
- ✅ **Visual feedback** with reduced opacity and strikethrough text
- ✅ **Works with all components** (DateTimePicker, TimePicker, CalendarTimePicker, HorizontalCalendarTimePicker)

### WheelPicker

```jsx
import { WheelPicker } from 'crisli-picker';

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
| `use24Hours` | `boolean` | `true` | Whether to use 24-hour format |
| `minuteStep` | `number` | `1` | ⏰ **NEW!** Step interval for minutes (e.g., 15 for 15-minute intervals) |
| `hourStep` | `number` | `1` | ⏰ **NEW!** Step interval for hours (e.g., 2 for 2-hour intervals) |
| `disablePast` | `boolean` | `false` | Whether to disable past dates/times |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### TimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected time |
| `onChange` | `function` | required | Callback when time changes |
| `use24Hours` | `boolean` | `true` | Whether to use 24-hour format |
| `minuteStep` | `number` | `1` | ⏰ **NEW!** Step interval for minutes (e.g., 15 for 15-minute intervals) |
| `hourStep` | `number` | `1` | ⏰ **NEW!** Step interval for hours (e.g., 2 for 2-hour intervals) |
| `disablePast` | `boolean` | `false` | Whether to disable past times (for today) |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### CalendarTimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected date and time |
| `onChange` | `function` | required | Callback when date/time changes |
| `showTime` | `boolean` | `true` | Whether to show time picker |
| `use24Hours` | `boolean` | `true` | Whether to use 24-hour format |
| `minuteStep` | `number` | `1` | ⏰ **NEW!** Step interval for minutes (e.g., 15 for 15-minute intervals) |
| `hourStep` | `number` | `1` | ⏰ **NEW!** Step interval for hours (e.g., 2 for 2-hour intervals) |
| `disablePast` | `boolean` | `false` | Whether to disable past dates/times |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |

### HorizontalCalendarTimePicker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | `new Date()` | The selected date and time |
| `onChange` | `function` | required | Callback when date/time changes |
| `showTime` | `boolean` | `true` | Whether to show time picker |
| `use24Hour` | `boolean` | `true` | Whether to use 24-hour format |
| `minuteStep` | `number` | `1` | ⏰ **NEW!** Step interval for minutes (e.g., 15 for 15-minute intervals) |
| `hourStep` | `number` | `1` | ⏰ **NEW!** Step interval for hours (e.g., 2 for 2-hour intervals) |
| `disablePast` | `boolean` | `false` | Whether to disable past dates/times |
| `wheelProps` | `object` | `{}` | Props to pass to all wheels |
| `theme` | `string` | `'light'` | Theme for the picker ('light' or 'dark') |
| `className` | `string` | `''` | Additional CSS class for the component |
| `style` | `object` | `{}` | Additional inline styles for the component |
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
| `items` | `array` | required | Array of items to display in the wheel. Each item can have a `disabled` property |
| `value` | `any` | required | Currently selected value |
| `onChange` | `function` | required | Callback when value changes |
| `itemHeight` | `number` | `40` | Height of each item in pixels |
| `fontSize` | `string` | `'16px'` | Font size for the items |
| `fontWeight` | `string` | `'400'` | Font weight for the items |
| `textColor` | `string` | `'#666'` | Text color for the items |
| `selectedTextColor` | `string` | `'#000'` | Text color for the selected item |
| `highlightColor` | `string` | `'rgba(0, 0, 0, 0.05)'` | Background color for the selected item highlight |
| `highlightBorderColor` | `string` | `'rgba(0, 0, 0, 0.1)'` | Border color for the selected item highlight |

**Item Object Structure:**
```jsx
{
  value: any,        // The value of the item
  label: string,     // Display text for the item
  disabled?: boolean // Optional: whether the item is disabled
}
```

## 🚀 Live Demo

Experience Crisli Picker with our comprehensive demo applications:

### **🎨 Interactive Demo** (Recommended)
**URL**: http://localhost:3001 (when running locally) | [Live Demo](https://rupok.github.io/crisli-picker/)

A modern, full-featured demo built with Vite + React featuring:

- **🏠 Home Page**: Hero section, feature overview, and quick component demos
- **🧩 Components Page**: Detailed showcase of all 5 components with live code examples
- **📋 Examples Page**: Real-world use cases including appointment booking form
- **📚 Documentation Page**: Complete API reference and TypeScript support guide
- **🌗 Theme Switching**: Toggle between light and dark themes
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile
- **⚡ Hot Reload**: Instant updates during development

### **📄 Simple Demo**
**URL**: http://localhost:3000 (when running locally)

A lightweight HTML demo for quick testing and basic component exploration.

## Development

### Running the Demo Locally

```bash
# Install dependencies
npm install

# Install demo dependencies
cd demo && npm install && cd ..

# Start development server (builds library + runs demo)
npm run dev
```

**Available URLs:**
- **Vite Demo**: http://localhost:3001 (full-featured)
- **Simple Demo**: http://localhost:3000 (basic HTML)

### Demo-Only Development

```bash
# Run only the Vite demo (without library rebuild)
npm run demo:dev

# Build demo for production
npm run demo:build

# Preview production demo build
npm run demo:preview
```

### Building the Library

```bash
# Build the library
npm run build

# Build with watch mode
npm run build:watch
```

### Testing

Comprehensive test suite using Jest + React Testing Library:

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

**Test Coverage:**
- ✅ **Component rendering** and prop handling
- ✅ **User interactions** (clicks, scrolls, touch events)
- ✅ **Theme switching** and styling
- ✅ **Edge cases** (null values, empty arrays)
- ✅ **Accessibility** and keyboard navigation

**Test Files:**
- `tests/components/Wheel.test.jsx` - Core wheel component tests
- `tests/components/DateTimePicker.test.jsx` - Date/time picker tests
- `tests/components/WheelPicker.test.jsx` - Generic wheel picker tests
- `tests/setup.js` - Test environment configuration

### Type Checking

```bash
# Check TypeScript definitions
npm run type-check
```

### Linting

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
crisli-picker/
├── src/                          # Library source code
│   ├── components/               # React components
│   │   ├── Wheel.jsx            # Core wheel component
│   │   ├── DateTimePicker.jsx   # Date & time picker
│   │   ├── TimePicker.jsx       # Time-only picker
│   │   ├── WheelPicker.jsx      # Generic wheel picker
│   │   ├── CalendarTimePicker.jsx
│   │   └── HorizontalCalendarTimePicker.jsx
│   ├── types/                   # TypeScript definitions
│   │   ├── index.d.ts          # Main type definitions
│   │   ├── Wheel.d.ts          # Wheel component types
│   │   └── tsconfig.json       # TypeScript config
│   └── index.js                # Main entry point
├── demo/                        # Vite demo application
│   ├── src/
│   │   ├── components/         # Demo-specific components
│   │   ├── pages/             # Demo pages (Home, Components, etc.)
│   │   ├── App.jsx            # Main demo app
│   │   └── main.jsx           # Demo entry point
│   ├── package.json           # Demo dependencies
│   └── vite.config.js         # Vite configuration
├── tests/                       # Test suite
│   ├── components/             # Component tests
│   └── setup.js               # Test configuration
├── dist/                       # Built library files
│   ├── index.js               # CommonJS build
│   ├── index.esm.js           # ES Module build
│   └── *.map                  # Source maps
├── demo-full.html              # Simple HTML demo
├── demo-server.js              # Simple demo server
├── package.json                # Main package configuration
├── rollup.config.js            # Build configuration
└── README.md                   # This file
```

## 🛠 Development Workflow

### **For Library Development:**
1. Make changes to components in `src/components/`
2. Add/update TypeScript definitions in `src/types/`
3. Write tests in `tests/components/`
4. Run `npm run dev` to test in demo
5. Run `npm test` to verify tests pass
6. Run `npm run build` to build library

### **For Demo Development:**
1. Make changes to demo in `demo/src/`
2. Run `npm run demo:dev` for demo-only development
3. Test responsiveness and theme switching
4. Build with `npm run demo:build`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure tests pass (`npm test`)
6. Ensure type checking passes (`npm run type-check`)
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

## License

MIT
