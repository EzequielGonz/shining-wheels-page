import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Menú de navegación izquierda */}
        <nav className="header-nav header-nav-left">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#setups" className="nav-link">Setups</a>
        </nav>

        {/* Logo centrado - punto focal */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* Acciones secundarias derecha */}
        <div className="header-nav header-nav-right">
          <a href="#account" className="nav-link nav-link-utility">
            <span>Account</span>
          </a>
          <button className="cta-button">Book Now</button>
        </div>

        {/* Menú móvil hamburguesa */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <a href="#home" className="mobile-nav-link">Home</a>
          <a href="#services" className="mobile-nav-link">Services</a>
          <a href="#setups" className="mobile-nav-link">Setups</a>
          <a href="#account" className="mobile-nav-link">Account</a>
          <button className="mobile-cta-button">Book Now</button>
        </nav>
      )}
    </header>
  );
};

export default Header;

