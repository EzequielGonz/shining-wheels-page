import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VipPhilosophy.css';

const VipPhilosophy = () => {
    const { t } = useLanguage();
    return (
        <section className="vip-philosophy">
            <div className="philosophy-container">
                <div className="philosophy-text">
                    <h2 className="philosophy-title">{t('vipPhilosophy.title')}</h2>
                    <p className="philosophy-p">{t('vipPhilosophy.p')}</p>
                    <div className="philosophy-thanks">
                        <h3>{t('vipPhilosophy.thanks')}</h3>
                        <p>{t('vipPhilosophy.signature')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipPhilosophy;
