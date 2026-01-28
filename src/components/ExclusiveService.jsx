import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import useScrollReveal from '../hooks/useScrollReveal';
import './ExclusiveService.css';
import { FaCar, FaTachometerAlt, FaShieldAlt, FaBroom, FaRegSun, FaLightbulb } from 'react-icons/fa';

const ADDON_KEYS = {
  'Ceramic Coating': 'exclusive.ceramicCoating',
  'Headlight Restoration': 'exclusive.headlightRestoration',
  'Deep Upholstery Cleaning': 'exclusive.deepUpholstery',
  'Glass Polishing': 'exclusive.glassPolishing',
  'Engine Bay Detail': 'exclusive.engineBay',
  'Wheel Protection': 'exclusive.wheelProtection',
};

const ExclusiveService = ({ isVip = false }) => {
  const { t } = useLanguage();
  const { toggleAddon, cartItems } = useCart();
  const titleRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useScrollReveal({ threshold: 0.1 });

  const addonPricing = {
    'Ceramic Coating': { normal: 499, vip: 449 },
    'Headlight Restoration': { normal: 89, vip: 79 },
    'Deep Upholstery Cleaning': { normal: 149, vip: 129 },
    'Glass Polishing': { normal: 79, vip: 69 },
    'Engine Bay Detail': { normal: 99, vip: 89 },
    'Wheel Protection': { normal: 59, vip: 49 },
  };

  const getAddonPrice = (serviceName) => {
    const price = isVip ? addonPricing[serviceName].vip : addonPricing[serviceName].normal;
    return t('exclusive.from', { price });
  };

  const addons = [
    { service: 'Ceramic Coating', icon: <FaShieldAlt /> },
    { service: 'Headlight Restoration', icon: <FaLightbulb /> },
    { service: 'Deep Upholstery Cleaning', icon: <FaBroom /> },
    { service: 'Glass Polishing', icon: <FaRegSun /> },
    { service: 'Engine Bay Detail', icon: <FaTachometerAlt /> },
    { service: 'Wheel Protection', icon: <FaCar /> },
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
        <h2 className="exclusive-title scroll-reveal-fade-up" ref={titleRef}>{t('exclusive.title')}</h2>
        <p className="exclusive-subtitle scroll-reveal-fade-up" ref={titleRef}>
          {isVip ? t('exclusive.subtitleVip') : t('exclusive.subtitle')}
        </p>
        <div className="addons-grid scroll-reveal-stagger" ref={gridRef}>
          {addons.map((addon, index) => (
            <div key={index} className="addon-card">
              <div className="addon-icon">{addon.icon}</div>
              <h3 className="addon-name">{t(ADDON_KEYS[addon.service])}</h3>
              <p className="addon-price">{getAddonPrice(addon.service)}</p>
              <button
                className={`addon-button ${isAddonInCart(addon.service) ? 'selected' : ''}`}
                onClick={() => handleToggleAddon(addon)}
              >
                {isAddonInCart(addon.service) ? t('exclusive.selected') : t('exclusive.add')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveService;
