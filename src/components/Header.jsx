import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { setIsCartOpen, cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar si estamos en la página VIP
  const isVipPage = location.pathname === '/vip';

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setIsLanguageMenuOpen(false);
    // Aquí se implementaría la funcionalidad real de cambio de idioma
  };

  const handleHomeClick = (e) => {
    if (isVipPage) {
      e.preventDefault();
      navigate('/');
    }
  };

  const currentLanguage = languages.find(l => l.code === selectedLanguage);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Menú de navegación izquierda */}
        <nav className="header-nav header-nav-left">
          {isVipPage ? (
            <>
              <a href="/" className="nav-link" onClick={handleHomeClick}>Home</a>
              <a href="#vip-plans" className="nav-link">Services</a>
            </>
          ) : (
            <>
              <a href="#home" className="nav-link">Home</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contacto" className="nav-link">Contact</a>
            </>
          )}
        </nav>

        {/* Logo centrado con icono de rueda - punto focal */}
        <div className="header-logo">
          <div className="header-logo-group">
            <img
              src="/loader.png"
              alt="Wheel Icon"
              className="header-wheel-icon"
            />
            <Logo />
          </div>
        </div>

        {/* Acciones secundarias derecha */}
        <div className="header-nav header-nav-right">
          <button className="cta-button vip-button" onClick={() => navigate('/vip-access')}>
            <svg className="crown-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 7l3 2 7-5 7 5 3-2v10H2V7z" />
            </svg>
            VIP
          </button>

          {/* Language Selector */}
          <div className="language-selector">
            <button
              className="language-button"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              aria-label="Change language"
            >
              <span className="language-flag">{currentLanguage?.flag}</span>
              <svg className="language-chevron" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>

            {isLanguageMenuOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${selectedLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="nav-link nv nav-link-utility cart-trigger cart-trigger-dark" onClick={() => setIsCartOpen(true)}>
            <span>Cart ({cartItems.length})</span>
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
          {isVipPage ? (
            <>
              <a href="/" className="mobile-nav-link" onClick={handleHomeClick}>Home</a>
              <a href="#vip-plans" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            </>
          ) : (
            <>
              <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#contacto" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </>
          )}
          <button className="mobile-nav-link" onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}>
            Cart ({cartItems.length})
          </button>

          {/* Language selector for mobile */}
          <div className="mobile-language-selector">
            <span className="mobile-language-label">Language:</span>
            <div className="mobile-language-options">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`mobile-language-btn ${selectedLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  <span>{lang.flag}</span>
                </button>
              ))}
            </div>
          </div>

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

