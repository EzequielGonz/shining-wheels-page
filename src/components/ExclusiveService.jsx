import React, { useEffect, useRef, useState } from 'react';
import './ExclusiveService.css';

const ExclusiveService = () => {
    const [isVisible, setIsVisible] = useState(false);
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

                <div className="response-time-btn">
                    <ClockIcon />
                    <span>Tiempo de respuesta 2 horas</span>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveService;
