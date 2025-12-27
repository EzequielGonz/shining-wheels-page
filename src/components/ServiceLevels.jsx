import React, { useState } from 'react';
import './ServiceLevels.css';

const ServiceLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

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

  return (
    <section className="service-levels" id="services">
      <div className="service-levels-container">
        <h2 className="service-levels-title">Elige tu nivel</h2>
        <p className="service-levels-subtitle">
          Cada nivel está diseñado para ofrecer el mejor servicio según tus necesidades
        </p>

        {/* Cuadro comparativo - Desktop */}
        <div className="comparison-table-desktop">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="service-column">Servicio</th>
                {levels.map((level, index) => (
                  <th key={index} className="level-header">
                    {level.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allServices.map((service, serviceIndex) => (
                <tr key={serviceIndex}>
                  <td className="service-name">{service}</td>
                  {levels.map((level, levelIndex) => (
                    <td key={levelIndex} className="service-check">
                      {level.services.includes(service) ? (
                        <span className="check-mark">✔︎</span>
                      ) : (
                        <span className="check-empty">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="price-label">Precio</td>
                {levels.map((level, index) => (
                  <td key={index} className="level-price">
                    {level.price}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Versión móvil - Acordeón */}
        <div className="comparison-mobile">
          {levels.map((level, index) => (
            <div key={index} className="level-card-mobile">
              <button
                className="level-card-header"
                onClick={() =>
                  setSelectedLevel(selectedLevel === index ? null : index)
                }
              >
                <div>
                  <h3 className="level-card-name">{level.name}</h3>
                  <span className="level-card-price">{level.price}</span>
                </div>
                <span className="level-card-toggle">
                  {selectedLevel === index ? '−' : '+'}
                </span>
              </button>
              {selectedLevel === index && (
                <div className="level-card-content">
                  <ul className="level-services-list">
                    {level.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="level-service-item">
                        <span className="check-mark">✔︎</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add-Ons */}
        <div className="add-ons-section">
          <h3 className="add-ons-title">Add-Ons</h3>
          <p className="add-ons-subtitle">Servicios adicionales disponibles</p>
          <div className="add-ons-grid">
            {addOns.map((addOn, index) => (
              <div key={index} className="add-on-item">
                <span className="add-on-service">{addOn.service}</span>
                <span className="add-on-price">{addOn.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership */}
        <div className="membership-section">
          <div className="membership-content">
            <h3 className="membership-title">Membership</h3>
            <p className="membership-description">
              Suscripción anual con <strong>10% off</strong> en todos los servicios
            </p>
            <button className="membership-button">Más información</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevels;

