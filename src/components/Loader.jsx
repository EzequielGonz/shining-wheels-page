import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // Mantener la referencia actualizada sin disparar efectos
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const DURATION = 1500; // 1.5 segundos
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      // Asegurar que el progreso nunca supere 100
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);

      setProgress(Math.floor(newProgress));

      if (newProgress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeout(() => {
          if (onCompleteRef.current) onCompleteRef.current();
        }, 500);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []); // Dependencias vacías para ejecutar solo una vez al montar

  return (
    <div className={`loader-overlay ${isComplete ? 'fade-out' : ''}`}>
      <div className="loader-container">
        <div className="loader-wheel">
          <img
            src="/loader.png"
            alt="Loading"
            className="loader-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="loader-progress">
          <div className="loader-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-text">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;

