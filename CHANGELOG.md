# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-01-02

### 🎉 Added
- **Major Feature**: `disablePast` prop for all date/time picker components
  - Prevents selection of past dates and times
  - Perfect for booking systems, appointment scheduling, and reservation platforms
  - Visual feedback with grayed out and strikethrough styling for disabled items
  - Smart scrolling that automatically skips disabled items
  - Click/touch prevention on disabled options

### 🔧 Enhanced Components
- **DateTimePicker**: Full past date/time restriction support
- **TimePicker**: Past time restriction for current day
- **CalendarTimePicker**: Calendar view with disabled past dates
- **HorizontalCalendarTimePicker**: Horizontal layout with past restrictions
- **Wheel**: Enhanced with disabled item support and smart scrolling

### 🎨 Visual Improvements
- Disabled items show reduced opacity (0.3-0.4)
- Strikethrough text for past dates/times
- Gray color (#ccc) for disabled text
- Not-allowed cursor for disabled items
- No hover effects on disabled options

### 📚 Documentation
- Comprehensive README.md updates with `disablePast` examples
- Updated API documentation for all components
- Enhanced demo application with interactive future-only examples
- Real-world use case examples for booking systems

### 🔧 Technical Improvements
- Enhanced Wheel component with disabled item support
- Smart momentum scrolling finds nearest enabled item
- Real-time validation with React.useCallback optimization
- Cross-component consistency with shared validation logic
- Performance optimized with proper React hooks usage

### 🐛 Fixed
- Null value handling in DateTimePicker component
- Improved error handling for edge cases
- Better TypeScript definitions with disabled item support

### 📦 Package Updates
- Updated package.json with new keywords (booking, scheduling, appointment, etc.)
- Fixed repository URL to point to correct GitHub repository
- Updated homepage to point to demo application
- Enhanced package description

### 🎯 Perfect For
- 🗓️ Appointment booking systems
- 📅 Event scheduling applications
- ⏰ Deadline setting interfaces
- 🎫 Reservation systems
- 📋 Task planning tools
- 🏥 Medical appointment scheduling
- ✈️ Travel booking platforms

## [0.1.0] - 2024-12-XX

### 🎉 Initial Release
- DateTimePicker component with wheel-based selection
- TimePicker component for time-only selection
- CalendarTimePicker with calendar and time picker combination
- HorizontalCalendarTimePicker with responsive horizontal layout
- WheelPicker for custom wheel-based selections
- Wheel component as the core scrollable picker
- Light and dark theme support
- Mobile-first responsive design
- Touch and mouse interaction support
- Customizable styling and props
- TypeScript definitions
- Comprehensive test suite
