import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VipSection.css';
import { FaCrown, FaStar, FaGem, FaHeadset, FaClock, FaPercentage } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const VipSection = () => {
    const { t } = useLanguage();
    const { setServicePlan } = useCart();

    const vipBenefits = [
        { icon: <FaPercentage />, titleKey: 'vipSection.vipDiscounts', descKey: 'vipSection.vipDiscountsDesc' },
        { icon: <FaHeadset />, titleKey: 'vipSection.premiumSupport', descKey: 'vipSection.premiumSupportDesc' },
        { icon: <FaClock />, titleKey: 'vipSection.priorityBooking', descKey: 'vipSection.priorityBookingDesc' },
        { icon: <FaGem />, titleKey: 'vipSection.exclusiveServices', descKey: 'vipSection.exclusiveServicesDesc' },
    ];

    const vipPlans = [
        { nameKey: 'plans.essentials', originalPrice: 89, vipPrice: 75, descKey: 'serviceLevels.descEssentials', featKeys: ['feat1','feat2','feat3','feat4'] },
        { nameKey: 'plans.standard', originalPrice: 149, vipPrice: 129, descKey: 'serviceLevels.descStandard', featKeys: ['feat5','feat6','feat7','feat8'], popular: true },
        { nameKey: 'plans.pro', originalPrice: 199, vipPrice: 169, descKey: 'serviceLevels.descPro', featKeys: ['feat9','feat10','feat11','feat12'] },
        { nameKey: 'plans.firstClass', originalPrice: 299, vipPrice: 259, descKey: 'serviceLevels.descFirstClass', featKeys: ['feat13','feat14','feat15','feat16'] },
    ];

    const handleSelectPlan = (plan) => {
        setServicePlan({
            name: t(plan.nameKey),
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
                    <h2 className="vip-title">{t('vipSection.thanks')}</h2>
                    <p className="vip-subtitle">
                        <FaStar className="vip-star" />
                        {t('vipSection.vipMembers')}
                        <FaStar className="vip-star" />
                    </p>
                </div>

                <div className="vip-benefits">
                    <h3 className="vip-benefits-title">{t('vipSection.benefitsTitle')}</h3>
                    <div className="vip-benefits-grid">
                        {vipBenefits.map((benefit, index) => (
                            <div key={index} className="vip-benefit-card">
                                <div className="vip-benefit-icon">{benefit.icon}</div>
                                <h4>{t(benefit.titleKey)}</h4>
                                <p>{t(benefit.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vip-plans">
                    <h3 className="vip-plans-title">{t('vipSection.plansTitle')}</h3>
                    <div className="vip-plans-table-wrapper">
                        <table className="vip-plans-table">
                            <thead>
                                <tr>
                                    <th>{t('vipSection.plan')}</th>
                                    <th>{t('vipSection.price')}</th>
                                    <th>{t('vipSection.description')}</th>
                                    <th>{t('vipSection.includes')}</th>
                                    <th>{t('vipSection.action')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vipPlans.map((plan, index) => (
                                    <tr key={index} className={plan.popular ? 'popular' : ''}>
                                        <td className="plan-name-cell">
                                            <div className="plan-name-wrapper">
                                                <span className="plan-name">{t(plan.nameKey)}</span>
                                                {plan.popular && <span className="plan-badge">{t('vipSection.mostPopular')}</span>}
                                            </div>
                                        </td>
                                        <td className="plan-price-cell">
                                            <div className="price-wrapper">
                                                <span className="old-price">${plan.originalPrice}</span>
                                                <span className="new-price">${plan.vipPrice}</span>
                                            </div>
                                        </td>
                                        <td className="plan-desc-cell">{t(plan.descKey)}</td>
                                        <td className="plan-features-cell">
                                            <ul className="plan-features-list">
                                                {plan.featKeys.map((key) => (
                                                    <li key={key}>
                                                        <span className="check">✓</span>
                                                        <span>{t(`serviceLevels.${key}`)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="plan-action-cell">
                                            <button className="vip-select-button" onClick={() => handleSelectPlan(plan)}>
                                                {t('vipSection.select')}
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
