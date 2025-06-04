import React, { useState } from 'react'
import CrisliIcon from '../components/CrisliIcon'
import ReadyToBuildSection from '../components/ReadyToBuildSection'
import Footer from '../components/Footer'

const DocsPage = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('installation')

  const navigationItems = [
    {
      id: 'installation',
      label: 'Installation',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'quickstart',
      label: 'Quick Start',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'typescript',
      label: 'TypeScript',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'api',
      label: 'API Reference',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'customization',
      label: 'Customization',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-14a2 2 0 012-2h2a2 2 0 012 2v11a3 3 0 11-6 0V1zm2 13a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'testing',
      label: 'Testing & Examples',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 'practices',
      label: 'Best Practices',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      )
    },
    {
      id: 'links',
      label: 'Links',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
        </svg>
      )
    }
  ]

  return (
    <div className={`min-h-screen ${
      theme === 'light'
        ? 'bg-gradient-to-br from-slate-50 to-slate-200'
        : 'bg-gradient-to-br from-slate-900 to-slate-800'
    }`}>
      {/* Hero Header */}
      <div className={`text-center py-12 sm:py-16 px-4 sm:px-8 text-white mb-8 sm:mb-12 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
          : 'bg-gradient-to-br from-purple-800 to-purple-600'
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <CrisliIcon size={40} animated={true} color="white" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Documentation
          </h1>
        </div>
        <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
          Complete API reference, usage guidelines, and best practices for building amazing date and time experiences
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Mobile Navigation */}
        <div className={`lg:hidden mb-6 rounded-xl p-4 shadow-lg border ${
          theme === 'light'
            ? 'bg-white border-slate-200'
            : 'bg-slate-800 border-slate-600'
        }`}>
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            Jump to Section
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  activeSection === item.id
                    ? theme === 'light'
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      : 'bg-purple-900/30 text-purple-200 border-purple-700'
                    : theme === 'light'
                      ? 'text-slate-600 hover:bg-slate-50 border-transparent hover:text-slate-900'
                      : 'text-slate-300 hover:bg-slate-700 border-transparent hover:text-white'
                }`}
              >
                <span className={`text-xs ${activeSection === item.id
                  ? (theme === 'light' ? 'text-indigo-600' : 'text-purple-400')
                  : 'text-current'
                }`}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Navigation */}
          <div className={`hidden lg:block lg:col-span-1 sticky top-8 h-fit rounded-2xl p-6 shadow-lg border ${
            theme === 'light'
              ? 'bg-white border-slate-200'
              : 'bg-slate-800 border-slate-600'
          }`}>
          <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            Table of Contents
          </h3>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  activeSection === item.id
                    ? theme === 'light'
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      : 'bg-purple-900/30 text-purple-200 border-purple-700'
                    : theme === 'light'
                      ? 'text-slate-600 hover:bg-slate-50 border-transparent hover:text-slate-900'
                      : 'text-slate-300 hover:bg-slate-700 border-transparent hover:text-white'
                }`}
              >
                <span className={activeSection === item.id
                  ? (theme === 'light' ? 'text-indigo-600' : 'text-purple-400')
                  : 'text-current'
                }>
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          </div>

          {/* Main Content */}
          <div className={`lg:col-span-3 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border ${
            theme === 'light'
              ? 'bg-white border-slate-200'
              : 'bg-slate-800 border-slate-600'
          }`}>

          {/* Installation */}
          <section id="installation" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Installation
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Get started with Crisli Picker in seconds. Install via npm or yarn:
            </p>
            <div className={`relative rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
              theme === 'light'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-slate-900 border-slate-700'
            }`}>
              <div className="absolute top-3 right-3 bg-white/10 rounded px-2 py-1 text-xs text-gray-300">
                Terminal
              </div>
              <pre className="text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
{`npm install crisli-picker

# or with yarn
yarn add crisli-picker`}
              </pre>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Quick Start
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Import and use Crisli Picker components in your React application:
            </p>
            <div className={`relative rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
              theme === 'light'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-slate-900 border-slate-700'
            }`}>
              <div className="absolute top-3 right-3 bg-blue-500/20 rounded px-2 py-1 text-xs text-blue-300">
                React
              </div>
              <pre className="text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
{`import React, { useState } from 'react';
import { DateTimePicker } from 'crisli-picker';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      theme="light"
      showTime={true}
    />
  );
}`}
              </pre>
            </div>
          </section>

          {/* TypeScript Support */}
          <section id="typescript" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                TypeScript Support
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Crisli Picker includes comprehensive TypeScript definitions for both JSX and TSX projects:
            </p>
            <div className={`relative rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
              theme === 'light'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-slate-900 border-slate-700'
            }`}>
              <div className="absolute top-3 right-3 bg-amber-500/20 rounded px-2 py-1 text-xs text-amber-300">
                TypeScript
              </div>
              <pre className="text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
{`import { DateTimePicker, Theme } from 'crisli-picker';

const MyComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <DateTimePicker
      value={date}           // ✅ Type: Date | undefined
      onChange={setDate}     // ✅ Type: (date: Date) => void
      theme={theme}          // ✅ Type: 'light' | 'dark'
      showTime={true}        // ✅ Type: boolean | undefined
    />
  );
};`}
              </pre>
            </div>
          </section>

          {/* API Reference */}
          <section id="api" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                API Reference
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-8 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Complete API documentation for all Crisli Picker components and their properties.
            </p>

            {/* DateTimePicker API */}
            <div className={`rounded-xl p-4 sm:p-6 mb-8 border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-blue-500">📅</span>
                DateTimePicker
              </h3>
              <div className="grid gap-3">
                {[
                  { prop: 'value', type: 'Date | undefined', default: 'new Date()', desc: 'The selected date and time' },
                  { prop: 'onChange', type: '(date: Date) => void', default: 'required', desc: 'Callback when date changes' },
                  { prop: 'showTime', type: 'boolean', default: 'true', desc: 'Whether to show time picker' },
                  { prop: 'theme', type: "'light' | 'dark'", default: "'light'", desc: 'Theme for the picker' },
                  { prop: 'wheelProps', type: 'object', default: '{}', desc: 'Props to pass to all wheels' }
                ].map((item, index) => (
                  <div key={index} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-3 rounded-lg border text-sm ${
                    theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                  }`}>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Property:</span>
                      <code className={`font-semibold ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`}>
                        {item.prop}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Type:</span>
                      <code className={theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}>
                        {item.type}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Default:</span>
                      <code className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>
                        {item.default}
                      </code>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Description:</span>
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TimePicker API */}
            <div className={`rounded-xl p-4 sm:p-6 mb-8 border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-emerald-500">⏰</span>
                TimePicker
              </h3>
              <div className="grid gap-3">
                {[
                  { prop: 'value', type: 'Date | undefined', default: 'new Date()', desc: 'The selected time' },
                  { prop: 'onChange', type: '(date: Date) => void', default: 'required', desc: 'Callback when time changes' },
                  { prop: 'use24Hours', type: 'boolean', default: 'true', desc: 'Whether to use 24-hour format' },
                  { prop: 'theme', type: "'light' | 'dark'", default: "'light'", desc: 'Theme for the picker' },
                  { prop: 'wheelProps', type: 'object', default: '{}', desc: 'Props to pass to all wheels' }
                ].map((item, index) => (
                  <div key={index} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-3 rounded-lg border text-sm ${
                    theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                  }`}>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Property:</span>
                      <code className={`font-semibold ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`}>
                        {item.prop}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Type:</span>
                      <code className={theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}>
                        {item.type}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Default:</span>
                      <code className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>
                        {item.default}
                      </code>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Description:</span>
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CalendarTimePicker API */}
            <div className={`rounded-xl p-4 sm:p-6 mb-8 border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-amber-500">📆</span>
                CalendarTimePicker & HorizontalCalendarTimePicker
              </h3>
              <div className="grid gap-3">
                {[
                  { prop: 'value', type: 'Date | undefined', default: 'new Date()', desc: 'The selected date and time' },
                  { prop: 'onChange', type: '(date: Date) => void', default: 'required', desc: 'Callback when date/time changes' },
                  { prop: 'showTime', type: 'boolean', default: 'true', desc: 'Whether to show time picker' },
                  { prop: 'use24Hours', type: 'boolean', default: 'true', desc: 'Whether to use 24-hour format' },
                  { prop: 'theme', type: "'light' | 'dark'", default: "'light'", desc: 'Theme for the picker' },
                  { prop: 'wheelProps', type: 'object', default: '{}', desc: 'Props to pass to time wheels' }
                ].map((item, index) => (
                  <div key={index} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-3 rounded-lg border text-sm ${
                    theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                  }`}>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Property:</span>
                      <code className={`font-semibold ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`}>
                        {item.prop}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Type:</span>
                      <code className={theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}>
                        {item.type}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block sm:hidden">Default:</span>
                      <code className={theme === 'light' ? 'text-purple-600' : 'text-purple-400'}>
                        {item.default}
                      </code>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs text-slate-500 block sm:hidden">Description:</span>
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customization */}
          <section id="customization" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-14a2 2 0 012-2h2a2 2 0 012 2v11a3 3 0 11-6 0V1zm2 13a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Customization
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Customize the appearance and behavior of picker components using the <code className={`px-2 py-1 rounded text-sm font-mono ${
                theme === 'light' ? 'bg-slate-100' : 'bg-slate-700'
              }`}>wheelProps</code> parameter:
            </p>
            <div className={`relative rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm border mb-6 overflow-x-auto ${
              theme === 'light'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-slate-900 border-slate-700'
            }`}>
              <div className="absolute top-3 right-3 bg-pink-500/20 rounded px-2 py-1 text-xs text-pink-300">
                Customization
              </div>
              <pre className="text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
{`<DateTimePicker
  value={date}
  onChange={setDate}
  wheelProps={{
    itemHeight: 50,
    fontSize: '18px',
    fontWeight: '600',
    textColor: '#333',
    selectedTextColor: '#000',
    highlightColor: 'rgba(0, 0, 255, 0.1)',
    highlightBorderColor: 'rgba(0, 0, 255, 0.3)'
  }}
/>`}
              </pre>
            </div>

            <div className={`rounded-xl p-6 border ${
              theme === 'light' ? 'bg-blue-50 border-blue-200' : 'bg-blue-900 border-blue-600'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-blue-900' : 'text-blue-100'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Available WheelProps Options
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  { prop: 'itemHeight', desc: 'Height of each wheel item (number)' },
                  { prop: 'fontSize', desc: 'Font size for wheel text (string)' },
                  { prop: 'fontWeight', desc: 'Font weight for wheel text (string)' },
                  { prop: 'textColor', desc: 'Color for unselected items (string)' },
                  { prop: 'selectedTextColor', desc: 'Color for selected item (string)' },
                  { prop: 'highlightColor', desc: 'Background color for selection (string)' },
                  { prop: 'highlightBorderColor', desc: 'Border color for selection (string)' }
                ].map((item, index) => (
                  <div key={index} className={theme === 'light' ? 'text-blue-900' : 'text-blue-100'}>
                    <code className="font-semibold">{item.prop}</code>
                    <div className="text-xs mt-1 opacity-80">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testing & Examples */}
          <section id="testing" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Testing & Examples
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-8 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Comprehensive testing examples and patterns to ensure your implementation works correctly:
            </p>

            {/* Testing Setup */}
            <div className={`rounded-xl p-4 sm:p-6 mb-8 border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-cyan-500">⚙️</span>
                Testing Setup
              </h3>
              <p className={`mb-4 leading-relaxed ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Install testing dependencies and configure your test environment:
              </p>
              <div className={`relative rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto mb-4 ${
                theme === 'light'
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-slate-900 border-slate-700'
              }`}>
                <pre className="text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
{`npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event jest-environment-jsdom`}
                </pre>
              </div>
              <div className={`rounded-lg p-4 border ${
                theme === 'light' ? 'bg-blue-50 border-blue-200' : 'bg-blue-900 border-blue-600'
              }`}>
                <p className={`text-sm m-0 ${
                  theme === 'light' ? 'text-blue-900' : 'text-blue-100'
                }`}>
                  <strong>💡 Tip:</strong> Crisli Picker includes comprehensive test files that you can use as examples for your own testing setup.
                </p>
              </div>
            </div>

            {/* Component Testing Examples */}
            <div className="grid gap-6 mb-8">
              {[
                {
                  title: 'DateTimePicker Testing',
                  icon: '📅',
                  color: '#3B82F6',
                  description: 'Complete test suite covering all DateTimePicker functionality',
                  tests: [
                    'Renders with default props',
                    'Handles date and time changes',
                    'Theme switching (light/dark)',
                    'Null value handling',
                    'WheelProps customization',
                    'DisablePast functionality',
                    'Time step intervals'
                  ]
                },
                {
                  title: 'TimePicker Testing',
                  icon: '⏰',
                  color: '#10B981',
                  description: 'Focused tests for time-only selection scenarios',
                  tests: [
                    'Null/undefined value handling',
                    'Valid date transitions',
                    'Time step configurations',
                    'Hour and minute intervals',
                    '12/24 hour format support'
                  ]
                },
                {
                  title: 'Edge Case Testing',
                  icon: '🛡️',
                  color: '#F59E0B',
                  description: 'Robust testing for edge cases and error scenarios',
                  tests: [
                    'Month transitions (Feb 29th)',
                    'Year boundary changes',
                    'Invalid date handling',
                    'Prop validation',
                    'Performance testing'
                  ]
                }
              ].map((testGroup, index) => (
                <div key={index} className={`rounded-xl p-4 sm:p-6 border ${
                  theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg p-2 border" style={{
                      background: `${testGroup.color}20`,
                      borderColor: `${testGroup.color}40`
                    }}>
                      <span className="text-xl">{testGroup.icon}</span>
                    </div>
                    <h4 className={`text-lg font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {testGroup.title}
                    </h4>
                  </div>
                  <p className={`mb-4 leading-relaxed ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {testGroup.description}
                  </p>
                  <ul className={`pl-6 space-y-1 ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {testGroup.tests.map((test, testIndex) => (
                      <li key={testIndex}>
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Practical Test Examples */}
            <div className={`rounded-xl p-4 sm:p-6 mb-8 border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-700'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-cyan-500">📝</span>
                Practical Test Examples
              </h3>
              <p className={`mb-6 leading-relaxed ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Real-world testing examples you can copy and adapt for your projects:
              </p>

              {/* Basic Component Test */}
              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Basic Component Rendering Test
                </h4>
                <div className={`relative rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
                  theme === 'light'
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-slate-900 border-slate-700'
                }`}>
                  <div className="absolute top-3 right-3 bg-cyan-500/20 rounded px-2 py-1 text-xs text-cyan-300">
                    Jest + React Testing Library
                  </div>
                  <pre className="text-gray-100 leading-relaxed pt-6 whitespace-pre-wrap break-words">
{`import { render, screen } from '@testing-library/react';
import DateTimePicker from 'crisli-picker';

test('renders DateTimePicker with default props', () => {
  const mockOnChange = jest.fn();
  const testDate = new Date('2023-06-15T14:30:00');

  render(
    <DateTimePicker
      value={testDate}
      onChange={mockOnChange}
    />
  );

  // Check if component renders
  expect(screen.getByText('Day')).toBeInTheDocument();
  expect(screen.getByText('Month')).toBeInTheDocument();
  expect(screen.getByText('Year')).toBeInTheDocument();
});`}
                  </pre>
                </div>
              </div>

              {/* User Interaction Test */}
              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  User Interaction Test
                </h4>
                <div className={`relative rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
                  theme === 'light'
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-slate-900 border-slate-700'
                }`}>
                  <div className="absolute top-3 right-3 bg-emerald-500/20 rounded px-2 py-1 text-xs text-emerald-300">
                    User Events
                  </div>
                  <pre className="text-gray-100 leading-relaxed pt-6 whitespace-pre-wrap break-words">
{`import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

test('calls onChange when date is modified', async () => {
  const mockOnChange = jest.fn();
  const testDate = new Date('2023-06-15T14:30:00');

  render(
    <DateTimePicker
      value={testDate}
      onChange={mockOnChange}
    />
  );

  // Click on a different day
  const dayOption = screen.getByText('16');
  await userEvent.click(dayOption);

  // Verify onChange was called
  await waitFor(() => {
    expect(mockOnChange).toHaveBeenCalled();
  });

  // Verify the new date
  const newDate = mockOnChange.mock.calls[0][0];
  expect(newDate.getDate()).toBe(16);
});`}
                  </pre>
                </div>
              </div>

              {/* Edge Case Test */}
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Edge Case Testing
                </h4>
                <div className={`relative rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm border overflow-x-auto ${
                  theme === 'light'
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-slate-900 border-slate-700'
                }`}>
                  <div className="absolute top-3 right-3 bg-amber-500/20 rounded px-2 py-1 text-xs text-amber-300">
                    Edge Cases
                  </div>
                  <pre className="text-gray-100 leading-relaxed pt-6 whitespace-pre-wrap break-words">
{`test('handles null value gracefully', () => {
  const mockOnChange = jest.fn();

  // Should not throw error with null value
  expect(() => {
    render(
      <DateTimePicker
        value={null}
        onChange={mockOnChange}
      />
    );
  }).not.toThrow();
});

test('handles theme switching', () => {
  const { rerender } = render(
    <DateTimePicker
      value={new Date()}
      onChange={jest.fn()}
      theme="light"
    />
  );

  // Switch to dark theme
  rerender(
    <DateTimePicker
      value={new Date()}
      onChange={jest.fn()}
      theme="dark"
    />
  );

  // Component should update without errors
  expect(screen.getByText('Day')).toBeInTheDocument();
});`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Test Commands */}
            <div className={`rounded-xl p-4 sm:p-6 border ${
              theme === 'light' ? 'bg-blue-50 border-blue-200' : 'bg-blue-900 border-blue-600'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                theme === 'light' ? 'text-blue-900' : 'text-blue-100'
              }`}>
                <span>🚀</span>
                Available Test Commands
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {[
                  { command: 'npm test', desc: 'Run all tests once' },
                  { command: 'npm run test:watch', desc: 'Run tests in watch mode' },
                  { command: 'npm run test:coverage', desc: 'Run tests with coverage report' }
                ].map((cmd, index) => (
                  <div key={index} className={theme === 'light' ? 'text-blue-900' : 'text-blue-100'}>
                    <code className={`font-semibold px-2 py-1 rounded text-xs ${
                      theme === 'light' ? 'bg-blue-100' : 'bg-blue-800'
                    }`}>
                      {cmd.command}
                    </code>
                    <div className="text-xs mt-1 opacity-80">
                      {cmd.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="practices" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Best Practices
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-8 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Follow these recommendations for optimal user experience and performance:
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: '🛡️',
                  title: 'Always provide a fallback value',
                  desc: 'Use value || new Date() to prevent null errors and ensure consistent behavior',
                  code: 'value={selectedDate || new Date()}'
                },
                {
                  icon: '🔄',
                  title: 'Handle null values gracefully',
                  desc: 'Components may return null when cleared, handle this in your UI logic',
                  code: 'onChange={(date) => setDate(date || new Date())}'
                },
                {
                  icon: '🎨',
                  title: 'Match your application theme',
                  desc: 'Use appropriate themes and customize colors to match your design system',
                  code: 'theme={isDarkMode ? "dark" : "light"}'
                },
                {
                  icon: '📱',
                  title: 'Test on mobile devices',
                  desc: 'Ensure touch interactions work smoothly on mobile and tablet devices',
                  code: 'wheelProps={{ itemHeight: 50 }} // Better for touch'
                },
                {
                  icon: '♿',
                  title: 'Provide clear labels',
                  desc: 'Use descriptive labels and ARIA attributes for better accessibility',
                  code: '<label htmlFor="datetime">Select appointment time</label>'
                },
                {
                  icon: '✅',
                  title: 'Validate selections',
                  desc: 'Always validate date/time selections in your application logic',
                  code: 'if (date < new Date()) { /* Handle past date */ }'
                }
              ].map((practice, index) => (
                <div key={index} className={`rounded-xl p-4 sm:p-6 border ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-600'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {practice.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-2 ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>
                        {practice.title}
                      </h4>
                      <p className={`mb-4 leading-relaxed ${
                        theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                      }`}>
                        {practice.desc}
                      </p>
                      <code className={`block px-4 py-2 rounded-lg text-sm font-mono ${
                        theme === 'light' ? 'bg-gray-900 text-gray-100' : 'bg-slate-900 text-gray-100'
                      }`}>
                        {practice.code}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section id="links" className="mb-16 scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Links & Resources
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-8 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Essential links for getting started, contributing, and getting support:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📦',
                  title: 'NPM Package',
                  desc: 'Install and view package details',
                  url: 'https://www.npmjs.com/package/crisli-picker',
                  color: '#CB3837'
                },
                {
                  icon: '💻',
                  title: 'GitHub Repository',
                  desc: 'Source code, issues, and contributions',
                  url: 'https://github.com/rupok/crisli-picker',
                  color: '#24292e'
                },
                {
                  icon: '🐛',
                  title: 'Issues & Support',
                  desc: 'Report bugs and request features',
                  url: 'https://github.com/rupok/crisli-picker/issues',
                  color: '#F59E0B'
                },
                {
                  icon: '🌐',
                  title: 'Crisli App',
                  desc: 'The app that inspired this library',
                  url: 'https://crisli.app',
                  color: '#8B5CF6'
                }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl p-4 sm:p-6 border no-underline transition-transform hover:-translate-y-1 hover:shadow-lg ${
                    theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl p-2 rounded-lg border" style={{
                      background: `${link.color}20`,
                      borderColor: `${link.color}40`
                    }}>
                      {link.icon}
                    </div>
                    <h4 className={`text-lg font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {link.title}
                    </h4>
                  </div>
                  <p className={`leading-relaxed ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {link.desc}
                  </p>
                  <div className="mt-4 text-sm font-medium" style={{ color: link.color }}>
                    {link.url.replace('https://', '')} →
                  </div>
                </a>
              ))}
            </div>
          </section>

          </div>
        </div>
      </div>

      {/* Ready to Build Section */}
      <ReadyToBuildSection theme={theme} />

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  )
}

export default DocsPage
