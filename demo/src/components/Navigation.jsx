import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CrisliIcon from './CrisliIcon'

const Navigation = ({ theme, onThemeToggle }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Navigation items with icons
  const navigationItems = [
    {
      path: '/',
      label: 'Home',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      path: '/components',
      label: 'Components',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      path: '/examples',
      label: 'Examples',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      path: '/docs',
      label: 'Documentation',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
        </svg>
      )
    }
  ]

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      theme === 'light'
        ? 'bg-white/95 border-gray-200/60 shadow-lg shadow-gray-100/50'
        : 'bg-gray-900/95 border-gray-700/40 shadow-2xl shadow-black/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[80px]">
          {/* Logo */}
          <Link
            to="/"
            className={`group flex items-center gap-3 text-xl font-bold transition-all duration-300 hover:scale-105 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:shadow-lg'
                : 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 group-hover:shadow-xl'
            }`}>
              <CrisliIcon size={28} color={theme === 'light' ? '#4F46E5' : '#A78BFA'} animated={true} />
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Crisli Picker
            </span>
            <span className="sm:hidden bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Crisli
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navigationItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(path)
                    ? theme === 'light'
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-lg shadow-indigo-100/50 border border-indigo-200'
                      : 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-indigo-300 shadow-xl shadow-indigo-900/20 border border-indigo-800/50'
                    : theme === 'light'
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 hover:shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:shadow-lg'
                }`}
              >
                <span className={`transition-all duration-300 ${
                  isActive(path) ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {icon}
                </span>
                <span className="hidden lg:block">{label}</span>
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <div className="ml-6">
              <button
                onClick={onThemeToggle}
                className={`group flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'light'
                    ? 'text-gray-600 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200/80 shadow-sm hover:shadow-md'
                    : 'text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 shadow-sm hover:shadow-lg'
                }`}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                    </svg>
                    <span>Light</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className={`group p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200/80 shadow-sm hover:shadow-md'
                  : 'text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 shadow-sm hover:shadow-lg'
              }`}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                </svg>
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className={`group p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200/80 shadow-md'
                  : 'text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 shadow-lg'
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path className="group-hover:scale-110 transition-transform duration-300" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path className="group-hover:scale-110 transition-transform duration-300" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t backdrop-blur-xl transition-all duration-300 ${
            theme === 'light'
              ? 'border-gray-200/60 bg-white/95'
              : 'border-gray-700/40 bg-gray-900/95'
          }`}>
            <div className="px-4 pt-6 pb-8 space-y-3">
              {navigationItems.map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(path)
                      ? theme === 'light'
                        ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-lg border border-indigo-200'
                        : 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-indigo-300 shadow-xl border border-indigo-800/50'
                      : theme === 'light'
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 hover:shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:shadow-lg'
                  }`}
                >
                  <span className={`transition-all duration-300 ${
                    isActive(path) ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {icon}
                  </span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
