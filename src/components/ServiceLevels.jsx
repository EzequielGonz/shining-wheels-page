import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ServiceLevels.css';

const ServiceLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const { addPlan, toggleAddon, cartItems } = useCart();

  // Datos de ejemplo - reemplazar con información real más tarde
  const levels = [
    {
      name: 'Essentials',
      price: '$89',
      services: [
        'Exterior Wash',
        'Tire & Wheel Clean',
        'Door Jambs',
        'Dashboard Wipe',
        'Vacuum Interior',
      ],
    },
    {
      name: 'Standard',
      price: '$149',
      services: [
        'Exterior Wash',
        'Tire & Wheel Clean',
        'Door Jambs',
        'Dashboard Wipe',
        'Vacuum Interior',
        'Interior Wipe Down',
        'Windows Inside & Out',
        'Tire Dressing',
      ],
    },
    {
      name: 'Pro',
      price: '$249',
      services: [
        'Exterior Wash',
        'Tire & Wheel Clean',
        'Door Jambs',
        'Dashboard Wipe',
        'Vacuum Interior',
        'Interior Wipe Down',
        'Windows Inside & Out',
        'Tire Dressing',
        'Clay Bar Treatment',
        'Paint Protection',
        'Interior Deep Clean',
        'Leather Conditioning',
      ],
    },
    {
      name: 'First Class',
      price: '$399',
      services: [
        'Exterior Wash',
        'Tire & Wheel Clean',
        'Door Jambs',
        'Dashboard Wipe',
        'Vacuum Interior',
        'Interior Wipe Down',
        'Windows Inside & Out',
        'Tire Dressing',
        'Clay Bar Treatment',
        'Paint Protection',
        'Interior Deep Clean',
        'Leather Conditioning',
        'Ceramic Coating',
        'Full Detail Service',
        'Engine Bay Clean',
        'Odor Treatment',
      ],
    },
  ];

  // Todos los servicios únicos para las filas
  const allServices = [
    'Exterior Wash',
    'Tire & Wheel Clean',
    'Door Jambs',
    'Dashboard Wipe',
    'Vacuum Interior',
    'Interior Wipe Down',
    'Windows Inside & Out',
    'Tire Dressing',
    'Clay Bar Treatment',
    'Paint Protection',
    'Interior Deep Clean',
    'Leather Conditioning',
    'Ceramic Coating',
    'Full Detail Service',
    'Engine Bay Clean',
    'Odor Treatment',
  ];

  const addOns = [
    { service: 'Paint Correction', price: '+$150' },
    { service: 'Headlight Restoration', price: '+$75' },
    { service: 'Pet Hair Removal', price: '+$50' },
    { service: 'Fabric Protection', price: '+$100' },
    { service: 'Paint Protection Film', price: '+$300' },
  ];

  // Highlights per level
  const getHighlights = (levelName) => {
    switch (levelName) {
      case 'Essentials':
        return [
          'Exterior Wash & Dry',
          'Tire & Wheel Deep Clean',
          'Vacuum Interior',
          'Dashboard Wipe'
        ];
      case 'Standard':
        return [
          'Everything in Essentials',
          'Interior Wipe Down',
          'Windows Inside & Out',
          'Tire Dressing'
        ];
      case 'Pro':
        return [
          'Everything in Standard',
          'Clay Bar Treatment',
          'Paint Protection',
          'Leather Conditioning'
        ];
      case 'First Class':
        return [
          'Everything in Pro',
          'Ceramic Coating',
          'Full Detail Service',
          'Engine Bay Clean'
        ];
      default:
        return [];
    }
  };

  const isAddonInCart = (addonName) => {
    return cartItems.some(item => item.name === addonName && item.type === 'addon');
  };

  return (
    <section className="service-levels" id="services">
      <div className="service-levels-container">
        <h2 className="service-levels-title">Nuestros Planes Premium</h2>
        
        {/* Pricing Cards */}
        <div className="pricing-cards-container">
          {levels.map((level, index) => (
            <div className={`pricing-card ${index === 2 ? 'featured' : ''}`} key={index}>
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{level.name}</h3>
                <div className="pricing-plan-price">{level.price}</div>
              </div>
              
              <div className="pricing-card-features">
                {getHighlights(level.name).map((feature, i) => (
                   <div key={i} className="feature-item">
                      <span className="feature-icon">
                        {feature.includes('Everything in') ? '✦' : '✓'}
                      </span>
                      <span className="feature-text">{feature}</span>
                   </div>
                ))}
              </div>
              
              <button 
                className="pricing-action-btn"
                onClick={() => addPlan(level)}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="add-ons-section">
          <h3 className="add-ons-title">Servicios Adicionales</h3>
          <div className="add-ons-grid">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className={`add-on-item ${isAddonInCart(addon.service) ? 'selected' : ''}`}
                onClick={() => toggleAddon(addon)}
                style={{ cursor: 'pointer', borderColor: isAddonInCart(addon.service) ? 'var(--primary-red)' : 'rgba(255, 255, 255, 0.1)' }}
              >
                <span className="add-on-service">{addon.service}</span>
                <span className="add-on-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevels;

