import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ theme, onThemeToggle }) => {
  const location = useLocation()

  const navStyle = {
    background: theme === 'light' 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    padding: '1rem 2rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'background-color 0.2s',
    fontWeight: '500',
  }

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  }

  const themeButtonStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          🎡 Crisli Picker
        </Link>
        
        <div style={navLinksStyle}>
          <Link 
            to="/" 
            style={isActive('/') ? activeLinkStyle : linkStyle}
          >
            Home
          </Link>
          <Link 
            to="/components" 
            style={isActive('/components') ? activeLinkStyle : linkStyle}
          >
            Components
          </Link>
          <Link 
            to="/examples" 
            style={isActive('/examples') ? activeLinkStyle : linkStyle}
          >
            Examples
          </Link>
          <Link 
            to="/docs" 
            style={isActive('/docs') ? activeLinkStyle : linkStyle}
          >
            Documentation
          </Link>
          
          <button 
            onClick={onThemeToggle}
            style={themeButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
