import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="loader-overlay">
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

