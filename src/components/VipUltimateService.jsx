import React from 'react';
import './VipUltimateService.css';
import { useCart } from '../context/CartContext';
import { FaGem, FaGift, FaStar } from 'react-icons/fa';

const VipUltimateService = () => {
    const { setServicePlan } = useCart();

    const handleSelect = () => {
        setServicePlan({
            name: 'Ultimate Luxury VIP Experience',
            price: 999,
            type: 'service',
            includesSurprise: true
        });
    };

    return (
        <section className="ultimate-vip">
            <div className="ultimate-container">
                <div className="ultimate-card">
                    <div className="ultimate-header">
                        <FaGem className="ultimate-icon" />
                        <h2>The Ultimate Luxury Experience</h2>
                        <div className="ultimate-price">$999</div>
                    </div>

                    <div className="ultimate-content">
                        <p className="ultimate-main-desc">
                            It's not just detailing, it's a complete artisan restoration over 48 hours under controlled lighting.
                            Surgical-grade equipment, the most expensive sealants on the planet, and attention that borders on obsession.
                        </p>

                        <ul className="ultimate-features">
                            <li><FaStar /> Aerospace-grade chemical decontamination</li>
                            <li><FaStar /> 3-stage paint correction (99% micro-scratch removal)</li>
                            <li><FaStar /> Multi-layer ceramic coating (Lifetime warranty)</li>
                            <li><FaStar /> Interior detailing with original texture restoration</li>
                            <li><FaStar /> Chassis and engine protection with corrosion inhibitors</li>
                        </ul>

                        <div className="surprise-box">
                            <FaGift className="gift-icon" />
                            <div>
                                <strong>Includes VIP Surprise Gift</strong>
                                <p>An exclusive detail that will arrive at your door after the service.</p>
                            </div>
                        </div>

                        <button className="ultimate-button" onClick={handleSelect}>
                            Book Exclusive Experience
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipUltimateService;
