import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './DoubtsSection.css';

const DoubtsSection = () => {
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
        // Generate WhatsApp message
        const message = `Hello! I have a question:\n\n*Question:* ${formData.doubt}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}`;
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
                    <h2>Have Questions?</h2>
                    <p>We are here to help. Leave your query and we'll contact you in minutes.</p>
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
                                    <label htmlFor="doubt">How can we help you?</label>
                                    <div className="input-with-arrow">
                                        <textarea
                                            id="doubt"
                                            name="doubt"
                                            placeholder="Type your question here..."
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
                                    <label htmlFor="name">What is your name?</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your full name"
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
                                    <label htmlFor="phone">Leave us your number</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (123) 456-7890"
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
                                Step {step} of 3
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
                            <h3>Message Sent!</h3>
                            <p>Redirecting you to WhatsApp to finalize your inquiry...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DoubtsSection;
