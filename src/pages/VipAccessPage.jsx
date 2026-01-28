import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { useLanguage } from '../context/LanguageContext';
import './VipAccessPage.css';

const VipAccessPage = () => {
    const { t } = useLanguage();
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const CORRECT_PASSWORD = 'VIPWHEELS';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            navigate('/vip');
        } else {
            setError(true);
            setPassword('');
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="vip-access-page">
            <BackgroundAnimation />
            <div className="access-container">
                <div className="access-card animate-on-scroll animated">
                    <div className="crown-icon-large">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 7l3 2 7-5 7 5 3-2v10H2V7z" />
                            <path d="M2 17h20" />
                        </svg>
                    </div>
                    <h1>{t('vipAccess.title')}</h1>
                    <p>{t('vipAccess.subtitle')}</p>

                    <form onSubmit={handleSubmit} className={`access-form ${error ? 'shake' : ''}`}>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                placeholder={t('vipAccess.placeholder')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            <button type="submit" className="submit-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        {error && <span className="error-text">{t('vipAccess.error')}</span>}
                    </form>

                    <button className="back-link" onClick={() => navigate('/')}>
                        {t('vipAccess.backHome')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VipAccessPage;
