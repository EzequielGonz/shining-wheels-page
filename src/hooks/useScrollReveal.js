import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll reveal animations using Intersection Observer API
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Whether animation should trigger only once
 * @returns {Object} ref - Ref to attach to the element
 */
const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true,
    } = options;

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Skip animations for users who prefer reduced motion
            element.classList.add('scroll-reveal-visible');
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-reveal-visible');

                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        entry.target.classList.remove('scroll-reveal-visible');
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return ref;
};

export default useScrollReveal;
