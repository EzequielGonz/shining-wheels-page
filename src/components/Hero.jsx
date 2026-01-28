import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
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
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          <h2 className="hero-location">
            {t('hero.location')}
          </h2>
          <p className="hero-tagline">
            {t('hero.tagline')}
          </p>
        </div>

        <div className="hero-buttons">
          <a
            href="https://wa.me/13054950045?text=Hello,%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button-solid"
          >
            {t('hero.bookAppointment')}
          </a>
          <a href="#services" className="hero-button-outline">
            {t('hero.viewServices')}
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



