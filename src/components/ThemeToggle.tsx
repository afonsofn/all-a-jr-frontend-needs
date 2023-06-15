'use client'

import React, { useState } from 'react'
import '@/styles/toggle_theme_style.scss'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      return document.documentElement.setAttribute('data-theme', 'light')
    }

    setTheme('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  return (
    <div className={`toggle-wrapper ${theme}`}>
      <div className="load-flash"></div>
      <div className="mode-toggle noselect">
        <div className="toggle-switch" onClick={() => toggleTheme()}></div>
      </div>
    </div>
  )
}
