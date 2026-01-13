import React from 'react';
import { useCart } from '../context/CartContext';
import './ExclusiveService.css';
import { FaCar, FaTachometerAlt, FaShieldAlt, FaBroom, FaRegSun, FaLightbulb } from 'react-icons/fa';

const ExclusiveService = ({ isVip = false }) => {
  const { toggleAddon, cartItems } = useCart();

  const addonPricing = {
    'Recubrimiento Cerámico': { normal: 499, vip: 449 },
    'Restauración de Faros': { normal: 89, vip: 79 },
    'Limpieza Profunda de Tapicería': { normal: 149, vip: 129 },
    'Pulido de Cristales': { normal: 79, vip: 69 },
    'Detallado de Motor': { normal: 99, vip: 89 },
    'Protección de Llantas': { normal: 59, vip: 49 },
  };

  const getAddonPrice = (serviceName) => {
    const price = isVip ? addonPricing[serviceName].vip : addonPricing[serviceName].normal;
    return `Desde $${price}`;
  };

  const addons = [
    { service: 'Recubrimiento Cerámico', icon: <FaShieldAlt /> },
    { service: 'Restauración de Faros', icon: <FaLightbulb /> },
    { service: 'Limpieza Profunda de Tapicería', icon: <FaBroom /> },
    { service: 'Pulido de Cristales', icon: <FaRegSun /> },
    { service: 'Detallado de Motor', icon: <FaTachometerAlt /> },
    { service: 'Protección de Llantas', icon: <FaCar /> },
  ];

  const isAddonInCart = (addonName) => {
    return cartItems.some((item) => item.type === 'addon' && item.name === addonName);
  };

  const handleToggleAddon = (addon) => {
    const price = getAddonPrice(addon.service);
    // Only pass serializable data (exclude icon which is a React component)
    toggleAddon({ service: addon.service, price, name: addon.service });
  };

  return (
    <section className="exclusive-services" id="add-ons">
      <div className="exclusive-container">
        <h2 className="exclusive-title">Servicios Exclusivos Adicionales</h2>
        <p className="exclusive-subtitle">
          {isVip
            ? 'Añade extras a tu plan VIP con precios especiales'
            : 'Personaliza tu paquete con nuestros add-ons premium.'}
        </p>
        <div className="addons-grid">
          {addons.map((addon, index) => (
            <div key={index} className="addon-card">
              <div className="addon-icon">{addon.icon}</div>
              <h3 className="addon-name">{addon.service}</h3>
              <p className="addon-price">{getAddonPrice(addon.service)}</p>
              <button
                className={`addon-button ${isAddonInCart(addon.service) ? 'selected' : ''}`}
                onClick={() => handleToggleAddon(addon)}
              >
                {isAddonInCart(addon.service) ? '✓ Seleccionado' : 'Agregar'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveService;
