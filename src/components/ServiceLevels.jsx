import React from 'react';
import { useCart } from '../context/CartContext';
import './ServiceLevels.css';

const ServiceLevels = ({ isVip = false }) => {
  const { addPlan } = useCart();

  const pricing = {
    essentials: { normal: 89, vip: 75 },
    standard: { normal: 149, vip: 129 },
    pro: { normal: 249, vip: 219 },
    'first-class': { normal: 399, vip: 349 },
  };

  const getPrice = (planId) => {
    const price = isVip ? pricing[planId].vip : pricing[planId].normal;
    return `$${price}`;
  };
  
  const plans = [
    {
      id: 'essentials',
      name: 'Essentials',
      description: 'Limpieza básica exterior e interior',
      features: [
        'Lavado exterior completo',
        'Limpieza de llantas',
        'Aspirado interior',
        'Limpieza de tablero'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      description: 'Servicio completo con detalles interiores',
      features: [
        'Todo lo de Essentials',
        'Limpieza de ventanas',
        'Tratamiento de llantas',
        'Limpieza de puertas'
      ],
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Servicio premium con protección',
      features: [
        'Todo lo de Standard',
        'Tratamiento de pintura',
        'Protección interior',
        'Detalle de cuero'
      ]
    },
    {
      id: 'first-class',
      name: 'First Class',
      description: 'Servicio completo de lujo',
      features: [
        'Todo lo de Pro',
        'Recubrimiento cerámico',
        'Servicio de motor',
        'Tratamiento de olores'
      ]
    }
  ];

  const handleSelectPlan = (plan) => {
    const price = getPrice(plan.id);
    addPlan({ ...plan, price });
  };

  return (
    <section className="service-levels" id="services">
      <div className="service-levels-container">
        <h2 className="service-levels-title">
          {isVip ? 'Planes VIP Exclusivos' : 'Planes de Servicio'}
        </h2>
        <p className="service-levels-subtitle">
          {isVip
            ? 'Precios especiales para nuestros miembros VIP'
            : 'Elige el plan perfecto para tu vehículo'}
        </p>

        <div className="plans-table-wrapper" role="region" aria-label="Planes y precios">
          <table className="plans-table">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Precio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Incluye</th>
                <th scope="col" aria-label="Acción"></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className={plan.popular ? 'popular' : ''}>
                  <td className="plan-name-cell">
                    <div className="plan-name-wrapper">
                      <span className="plan-name">{plan.name}</span>
                      {plan.popular && <span className="plan-badge">Más Popular</span>}
                    </div>
                  </td>
                  <td className="plan-price-cell">{getPrice(plan.id)}</td>
                  <td className="plan-description-cell">{plan.description}</td>
                  <td className="plan-features-cell">
                    <ul className="plan-features-list">
                      {plan.features.map((feature) => (
                        <li key={feature} className="plan-feature-item">
                          <span className="plan-feature-check">✓</span>
                          <span className="plan-feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="plan-action-cell">
                    <button className="plan-select-button" onClick={() => handleSelectPlan(plan)}>
                      Seleccionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevels;
