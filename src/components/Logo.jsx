import React, { useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="logo-container">
      {!imgError ? (
          <img 
            src="/logo.png" 
            alt="Shining Wheels" 
            className="logo-image"
            onError={() => setImgError(true)}
          />
      ) : (
        <div className="logo-text-wrapper">
          <div className="logo-line logo-top">SHINING</div>
          <div className="logo-line logo-bottom">WHEELS</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
