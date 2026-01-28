import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './DoubtsSection.css';

const DoubtsSection = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        doubt: '',
        name: '',
        phone: ''
    });
    const [isSent, setIsSent] = useState(false);

    const headerRef = useScrollReveal({ threshold: 0.3 });
    const formRef = useScrollReveal({ threshold: 0.2 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            handleFinalSubmit();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            nextStep();
        }
    };

    const handleFinalSubmit = () => {
        const qLabel = t('doubts.messageQuestion');
        const nLabel = t('doubts.messageName');
        const pLabel = t('doubts.messagePhone');
        const message = `Hello! I have a question:\n\n*${qLabel}:* ${formData.doubt}\n*${nLabel}:* ${formData.name}\n*${pLabel}:* ${formData.phone}`;
        const whatsappUrl = `https://wa.me/+13054950045?text=${encodeURIComponent(message)}`;

        setIsSent(true);

        // Redirect to WhatsApp after a brief delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1500);
    };

    return (
        <section className="doubts-section" id="contacto">
            <div className="doubts-container">
                <div className="doubts-header scroll-reveal-fade-up" ref={headerRef}>
                    <h2>{t('doubts.title')}</h2>
                    <p>{t('doubts.subtitle')}</p>
                </div>

                <div className="doubts-form-wrapper scroll-reveal-fade" ref={formRef}>
                    {!isSent ? (
                        <>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${(step / 3) * 100}%` }}></div>
                            </div>
                            <div className={`doubts-form-step step-${step}`}>
                            {step === 1 && (
                                <div className="input-group">
                                    <label htmlFor="doubt">{t('doubts.helpYou')}</label>
                                    <div className="input-with-arrow">
                                        <textarea
                                            id="doubt"
                                            name="doubt"
                                            placeholder={t('doubts.placeholderQuestion')}
                                            value={formData.doubt}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}

                                        />
                                        <button
                                            className="arrow-btn"
                                            onClick={nextStep}
                                            disabled={!formData.doubt.trim()}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="input-group">
                                    <label htmlFor="name">{t('doubts.yourName')}</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder={t('doubts.placeholderName')}
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}

                                        />
                                        <button
                                            className="arrow-btn"
                                            onClick={nextStep}
                                            disabled={!formData.name.trim()}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="input-group">
                                    <label htmlFor="phone">{t('doubts.yourNumber')}</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder={t('doubts.placeholderPhone')}
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}

                                        />
                                        <button
                                            className="arrow-btn submit-btn"
                                            onClick={nextStep}
                                            disabled={!formData.phone.trim()}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="step-indicator">
                                {t('doubts.stepOf', { step })}
                            </div>
                            </div>
                        </>
                    ) : (
                        <div className="doubts-success">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3>{t('doubts.messageSent')}</h3>
                            <p>{t('doubts.redirecting')}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DoubtsSection;
