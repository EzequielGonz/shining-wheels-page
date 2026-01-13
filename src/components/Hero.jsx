import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
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
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            Premium Car Detailing
          </h1>
          <h2 className="hero-location">
            MIAMI
          </h2>
        </div>

        <div className="hero-buttons">
          <a
            href="https://wa.me/13054950045?text=Hola,%20quiero%20reservar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button-solid"
          >
            Book Appointment
          </a>
          <button className="hero-button-outline">
            View Services
          </button>
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



