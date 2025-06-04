import React from 'react'
import CrisliIcon from './CrisliIcon'

const ReadyToBuildSection = ({ theme }) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${
      theme === 'light'
        ? 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 ${
          theme === 'light' ? 'bg-indigo-200' : 'bg-indigo-800'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 ${
          theme === 'light' ? 'bg-purple-200' : 'bg-purple-800'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <div className={`p-3 rounded-2xl ${
            theme === 'light' ? 'bg-white/80 shadow-lg' : 'bg-gray-800/80 shadow-xl'
          }`}>
            <CrisliIcon size={48} animated={true} color={theme === 'light' ? '#667eea' : '#8B5CF6'} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Build?
          </h2>
        </div>

        {/* Description */}
        <p className={`text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed font-light ${
          theme === 'light' ? 'text-slate-700' : 'text-slate-200'
        }`}>
          Start building amazing date and time selection experiences with{' '}
          <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Crisli Picker
          </span>
          <br className="hidden sm:block" />
          Professional, accessible, and ready for production.
        </p>

        {/* Install Command */}
        <div className="flex justify-center mb-12">
          <div className={`group relative px-8 py-5 rounded-2xl font-mono text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 ${
            theme === 'light'
              ? 'bg-gray-900 text-gray-100 shadow-xl hover:shadow-2xl'
              : 'bg-gray-800 text-gray-100 shadow-2xl hover:shadow-3xl border border-gray-700'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-green-400">$</span>
              <span>npm install crisli-picker</span>
              <div className={`w-2 h-5 animate-pulse ${
                theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
              }`}></div>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
            theme === 'light'
              ? 'bg-white/80 shadow-lg hover:shadow-xl border border-blue-100'
              : 'bg-gray-800/80 shadow-xl hover:shadow-2xl border border-blue-800'
          }`}>
            <div className="mb-2 flex justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={`text-sm font-semibold ${
              theme === 'light' ? 'text-blue-700' : 'text-blue-300'
            }`}>
              5 Components
            </div>
          </div>

          <div className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
            theme === 'light'
              ? 'bg-white/80 shadow-lg hover:shadow-xl border border-green-100'
              : 'bg-gray-800/80 shadow-xl hover:shadow-2xl border border-green-800'
          }`}>
            <div className="mb-2 flex justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div className={`text-sm font-semibold ${
              theme === 'light' ? 'text-green-700' : 'text-green-300'
            }`}>
              TypeScript Ready
            </div>
          </div>

          <div className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
            theme === 'light'
              ? 'bg-white/80 shadow-lg hover:shadow-xl border border-purple-100'
              : 'bg-gray-800/80 shadow-xl hover:shadow-2xl border border-purple-800'
          }`}>
            <div className="mb-2 flex justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </div>
            <div className={`text-sm font-semibold ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-300'
            }`}>
              Themeable
            </div>
          </div>

          <div className={`group p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
            theme === 'light'
              ? 'bg-white/80 shadow-lg hover:shadow-xl border border-amber-100'
              : 'bg-gray-800/80 shadow-xl hover:shadow-2xl border border-amber-800'
          }`}>
            <div className="mb-2 flex justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm2 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={`text-sm font-semibold ${
              theme === 'light' ? 'text-amber-700' : 'text-amber-300'
            }`}>
              Mobile First
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadyToBuildSection
