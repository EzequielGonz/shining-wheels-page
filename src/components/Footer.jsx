import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';
import Logo from './Logo';

const Footer = ({ isVip = false }) => {
    const { t } = useLanguage();
    return (
        <footer className={`footer ${isVip ? 'footer-vip' : ''}`}>
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo-wrapper">
                        <img
                            src="/loader.png"
                            alt="Shining Wheels"
                            className="footer-wheel-icon"
                        />
                        <Logo />
                    </div>
                    <p className="footer-desc">
                        {t('footer.description')}
                    </p>
                    <p className="footer-location">{t('footer.location')}</p>
                    <div className="footer-socials">
                        <div className="social-icon">IG</div>
                        <div className="social-icon">FB</div>
                        <div className="social-icon">WA</div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>{t('footer.services')}</h4>
                        <ul>
                            <li><a href="#services">{t('plans.essentials')}</a></li>
                            <li><a href="#services">{t('plans.standard')}</a></li>
                            <li><a href="#services">{t('plans.pro')}</a></li>
                            <li><a href="#services">{t('plans.firstClass')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{t('footer.company')}</h4>
                        <ul>
                            <li><a href="#">{t('footer.aboutUs')}</a></li>
                            <li><a href="#">{t('footer.contact')}</a></li>
                            <li><a href="#">{t('footer.privacy')}</a></li>
                            <li><a href="#">{t('footer.terms')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-strip">
                <div className="footer-bottom">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                </div>
                <div className="footer-bluepixel-section">
                    <span className="bluepixel-section-text">{t('footer.developedBy')}</span>
                    <div className="bluepixel-brand">
                        <img
                            src="https://i.ibb.co/4nmtSKCW/bluepixelbg.png"
                            alt="BluePixel Logo"
                            className="bluepixel-logo"
                        />
                        <span className="bluepixel-name">BluePixel</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
