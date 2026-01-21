import React from 'react';
import './VipSection.css';
import { FaCrown, FaStar, FaGem, FaHeadset, FaClock, FaPercentage } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const VipSection = () => {
    const { setServicePlan } = useCart();

    const vipBenefits = [
        { icon: <FaPercentage />, title: 'VIP Discounts', desc: 'Special reduced pricing on all plans and services' },
        { icon: <FaHeadset />, title: 'Premium Support', desc: 'Priority support and top-tier personalized attention' },
        { icon: <FaClock />, title: 'Priority Booking', desc: 'Access to the best time slots without waiting' },
        { icon: <FaGem />, title: 'Exclusive Services', desc: 'Access to high-end add-ons and treatments' },
    ];

    const vipPlans = [
        {
            name: 'Essentials',
            originalPrice: 89,
            vipPrice: 75,
            description: 'Basic exterior cleaning and interior vacuum',
            features: ['Full exterior wash', 'Wheel cleaning', 'Interior vacuum', 'Dashboard wipe-down'],
        },
        {
            name: 'Standard',
            originalPrice: 149,
            vipPrice: 129,
            description: 'Full service with interior detailing',
            features: ['Everything in Essentials', 'Window cleaning', 'Leather treatment', 'Premium scent'],
            popular: true,
        },
        {
            name: 'Pro',
            originalPrice: 199,
            vipPrice: 169,
            description: 'Full professional detailing',
            features: ['Everything in Standard', 'Exterior polish', 'Paint protection', 'Engine cleaning'],
        },
        {
            name: 'First Class',
            originalPrice: 299,
            vipPrice: 259,
            description: 'Total luxury experience',
            features: ['Everything in Pro', 'Ceramic coating', 'Headlight restoration', 'Premium wheel detailing'],
        },
    ];

    const handleSelectPlan = (plan) => {
        setServicePlan({
            name: plan.name,
            price: plan.vipPrice,
            type: 'service',
        });
    };

    return (
        <section className="vip-section" id="vip-plans">
            <div className="vip-section-bg"></div>
            <div className="vip-section-content">
                {/* Header */}
                <div className="vip-header">
                    <div className="vip-crown-container">
                        <FaCrown className="vip-main-crown" />
                    </div>
                    <h2 className="vip-title">Thank you for being an excellent client</h2>
                    <p className="vip-subtitle">
                        <FaStar className="vip-star" />
                        you are part of the vip members
                        <FaStar className="vip-star" />
                    </p>
                </div>

                {/* Benefits */}
                <div className="vip-benefits">
                    <h3 className="vip-benefits-title">Your Exclusive Benefits</h3>
                    <div className="vip-benefits-grid">
                        {vipBenefits.map((benefit, index) => (
                            <div key={index} className="vip-benefit-card">
                                <div className="vip-benefit-icon">{benefit.icon}</div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plans Table */}
                <div className="vip-plans">
                    <h3 className="vip-plans-title">Your VIP Prices</h3>
                    <div className="vip-plans-table-wrapper">
                        <table className="vip-plans-table">
                            <thead>
                                <tr>
                                    <th>Plan</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Includes</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vipPlans.map((plan, index) => (
                                    <tr key={index} className={plan.popular ? 'popular' : ''}>
                                        <td className="plan-name-cell">
                                            <div className="plan-name-wrapper">
                                                <span className="plan-name">{plan.name}</span>
                                                {plan.popular && <span className="plan-badge">Most Popular</span>}
                                            </div>
                                        </td>
                                        <td className="plan-price-cell">
                                            <div className="price-wrapper">
                                                <span className="old-price">${plan.originalPrice}</span>
                                                <span className="new-price">${plan.vipPrice}</span>
                                            </div>
                                        </td>
                                        <td className="plan-desc-cell">{plan.description}</td>
                                        <td className="plan-features-cell">
                                            <ul className="plan-features-list">
                                                {plan.features.map((feature, idx) => (
                                                    <li key={idx}>
                                                        <span className="check">✓</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="plan-action-cell">
                                            <button className="vip-select-button" onClick={() => handleSelectPlan(plan)}>
                                                Select
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipSection;
