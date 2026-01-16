import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();
  const navigate = useNavigate();

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
          <button className="nav-link nv nav-link-utility cart-trigger cart-trigger-dark" onClick={() => setIsCartOpen(true)}>
            <span>Cart ({cartItems.length})</span>
          </button>
          <a href="#account" className="nav-link nv-account nav-link-utility">
            <span>Account</span>
          </a>
          <button className="cta-button vip-button" onClick={() => navigate('/vip-access')}>
            <svg className="crown-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 7l3 2 7-5 7 5 3-2v10H2V7z" />
            </svg>
            VIP
          </button>
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
          <button className="mobile-nav-link" onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}>
            Cart ({cartItems.length})
          </button>
          <a href="#account" className="mobile-nav-link">Account</a>
          <button className="mobile-cta-button vip-button" onClick={() => navigate('/vip-access')}>
            <svg className="crown-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 7l3 2 7-5 7 5 3-2v10H2V7z" />
            </svg>
            VIP
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;

