import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import ExamplesPage from './pages/ExamplesPage'
import DocsPage from './pages/DocsPage'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`${theme}-theme`}>
      <Navigation theme={theme} onThemeToggle={toggleTheme} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/components" element={<ComponentsPage theme={theme} />} />
          <Route path="/examples" element={<ExamplesPage theme={theme} />} />
          <Route path="/docs" element={<DocsPage theme={theme} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
