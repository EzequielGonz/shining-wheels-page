import React, { useEffect, useRef, useState } from 'react';
import './ExclusiveService.css';

const ExclusiveService = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const ClockIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clock-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    );

    const QuestionIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="question-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
    );

    return (
        <section className={`exclusive-service ${isVisible ? 'animated' : ''}`} ref={sectionRef}>
            <div className="exclusive-container">
                <h2 className="exclusive-title">
                    No somos un servicio premium
                    <br />
                    para todo el mundo.
                </h2>

                <p className="exclusive-text">
                    Solo para la gente que busca la diferencia. Aquellos atentos a los detalles.
                    <br />
                    Aquellos que deben ser tratados por el
                    <span className="exclusive-highlight"> "Mejor Servicio de Miami"</span>
                </p>

                <div className="questions-btn" onClick={() => setShowReview(true)}>
                    <QuestionIcon />
                    <span>¿Tienes Dudas?</span>
                </div>

                <div className="response-time-btn">
                    <ClockIcon />
                    <span>Tiempo de respuesta 2 horas</span>
                </div>

                {showReview && (
                    <div className="review-box">
                        <h3 className="review-title">Escribe tu reseña</h3>
                        <textarea
                            className="review-textarea"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Cuéntanos tu experiencia o tus dudas..."
                        />
                        <div className="review-actions">
                            <button className="review-send-btn">Enviar</button>
                            <button className="review-cancel-btn" onClick={() => setShowReview(false)}>Cerrar</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExclusiveService;
