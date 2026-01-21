import React, { useState, useEffect } from 'react';
import './GalleryButton.css';

const GalleryButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample gallery items - you can replace these with actual images/videos
    const galleryItems = [
        { type: 'video', src: '/public/aaa.mp4', alt: 'Detailing work 1' },
        { type: 'video', src: '/public/bbb.mp4', alt: 'Detailing work 2' },
        { type: 'video', src: '/public/ccc.mp4', alt: 'Detailing process' },
        { type: 'image', src: '/public/fotogaleria1.jpg', alt: 'Detailing work 3' },
        { type: 'video', src: '/public/video2.mp4', alt: 'Detailing work 4' },
        { type: 'video', src: '/public/video3.mp4', alt: 'Before and after' },
    ];

    const openGallery = () => {
        setIsOpen(true);
        setCurrentIndex(0);
    };

    const closeGallery = () => {
        setIsOpen(false);
    };

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const goToItem = (index) => {
        setCurrentIndex(index);
    };

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowRight') nextItem();
            if (e.key === 'ArrowLeft') prevItem();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const currentItem = galleryItems[currentIndex];

    return (
        <>
            {/* Floating Gallery Button */}
            <button
                className="gallery-float-button"
                onClick={openGallery}
                aria-label="Abrir galería"
                title="Ver galería de trabajos"
            >
                <span className="gallery-icon">💡</span>
            </button>

            {/* Gallery Popup Modal */}
            {isOpen && (
                <div className="gallery-modal-overlay" onClick={closeGallery}>
                    <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="gallery-close" onClick={closeGallery} aria-label="Cerrar galería">
                            ×
                        </button>

                        {/* Gallery Content */}
                        <div className="gallery-content">
                            {/* Previous Button */}
                            <button
                                className="gallery-nav gallery-nav-prev"
                                onClick={prevItem}
                                aria-label="Anterior"
                            >
                                ‹
                            </button>

                            {/* Media Display */}
                            <div className="gallery-media">
                                {currentItem.type === 'image' ? (
                                    <img
                                        src={currentItem.src}
                                        alt={currentItem.alt}
                                        className="gallery-image"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23222" width="800" height="600"/%3E%3Ctext fill="%23666" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                ) : (
                                    <video
                                        src={currentItem.src}
                                        className="gallery-video"
                                        controls
                                        autoPlay
                                        loop
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const placeholder = document.createElement('div');
                                            placeholder.className = 'video-placeholder';
                                            placeholder.textContent = 'Video no disponible';
                                            e.target.parentNode.appendChild(placeholder);
                                        }}
                                    />
                                )}
                            </div>

                            {/* Next Button */}
                            <button
                                className="gallery-nav gallery-nav-next"
                                onClick={nextItem}
                                aria-label="Siguiente"
                            >
                                ›
                            </button>
                        </div>

                        {/* Thumbnails / Dots Navigation */}
                        <div className="gallery-thumbnails">
                            {galleryItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToItem(index)}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                >
                                    {item.type === 'video' ? '▶' : '●'}
                                </button>
                            ))}
                        </div>

                        {/* Counter */}
                        <div className="gallery-counter">
                            {currentIndex + 1} / {galleryItems.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryButton;
