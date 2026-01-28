import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VipHero.css';
import { FaCrown } from 'react-icons/fa';

const VipHero = () => {
    const { t } = useLanguage();
    return (
        <section className="vip-hero">
            <div className="vip-hero-mesh"></div>
            <div className="vip-hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="vip-particle"></div>
                ))}
            </div>

            <div className="vip-hero-content">
                <div className="vip-hero-badge">
                    <FaCrown className="vip-badge-icon" />
                    <span>{t('vipHero.badge')}</span>
                </div>
                <h1 className="vip-hero-title">
                    {t('vipHero.title')} <br />
                    <span>{t('vipHero.titleSpan')}</span>
                </h1>
                <p className="vip-hero-subtitle">
                    {t('vipHero.subtitle')}
                </p>
                <div className="vip-hero-scroll">
                    <div className="scroll-line"></div>
                </div>
            </div>
        </section>
    );
};

export default VipHero;
