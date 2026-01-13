import React from 'react';
import './WhyDifferent.css';
import { FaHome, FaClock, FaStar, FaFlask, FaShieldAlt, FaUserCog } from 'react-icons/fa';

const WhyDifferent = () => {
  const features = [
    {
      title: 'Comodidad Absoluta',
      description: 'Llegamos donde estés. No necesitas moverte de tu casa u oficina.',
      icon: <FaHome />,
      size: 'large'
    },
    {
      title: 'Ahorro de Tiempo',
      description: 'Evita esperas en túneles de lavado. Nosotros hacemos el trabajo mientras tú continuas con tu día.',
      icon: <FaClock />,
      size: 'large'
    },
    {
      title: 'Productos Premium',
      description: 'Utilizamos solo productos de la más alta calidad para cada superficie de tu vehículo.',
      icon: <FaStar />,
      size: 'small'
    },
    {
      title: 'Proceso Multi-etapa',
      description: 'Limpieza profunda con productos especializados para cada tipo de suciedad.',
      icon: <FaFlask />,
      size: 'small'
    },
    {
      title: 'Protección Avanzada',
      description: 'Aplicamos selladores y protectores para mantener tu auto impecable por más tiempo.',
      icon: <FaShieldAlt />,
      size: 'small'
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada servicio se adapta a las necesidades específicas de tu vehículo.',
      icon: <FaUserCog />,
      size: 'small'
    }
  ];

  return (
    <section className="why-different" id="why-different">
      <div className="why-different-container">
        <div className="why-different-header">
          <span className="section-tag">Nuestra Diferencia</span>
          <h2 className="why-different-title">¿Por qué somos diferentes?</h2>
          <div className="title-accent"></div>
          <p className="why-different-subtitle">
            Descubre lo que nos hace únicos en el mercado del detailing automotriz
          </p>
        </div>

        <div className="bento-grid">
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
            Ver Nuestros Servicios
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
