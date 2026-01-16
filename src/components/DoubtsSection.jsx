import React, { useState } from 'react';
import './DoubtsSection.css';

const DoubtsSection = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        doubt: '',
        name: '',
        phone: ''
    });
    const [isSent, setIsSent] = useState(false);

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
        const message = `Hola! Tengo una duda:\n\n*Duda:* ${formData.doubt}\n*Nombre:* ${formData.name}\n*Teléfono:* ${formData.phone}`;
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
                <div className="doubts-header">
                    <h2>¿Tenés dudas?</h2>
                    <p>Estamos acá para ayudarte. Dejanos tu consulta y te contactamos en minutos.</p>
                </div>

                <div className="doubts-form-wrapper">
                    {!isSent ? (
                        <div className={`doubts-form-step step-${step}`}>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${(step / 3) * 100}%` }}></div>
                            </div>

                            {step === 1 && (
                                <div className="input-group">
                                    <label htmlFor="doubt">¿En qué podemos ayudarte?</label>
                                    <div className="input-with-arrow">
                                        <textarea
                                            id="doubt"
                                            name="doubt"
                                            placeholder="Escribí tu consulta aquí..."
                                            value={formData.doubt}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            autoFocus
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
                                    <label htmlFor="name">¿Cuál es tu nombre?</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Tu nombre completo"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            autoFocus
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
                                    <label htmlFor="phone">Dejanos tu celular</label>
                                    <div className="input-with-arrow">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (123) 456-7890"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            autoFocus
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
                                Paso {step} de 3
                            </div>
                        </div>
                    ) : (
                        <div className="doubts-success">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3>¡Mensaje enviado!</h3>
                            <p>Te estamos redirigiendo a WhatsApp para finalizar la consulta...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DoubtsSection;
