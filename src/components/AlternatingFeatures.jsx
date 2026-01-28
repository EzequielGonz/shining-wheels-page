import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './AlternatingFeatures.css';

const AlternatingFeatures = () => {
  const { t } = useLanguage();
  const blocksRef = useRef([]);
  const [animatedBlocks, setAnimatedBlocks] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = blocksRef.current.indexOf(entry.target);
            setAnimatedBlocks((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <section className="alternating-features">
      {/* Bloque 1: Who I Am - Imagen izquierda / Texto derecha */}
      <div
        ref={(el) => (blocksRef.current[0] = el)}
        className={`feature-block ${animatedBlocks.has(0) ? 'animated' : ''}`}
      >
        <div className="feature-image-container feature-image-left">
          <img src="https://i.ibb.co/v6Bs2Jw4/Whats-App-Image-2026-01-16-at-2-49-36-PM.jpg" alt="Creator" className="feature-image" />
          <div className="feature-image-placeholder">
            <span>{t('alternating.photo')}</span>
          </div>
        </div>
        <div className="feature-content feature-content-right">
          <h2 className="feature-title">{t('alternating.whoIAm')}</h2>
          <p className="feature-intro">{t('alternating.whoIAmIntro')}</p>
          <p className="feature-text">{t('alternating.whoIAmText1')}</p>
          <p className="feature-text">
            {t('alternating.whoIAmText2')}
            <br />
            <span className="feature-highlight">{t('alternating.whoIAmHighlight')}</span>
          </p>
          <p className="feature-tagline">{t('alternating.whoIAmTagline')}</p>
        </div>
      </div>

      {/* Bloque 2: Why Us - Texto izquierda / Imagen derecha */}
      <div
        ref={(el) => (blocksRef.current[1] = el)}
        className={`feature-block  ${animatedBlocks.has(1) ? 'animated' : ''}`}
      >
        <div className="feature-content feature-content-left">
          <h2 className="feature-title">{t('alternating.whyUs')}</h2>
          <p className="feature-text">
            {t('alternating.whyUsText1')}
            <br />
            {t('alternating.whyUsText2')}
          </p>
          <ul className="feature-list">
            <li>{t('alternating.whyUsLi1')}</li>
            <li>{t('alternating.whyUsLi2')}</li>
          </ul>
          <p className="feature-text">
            <span className="feature-highlight">{t('alternating.whyUsHighlight')}</span>
          </p>
          <p className="feature-tagline">{t('alternating.whyUsTagline')}</p>
        </div>
        <div className="feature-image-container feature-image-right">
          {/* Video 1 - Replace with actual video path */}
          <video
            className="feature-video"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'feature-image-placeholder';
              placeholder.innerHTML = `<span>${t('alternating.video')}</span>`;
              e.target.parentNode.appendChild(placeholder);
            }}
          >
            <source src="/aaa.mp4" type="video/mp4" />
            <div className="feature-image-placeholder">
              <span>{t('alternating.video')}</span>
            </div>
          </video>
        </div>
      </div>

      {/* Bloque 3: Fundamentals - Imagen izquierda / Texto derecha */}
      <div
        ref={(el) => (blocksRef.current[2] = el)}
        className={`feature-block ${animatedBlocks.has(2) ? 'animated' : ''}`}
      >
        <div className="feature-image-container feature-image-left">
          {/* Video 2 - Replace with actual video path */}
          <video
            className="feature-video"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'feature-image-placeholder';
              placeholder.innerHTML = `<span>${t('alternating.video')}</span>`;
              e.target.parentNode.appendChild(placeholder);
            }}
          >
            <source src="/ccc.mp4" type="video/mp4" />
            <div className="feature-image-placeholder">
              <span>{t('alternating.video')}</span>
            </div>
          </video>
        </div>
        <div className="feature-content feature-content-right">
          <h2 className="feature-title">{t('alternating.fundamentals')}</h2>
          <p className="feature-text">
            {t('alternating.fundamentalsText1')}
            <br />
            <span className="feature-highlight">{t('alternating.fundamentalsHighlight')}</span>
          </p>
          <p className="feature-text">{t('alternating.fundamentalsText2')}</p>
          <p className="feature-text">{t('alternating.fundamentalsText3')}</p>
          <p className="feature-tagline">{t('alternating.fundamentalsTagline')}</p>
        </div>
      </div>
    </section>
  );
};

export default AlternatingFeatures;

