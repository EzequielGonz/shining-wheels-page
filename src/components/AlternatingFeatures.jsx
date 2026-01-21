import React, { useEffect, useRef, useState } from 'react';
import './AlternatingFeatures.css';

const AlternatingFeatures = () => {
  const blocksRef = useRef([]);
  const [animatedBlocks, setAnimatedBlocks] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = blocksRef.current.indexOf(entry.target);
            setAnimatedBlocks((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <section className="alternating-features">
      {/* Bloque 1: Who I Am - Imagen izquierda / Texto derecha */}
      <div
        ref={(el) => (blocksRef.current[0] = el)}
        className={`feature-block ${animatedBlocks.has(0) ? 'animated' : ''}`}
      >
        <div className="feature-image-container feature-image-left">
          <img src="https://i.ibb.co/v6Bs2Jw4/Whats-App-Image-2026-01-16-at-2-49-36-PM.jpg" alt="Creator" className="feature-image" />
          <div className="feature-image-placeholder">
            <span>Photo</span>
          </div>
        </div>
        <div className="feature-content feature-content-right">
          <h2 className="feature-title">Who I Am</h2>
          <p className="feature-intro">
            Creator of systems. Detailer by craft.
          </p>
          <p className="feature-text">
            I believe in first-class service, executed at the highest level
          </p>
          <p className="feature-text">
            I design and execute every service as a system:
            <br />
            <span className="feature-highlight">
              process, technique, timing, and detail working in harmony.
            </span>
          </p>
          <p className="feature-tagline">
            Excellence allows no excuses.
          </p>
        </div>
      </div>

      {/* Bloque 2: Why Us - Texto izquierda / Imagen derecha */}
      <div
        ref={(el) => (blocksRef.current[1] = el)}
        className={`feature-block  ${animatedBlocks.has(1) ? 'animated' : ''}`}
      >
        <div className="feature-content feature-content-left">
          <h2 className="feature-title">Why Us</h2>
          <p className="feature-text">
            I use the best products in each category, for every material and surface.
            <br />
            Selected from the world's leading brands and applied with proven, safe methods.
          </p>
          <ul className="feature-list">
            <li>Nothing is generic.</li>
            <li>Every chemical, tool, and technique has a purpose.</li>
          </ul>
          <p className="feature-text">
            <span className="feature-highlight">
              Top-tier products.
              <br />
              World-class procedures.
              <br />
              Genuine care — never rushed, never automated.
            </span>
          </p>
          <p className="feature-tagline">
            Not the cheapest.
            <br />
            Simply the best — because true excellence should never be compromised.
          </p>
        </div>
        <div className="feature-image-container feature-image-right">
          {/* Video 1 - Replace with actual video path */}
          <video
            className="feature-video"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'feature-image-placeholder';
              placeholder.innerHTML = '<span>Video</span>';
              e.target.parentNode.appendChild(placeholder);
            }}
          >
            <source src="/aaa.mp4" type="video/mp4" />
            <div className="feature-image-placeholder">
              <span>Video</span>
            </div>
          </video>
        </div>
      </div>

      {/* Bloque 3: Fundamentals - Imagen izquierda / Texto derecha */}
      <div
        ref={(el) => (blocksRef.current[2] = el)}
        className={`feature-block ${animatedBlocks.has(2) ? 'animated' : ''}`}
      >
        <div className="feature-image-container feature-image-left">
          {/* Video 2 - Replace with actual video path */}
          <video
            className="feature-video"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'feature-image-placeholder';
              placeholder.innerHTML = '<span>Video</span>';
              e.target.parentNode.appendChild(placeholder);
            }}
          >
            <source src="/ccc.mp4" type="video/mp4" />
            <div className="feature-image-placeholder">
              <span>Video</span>
            </div>
          </video>
        </div>
        <div className="feature-content feature-content-right">
          <h2 className="feature-title">FUNDAMENTALS</h2>
          <p className="feature-text">
            The goal is simple: to deliver the best service of your life.
            <br />
            <span className="feature-highlight">No shortcuts. No excuses.</span>
          </p>
          <p className="feature-text">
            I don't sell services — I deliver real care.
            <br />
            If you trust me with your car, I will never fail you.
          </p>
          <p className="feature-text">
            You'll receive a level of service better than you imagined,
            <br />
            because excellence is a responsibility.
          </p>
          <p className="feature-tagline">
            Trust is not taken lightly.
            <br />
            And it's never broken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlternatingFeatures;

