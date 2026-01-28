import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './WhyDifferent.css';
import { FaHome, FaClock, FaStar, FaFlask, FaShieldAlt, FaUserCog } from 'react-icons/fa';

const WhyDifferent = () => {
  const { t } = useLanguage();
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useScrollReveal({ threshold: 0.1 });

  const features = [
    { titleKey: 'whyDifferent.absoluteComfort', descKey: 'whyDifferent.absoluteComfortDesc', icon: <FaHome />, size: 'large' },
    { titleKey: 'whyDifferent.timeSaving', descKey: 'whyDifferent.timeSavingDesc', icon: <FaClock />, size: 'large' },
    { titleKey: 'whyDifferent.premiumProducts', descKey: 'whyDifferent.premiumProductsDesc', icon: <FaStar />, size: 'small' },
    { titleKey: 'whyDifferent.multiStage', descKey: 'whyDifferent.multiStageDesc', icon: <FaFlask />, size: 'small' },
    { titleKey: 'whyDifferent.advancedProtection', descKey: 'whyDifferent.advancedProtectionDesc', icon: <FaShieldAlt />, size: 'small' },
    { titleKey: 'whyDifferent.personalized', descKey: 'whyDifferent.personalizedDesc', icon: <FaUserCog />, size: 'small' }
  ];

  return (
    <section className="why-different" id="why-different">
      <div className="why-different-container">
        <div className="why-different-header scroll-reveal-fade-up" ref={headerRef}>
          <span className="section-tag">{t('whyDifferent.tag')}</span>
          <h2 className="why-different-title">{t('whyDifferent.title')}</h2>
          <div className="title-accent"></div>
          <p className="why-different-subtitle">{t('whyDifferent.subtitle')}</p>
        </div>

        <div className="bento-grid scroll-reveal-stagger" ref={gridRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card ${feature.size}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bento-glow"></div>
              <div className="bento-content">
                <div className="bento-icon">
                  {feature.icon}
                </div>
                <h3 className="bento-title">{t(feature.titleKey)}</h3>
                <p className="bento-description">{t(feature.descKey)}</p>
              </div>
              <div className="bento-accent"></div>
            </div>
          ))}
        </div>

        <div className="why-different-cta">
          <a href="#services" className="cta-link">
            {t('whyDifferent.cta')}
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
