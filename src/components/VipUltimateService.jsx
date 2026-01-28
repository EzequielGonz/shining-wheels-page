import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VipUltimateService.css';
import { useCart } from '../context/CartContext';
import { FaGem, FaGift, FaStar } from 'react-icons/fa';

const VipUltimateService = () => {
    const { t } = useLanguage();
    const { setServicePlan } = useCart();

    const handleSelect = () => {
        setServicePlan({
            name: t('vipUltimate.title'),
            price: 999,
            type: 'service',
            includesSurprise: true
        });
    };

    return (
        <section className="ultimate-vip">
            <div className="ultimate-container">
                <div className="ultimate-card">
                    <div className="ultimate-header">
                        <FaGem className="ultimate-icon" />
                        <h2>{t('vipUltimate.title')}</h2>
                        <div className="ultimate-price">$999</div>
                    </div>

                    <div className="ultimate-content">
                        <p className="ultimate-main-desc">{t('vipUltimate.desc')}</p>

                        <ul className="ultimate-features">
                            <li><FaStar /> {t('vipUltimate.f1')}</li>
                            <li><FaStar /> {t('vipUltimate.f2')}</li>
                            <li><FaStar /> {t('vipUltimate.f3')}</li>
                            <li><FaStar /> {t('vipUltimate.f4')}</li>
                            <li><FaStar /> {t('vipUltimate.f5')}</li>
                        </ul>

                        <div className="surprise-box">
                            <FaGift className="gift-icon" />
                            <div>
                                <strong>{t('vipUltimate.surpriseTitle')}</strong>
                                <p>{t('vipUltimate.surpriseDesc')}</p>
                            </div>
                        </div>

                        <button className="ultimate-button" onClick={handleSelect}>
                            {t('vipUltimate.bookBtn')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipUltimateService;
