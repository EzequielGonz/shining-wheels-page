import React from 'react';
import './VipBanner.css';
import { FaCrown, FaStar } from 'react-icons/fa';

const VipBanner = () => {
    return (
        <div className="vip-banner">
            <div className="vip-banner-content">
                <FaCrown className="vip-crown-icon" />
                <span className="vip-banner-text">
                    <strong>¡Bienvenido al Club VIP!</strong> Disfruta de precios exclusivos en todos nuestros servicios
                </span>
                <FaStar className="vip-star-icon" />
            </div>
        </div>
    );
};

export default VipBanner;
