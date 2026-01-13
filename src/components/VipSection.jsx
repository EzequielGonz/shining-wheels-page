import React from 'react';
import './VipSection.css';
import { FaCrown, FaStar, FaGem, FaHeadset, FaClock, FaPercentage } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const VipSection = () => {
    const { setServicePlan } = useCart();

    const vipBenefits = [
        { icon: <FaPercentage />, title: 'Descuentos VIP', desc: 'Precios especiales reducidos en todos los planes y servicios' },
        { icon: <FaHeadset />, title: 'Mejor Atención', desc: 'Soporte prioritario y atención personalizada de primer nivel' },
        { icon: <FaClock />, title: 'Citas Prioritarias', desc: 'Acceso a los mejores horarios sin esperas' },
        { icon: <FaGem />, title: 'Servicios Exclusivos', desc: 'Acceso a add-ons y tratamientos de alta gama' },
    ];

    const vipPlans = [
        {
            name: 'Essentials',
            originalPrice: 89,
            vipPrice: 75,
            description: 'Limpieza básica exterior e interior',
            features: ['Lavado exterior completo', 'Limpieza de llantas', 'Aspirado interior', 'Limpieza de tablero'],
        },
        {
            name: 'Standard',
            originalPrice: 149,
            vipPrice: 129,
            description: 'Servicio completo con detalles interiores',
            features: ['Todo lo de Essentials', 'Limpieza de ventanas', 'Tratamiento de cuero', 'Aromatización premium'],
            popular: true,
        },
        {
            name: 'Pro',
            originalPrice: 199,
            vipPrice: 169,
            description: 'Detallado profesional completo',
            features: ['Todo lo de Standard', 'Pulido exterior', 'Protección de pintura', 'Limpieza de motor'],
        },
        {
            name: 'First Class',
            originalPrice: 299,
            vipPrice: 259,
            description: 'Experiencia de lujo total',
            features: ['Todo lo de Pro', 'Recubrimiento cerámico', 'Restauración de faros', 'Detallado de llantas premium'],
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
                    <h2 className="vip-title">Gracias por ser un excelente cliente</h2>
                    <p className="vip-subtitle">
                        <FaStar className="vip-star" />
                        formas parte de los miembros vip
                        <FaStar className="vip-star" />
                    </p>
                </div>

                {/* Benefits */}
                <div className="vip-benefits">
                    <h3 className="vip-benefits-title">Tus Beneficios Exclusivos</h3>
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
                    <h3 className="vip-plans-title">Tus Precios VIP</h3>
                    <div className="vip-plans-table-wrapper">
                        <table className="vip-plans-table">
                            <thead>
                                <tr>
                                    <th>Plan</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Incluye</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vipPlans.map((plan, index) => (
                                    <tr key={index} className={plan.popular ? 'popular' : ''}>
                                        <td className="plan-name-cell">
                                            <div className="plan-name-wrapper">
                                                <span className="plan-name">{plan.name}</span>
                                                {plan.popular && <span className="plan-badge">Más Popular</span>}
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
                                                Seleccionar
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
