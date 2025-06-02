import React from 'react'

const DocsPage = ({ theme }) => {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
  }

  const sectionStyle = {
    marginBottom: '3rem',
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
    background: theme === 'light' ? '#ffffff' : '#2a2a2a',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }

  const thStyle = {
    background: theme === 'light' ? '#f8f9fa' : '#3a3a3a',
    padding: '1rem',
    textAlign: 'left',
    fontWeight: '600',
    borderBottom: `1px solid ${theme === 'light' ? '#e0e0e0' : '#404040'}`,
  }

  const tdStyle = {
    padding: '1rem',
    borderBottom: `1px solid ${theme === 'light' ? '#e0e0e0' : '#404040'}`,
    verticalAlign: 'top',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>📚 Documentation</h1>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', fontSize: '1.1rem' }}>
          Complete API reference and usage guidelines
        </p>
      </div>

      {/* Installation */}
      <div style={sectionStyle}>
        <h2>📦 Installation</h2>
        <div className="code-block">
          <pre>{`npm install crisli-picker
# or
yarn add crisli-picker`}</pre>
        </div>
      </div>

      {/* Quick Start */}
      <div style={sectionStyle}>
        <h2>🚀 Quick Start</h2>
        <div className="code-block">
          <pre>{`import React, { useState } from 'react';
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
}`}</pre>
        </div>
      </div>

      {/* TypeScript Support */}
      <div style={sectionStyle}>
        <h2>⚡ TypeScript Support</h2>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Crisli Picker includes comprehensive TypeScript definitions for both JSX and TSX projects:
        </p>
        <div className="code-block">
          <pre>{`import { DateTimePicker, Theme } from 'crisli-picker';

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
};`}</pre>
        </div>
      </div>

      {/* API Reference */}
      <div style={sectionStyle}>
        <h2>📋 API Reference</h2>

        {/* DateTimePicker */}
        <h3>DateTimePicker</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Prop</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Default</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><code>value</code></td>
              <td style={tdStyle}><code>Date</code></td>
              <td style={tdStyle}><code>new Date()</code></td>
              <td style={tdStyle}>The selected date and time</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>onChange</code></td>
              <td style={tdStyle}><code>function</code></td>
              <td style={tdStyle}>required</td>
              <td style={tdStyle}>Callback when date changes</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>showTime</code></td>
              <td style={tdStyle}><code>boolean</code></td>
              <td style={tdStyle}><code>true</code></td>
              <td style={tdStyle}>Whether to show time picker</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>theme</code></td>
              <td style={tdStyle}><code>'light' | 'dark'</code></td>
              <td style={tdStyle}><code>'light'</code></td>
              <td style={tdStyle}>Theme for the picker</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>wheelProps</code></td>
              <td style={tdStyle}><code>object</code></td>
              <td style={tdStyle}><code>{}</code></td>
              <td style={tdStyle}>Props to pass to all wheels</td>
            </tr>
          </tbody>
        </table>

        {/* TimePicker */}
        <h3 style={{ marginTop: '2rem' }}>TimePicker</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Prop</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Default</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><code>value</code></td>
              <td style={tdStyle}><code>Date</code></td>
              <td style={tdStyle}><code>new Date()</code></td>
              <td style={tdStyle}>The selected time</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>onChange</code></td>
              <td style={tdStyle}><code>function</code></td>
              <td style={tdStyle}>required</td>
              <td style={tdStyle}>Callback when time changes</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>use24Hours</code></td>
              <td style={tdStyle}><code>boolean</code></td>
              <td style={tdStyle}><code>true</code></td>
              <td style={tdStyle}>Whether to use 24-hour format</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>theme</code></td>
              <td style={tdStyle}><code>'light' | 'dark'</code></td>
              <td style={tdStyle}><code>'light'</code></td>
              <td style={tdStyle}>Theme for the picker</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>wheelProps</code></td>
              <td style={tdStyle}><code>object</code></td>
              <td style={tdStyle}><code>{}</code></td>
              <td style={tdStyle}>Props to pass to all wheels</td>
            </tr>
          </tbody>
        </table>

        {/* WheelPicker */}
        <h3 style={{ marginTop: '2rem' }}>WheelPicker</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Prop</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Default</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><code>items</code></td>
              <td style={tdStyle}><code>array</code></td>
              <td style={tdStyle}>required</td>
              <td style={tdStyle}>Array of items to display</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>value</code></td>
              <td style={tdStyle}><code>any</code></td>
              <td style={tdStyle}>required</td>
              <td style={tdStyle}>Currently selected value</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>onChange</code></td>
              <td style={tdStyle}><code>function</code></td>
              <td style={tdStyle}>required</td>
              <td style={tdStyle}>Callback when value changes</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>label</code></td>
              <td style={tdStyle}><code>string</code></td>
              <td style={tdStyle}><code>undefined</code></td>
              <td style={tdStyle}>Label for the picker</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>theme</code></td>
              <td style={tdStyle}><code>'light' | 'dark'</code></td>
              <td style={tdStyle}><code>'light'</code></td>
              <td style={tdStyle}>Theme for the picker</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Customization */}
      <div style={sectionStyle}>
        <h2>🎨 Customization</h2>
        <p style={{ color: theme === 'light' ? '#666' : '#bbb', marginBottom: '1rem' }}>
          Customize wheel appearance using the <code>wheelProps</code> parameter:
        </p>
        <div className="code-block">
          <pre>{`<DateTimePicker
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
/>`}</pre>
        </div>
      </div>

      {/* Best Practices */}
      <div style={sectionStyle}>
        <h2>💡 Best Practices</h2>
        <div className="demo-section">
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Always provide a fallback value:</strong> Use <code>value || new Date()</code> to prevent null errors</li>
            <li><strong>Handle null values:</strong> Components may return null when cleared, handle this in your UI</li>
            <li><strong>Use appropriate themes:</strong> Match the picker theme with your application's design</li>
            <li><strong>Consider mobile users:</strong> Test touch interactions on mobile devices</li>
            <li><strong>Provide clear labels:</strong> Use descriptive labels for better accessibility</li>
            <li><strong>Validate selections:</strong> Always validate date/time selections in your application logic</li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div style={sectionStyle}>
        <h2>🔗 Links</h2>
        <div className="demo-section">
          <p><strong>NPM Package:</strong> <a href="https://www.npmjs.com/package/crisli-picker" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/crisli-picker</a></p>
          <p><strong>GitHub Repository:</strong> <a href="https://github.com/rupok/crisli-picker" target="_blank" rel="noopener noreferrer">https://github.com/rupok/crisli-picker</a></p>
          <p><strong>Issues & Support:</strong> <a href="https://github.com/rupok/crisli-picker/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></p>
        </div>
      </div>
    </div>
  )
}

export default DocsPage
