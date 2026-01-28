import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const testimonialKeys = [
        { text: 'testimonials.t1', name: 'testimonials.t1Name', detail: 'testimonials.t1Detail' },
        { text: 'testimonials.t2', name: 'testimonials.t2Name', detail: 'testimonials.t2Detail' },
        { text: 'testimonials.t3', name: 'testimonials.t3Name', detail: 'testimonials.t3Detail' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const StarIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    );

    const PencilIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
    );

    return (
        <section className="testimonials-section" ref={sectionRef}>
            <div className="testimonials-container">
                <h2 className={`testimonials-title ${isVisible ? 'animated' : 'animate-on-scroll'}`}>
                    {t('testimonials.title')}
                </h2>

                <div className="testimonials-grid">
                    {testimonialKeys.map((item, index) => (
                        <div
                            key={index}
                            className="testimonial-card"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
                            }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                            </div>
                            <p className="testimonial-text">"{t(item.text)}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{t(item.name)}</span>
                                <span className="author-detail">{t(item.detail)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="review-btn-container" style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                }}>
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="review-btn"
                    >
                        <PencilIcon />
                        <span>{t('testimonials.leaveReview')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
