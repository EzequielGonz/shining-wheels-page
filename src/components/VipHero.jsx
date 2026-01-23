import React from 'react';
import './VipHero.css';
import { FaCrown } from 'react-icons/fa';

const VipHero = () => {
    return (
        <section className="vip-hero">
            <div className="vip-hero-mesh"></div>
            <div className="vip-hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="vip-particle"></div>
                ))}
            </div>

            <div className="vip-hero-content">
                <div className="vip-hero-badge">
                    <FaCrown className="vip-badge-icon" />
                    <span>Exclusive Access</span>
                </div>
                <h1 className="vip-hero-title">
                    The Gold Standard <br />
                    <span>of Automotive Care</span>
                </h1>
                <p className="vip-hero-subtitle">
                    An experience designed only for those who accept nothing less than perfection.
                </p>
                <div className="vip-hero-scroll">
                    <div className="scroll-line"></div>
                </div>
            </div>
        </section>
    );
};

export default VipHero;
