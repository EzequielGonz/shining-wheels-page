import React from 'react';
import './Hero.css';
import { FaCrown } from 'react-icons/fa';

const Hero = ({ isVip = false }) => {
  return (
    <section className={`hero ${isVip ? 'hero-vip' : ''}`} id="home">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/videoherocarwash.mp4" type="video/mp4" />
          {/* Fallback si no hay video */}
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-content">
        {isVip && (
          <div className="vip-hero-badge">
            <FaCrown className="vip-badge-icon" />
            <span>Miembro VIP Exclusivo</span>
          </div>
        )}
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            {isVip ? 'VIP Premium Detailing' : 'Premium Car Detailing'}
          </h1>
          <h2 className="hero-location">
            MIAMI
          </h2>
        </div>

        <div className="hero-buttons">
          <a href="#services" className="hero-button-solid">
            {isVip ? 'Ver Precios VIP' : 'Book Appointment'}
          </a>
          <a href="#add-ons" className="hero-button-outline">
            {isVip ? 'Servicios Exclusivos' : 'View Services'}
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


