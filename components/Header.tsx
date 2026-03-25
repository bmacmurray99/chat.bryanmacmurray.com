'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">Bryan MacMurray</Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/resume" style={{ fontSize: '0.9rem' }}>Resume</Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
          <Link href="/privacy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>✕ Close</button>
        </div>
      </div>
    </header>
  )
}
