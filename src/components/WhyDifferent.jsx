import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './WhyDifferent.css';
import { FaHome, FaClock, FaStar, FaFlask, FaShieldAlt, FaUserCog } from 'react-icons/fa';

const WhyDifferent = () => {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useScrollReveal({ threshold: 0.1 });

  const features = [
    {
      title: 'Absolute Comfort',
      description: 'We come to you. No need to leave your home or office.',
      icon: <FaHome />,
      size: 'large'
    },
    {
      title: 'Time Saving',
      description: 'Avoid waiting in car wash tunnels. We do the work while you continue with your day.',
      icon: <FaClock />,
      size: 'large'
    },
    {
      title: 'Premium Products',
      description: 'We use only the highest quality products for every surface of your vehicle.',
      icon: <FaStar />,
      size: 'small'
    },
    {
      title: 'Multi-stage Process',
      description: 'Deep cleaning with specialized products for every type of dirt.',
      icon: <FaFlask />,
      size: 'small'
    },
    {
      title: 'Advanced Protection',
      description: 'We apply sealants and protectants to keep your car flawless for longer.',
      icon: <FaShieldAlt />,
      size: 'small'
    },
    {
      title: 'Personalized Attention',
      description: 'Every service is adapted to the specific needs of your vehicle.',
      icon: <FaUserCog />,
      size: 'small'
    }
  ];

  return (
    <section className="why-different" id="why-different">
      <div className="why-different-container">
        <div className="why-different-header scroll-reveal-fade-up" ref={headerRef}>
          <span className="section-tag">Our Difference</span>
          <h2 className="why-different-title">Why Are We Different?</h2>
          <div className="title-accent"></div>
          <p className="why-different-subtitle">
            Discover what makes us unique in the auto detailing market
          </p>
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
                <h3 className="bento-title">{feature.title}</h3>
                <p className="bento-description">{feature.description}</p>
              </div>
              <div className="bento-accent"></div>
            </div>
          ))}
        </div>

        <div className="why-different-cta">
          <a href="#services" className="cta-link">
            View Our Services
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
