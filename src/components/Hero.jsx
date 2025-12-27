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
          loop
          playsInline
          preload="auto"
        >
          <source src="https://ik.imagekit.io/hilcozgig/videohero.mp4" type="video/mp4" />
          {/* Fallback si no hay video */}
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Premium Car Detailing
          <span className="hero-subtitle">Miami</span>
        </h1>
        
        <div className="hero-buttons">
          <button className="hero-button hero-button-primary">
            Book Now
          </button>
          <button className="hero-button hero-button-secondary">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

