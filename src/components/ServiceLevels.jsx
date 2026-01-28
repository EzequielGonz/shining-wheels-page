import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import useScrollReveal from '../hooks/useScrollReveal';
import './ServiceLevels.css';

const ServiceLevels = ({ isVip = false }) => {
  const { t } = useLanguage();
  const { addPlan } = useCart();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [imageError, setImageError] = useState(false);

  const titleRef = useScrollReveal({ threshold: 0.3 });
  const tableRef = useScrollReveal({ threshold: 0.1 });

  const pricing = {
    essentials: { normal: 89, vip: 75 },
    standard: { normal: 149, vip: 129 },
    pro: { normal: 249, vip: 219 },
    'first-class': { normal: 399, vip: 349 },
  };

  const getPrice = (planId) => {
    const price = isVip ? pricing[planId].vip : pricing[planId].normal;
    return `$${price}`;
  };

  const plans = [
    { id: 'essentials', nameKey: 'plans.essentials', descKey: 'serviceLevels.descEssentials', featKeys: ['feat1','feat2','feat3','feat4'] },
    { id: 'standard', nameKey: 'plans.standard', descKey: 'serviceLevels.descStandard', featKeys: ['feat5','feat6','feat7','feat8'], popular: true },
    { id: 'pro', nameKey: 'plans.pro', descKey: 'serviceLevels.descPro', featKeys: ['feat9','feat10','feat11','feat12'] },
    { id: 'first-class', nameKey: 'plans.firstClass', descKey: 'serviceLevels.descFirstClass', featKeys: ['feat13','feat14','feat15','feat16'] }
  ];

  const planInfo = {
    essentials: {
      heading: 'Basic Plan (Essential Maintenance)',
      summary:
        'Focused on those looking to routinely maintain their vehicle clean without deep bodywork corrections. This package covers basic cleaning needs, ideal as periodic maintenance between more complete details. Includes:',
      items: [
        'Hand exterior wash: detailed bodywork wash with two-bucket method and neutral products, including pressure pre-wash to remove loose dirt.',
        'Wheel and tire cleaning: brushing and washing of wheels (outer faces) and tires to remove brake dust and accumulated grime. Mild degreaser applied if necessary.',
        'Microfiber drying: complete drying of bodywork and glass with microfiber towels, avoiding water marks or scratches.',
        'Interior and exterior glass cleaning: cleaning of windshield, side windows, rear window, and mirrors, ensuring streak-free visibility.',
        'Spray wax application: a light layer of spray wax or quick detailer is applied to enhance paint shine and provide brief protection.',
        'Tire shine: application of dressing or conditioner on tire walls for a satin black look.',
        'Door jambs cleaning: damp cloths wiped over door sills and trunk edges to remove dust and light grease.',
        'Full interior vacuum: vacuuming of carpets, mats, seat upholstery (cloth or leather), and cargo area/trunk, removing loose dirt and sand.',
        'Basic interior wipe-down: damp cloths on dashboard, center console, and door panels to remove dust and fingerprints. Attention to high-touch surfaces like steering wheel and handles.',
        'Mats shaken/cleaned: floor mats removed to be shaken or vacuumed separately, removing accumulated dirt before placing them back.',
      ],
      note:
        'The Basic Plan covers superficial maintenance; it does not include deep stain removal, paint correction, or restoration treatments.',
    },
    standard: {
      heading: 'Standard Plan (Intermediate Service)',
      summary:
        'This intermediate plan adds correction and protection tasks on top of the basic plan foundation. It is the perfect balance between cost and results, recommended for daily-use vehicles requiring more thorough cleaning and some aesthetic rejuvenation. Includes all Basic Plan services plus:',
      items: [
        'Bodywork wash and decontamination: meticulous exterior wash, starting with active foam pre-wash and pressure rinse, followed by hand wash. Also includes clay bar decontamination to remove adhered contaminants like sap or metal dust.',
        'Detailed wheel and fender cleaning: deep cleaning of wheels including inner barrels (where accessible) and wheel wells, removing mud. Tires get a hand finish.',
        'Light paint polish (one-step): one-step polish with orbital machine to remove light micro-scratches and swirl marks, enhancing paint gloss.',
        'Wax or synthetic sealant protection: premium wax or high-quality synthetic sealant applied after polishing, providing months of protection and higher gloss than the basic plan.',
        'Thorough glass and headlight cleaning: interior/exterior glass cleaning, plus headlights and taillights covers, removing bugs/sap for maximum clarity.',
        'Basic external trim restoration: cleaning and treating faded external plastic trims with protectants to restore deep black color and protect from sun.',
        'Intensive interior vacuum and wash: detailed vacuuming including under/between seats. Cloth carpets/upholstery shampooed or extraction-cleaned to remove surface stains.',
        'Upholstery and leather cleaning: deep cleaning of cloth seats; leather seats cleaned with specialized products and conditioned to prevent cracks.',
        'Interior panel and plastic detailing: meticulous cleaning of dashboard, console, panels, cup holders, vents using brushes/swabs to reach corners.',
        'Vent cleaning: AC vents cleaned with special brushes and compressed air.',
        'Interior UV protection: professional UV protectant applied to dashboard, vinyls, and plastics preventing fading/cracking, with a non-greasy satin finish.',
        'Light odor elimination: basic cabin deodorization (e.g., airing out, fresh scent air freshener).',
        'Headlight polishing (if applicable): light sanding/polishing of headlights to restore transparency if cloudy.',
      ],
      note:
        'The Standard Plan achieves notable improvement inside and out. However, deep defects or heavily neglected vehicles might require the superior plan.',
    },
    pro: {
      heading: 'Premium Plan (Full Restoration)',
      summary:
        'The Premium plan is aimed at cars needing deep restoration or demanding owners seeking an impeccable finish. Includes everything from previous plans plus advanced correction, protection, and detail renewal treatments. Ideal for cars with deteriorated paint, difficult interior stains, or pre-sale preparation. Includes:',
      items: [
        'Multi-stage paint polishing: 2-3 step paint correction to remove deeper defects like severe swirl marks, micro-scratches, oxidation, and water spots. Paint recovers deep shine and showroom clarity.',
        'High-durability ceramic coating: instead of wax, a professional ceramic coating is applied offering 1-3 years protection against UV, dirt, and contaminants, with superior gloss and hydrophobic effect.',
        'Chemical decontamination: iron remover treatment on bodywork/wheels to remove ferrous particles, plus tar/sap removal.',
        'Deep wheel/brake cleaning: wheels partially removed or deep-cleaned (barrels/calipers) to remove all brake dust. Dedicated wheel sealant applied.',
        'Full engine detail: rigorous engine bay cleaning protecting sensitive parts. Degreased, steamed/washed, dried, then plastics/hoses conditioned.',
        'Headlight/light restoration: sanding, polishing, and UV sealing of yellowed/worn lights.',
        'Metal detail polishing: polishing of emblems, chrome trims, exhaust tips.',
        'Exterior plastic trim restoration: deep treatment of faded exterior plastics with professional restorer.',
        'Intensive interior extraction cleaning: hot water extraction/steam for carpets/upholstery to remove deep stains/spills.',
        'Premium leather treatment: deep pore cleaning, stain removal, and high-quality conditioning. Minor crack filling/dyeing if needed.',
        'Headliner cleaning: careful cleaning of roof lining removing stains/odors.',
        'Seatbelt detailing: seatbelts fully extended, cleaned, and dried.',
        'Ozone odor elimination: professional ozone treatment to neutralize persistent odors (smoke, pets, mold).',
        'Exhaustive pet hair removal: specialized removal of embedded pet hair.',
        'Total interior protection: all interior surfaces coated with professional grade UV/anti-static protectants.',
      ],
      note:
        'The Premium Plan achieves a dramatic transformation: paint recovers splendor, interior is sanitized/rejuvenated. For show cars or absolute perfectionists, the Elite level follows.',
    },
    'first-class': {
      heading: 'Elite Plan (Luxury Detailing)',
      summary:
        'The top-tier package, the ultimate expression of professional detailing. Designed for concours-level results, often for exotics, show cars, or clients demanding absolute perfection. Includes all previous levels plus every specialized procedure possible. Includes:',
      items: [
        '100% Paint Correction: multiple rounds of fine polishing/sanding to remove ~90-100% of defects. Flawless mirror finish.',
        'Professional Multi-layer Ceramic Coating: multi-layer application for superior thickness/hardness. 5+ years durability, extreme hydrophobicity.',
        'Ceramic Wheel Coating: dedicated coating for rims to repel brake dust.',
        'Paint Protection Film (PPF): installation on vulnerable areas (edges, mirrors) to protect against chips/scratches.',
        'Undercarriage cleaning/protection: deep cleaning of chassis/undercarriage, rust prevention application.',
        'Show-level Engine Detail: comprehensive restoration, disassembly of covers for individual cleaning/polishing.',
        'Exterior disassembly for detail: removal of trims/emblems to clean underneath.',
        'Concours Interior Detail: seat removal (where safe) for total cabin access/cleaning.',
        'Professional Leather/Upholstery Restoration: recoloring/dyeing of worn leather, foam repair if needed.',
        'Trim reconditioning: polishing of interior wood/aluminum/carbon fiber inserts.',
        'Special customized treatments: convertible top sealing, special body polishing etc.',
        'Process Documentation: paint thickness measurements, before/after photos provided.',
        'Warranty & Support: extended warranty on coatings.',
        'VIP Service: enclosed transport pickup/delivery, courtesy maintenance sessions.',
      ],
      note:
        'The Elite Plan delivers an incomparable result: the vehicle is reborn with concours-level cleanliness and detail. Ideally for collection cars or high-end show events.',
    },
  };

  const handleSelectPlan = (plan) => {
    const price = getPrice(plan.id);
    const name = t(plan.nameKey);
    const description = t(plan.descKey);
    const features = plan.featKeys.map((k) => t(`serviceLevels.${k}`));
    addPlan({ ...plan, name, description, features, price });
  };

  const handleOpenPopup = (plan) => {
    setSelectedPlan(plan);
    setImageError(false);
  };

  const handleClosePopup = () => {
    setSelectedPlan(null);
  };

  useEffect(() => {
    if (!selectedPlan) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClosePopup();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPlan]);

  return (
    <section className="service-levels" id="services">
      <div className="service-levels-container">
        <h2 className="service-levels-title scroll-reveal-fade-up" ref={titleRef}>
          {isVip ? t('serviceLevels.titleVip') : t('serviceLevels.title')}
        </h2>
        <p className="service-levels-subtitle scroll-reveal-fade-up" ref={titleRef}>
          {isVip ? t('serviceLevels.subtitleVip') : t('serviceLevels.subtitle')}
        </p>

        <div className="plans-table-wrapper scroll-reveal-fade" ref={tableRef} role="region" aria-label="Plans and pricing">
          <table className="plans-table">
            <thead>
              <tr>
                <th scope="col">{t('serviceLevels.plan')}</th>
                <th scope="col">{t('serviceLevels.price')}</th>
                <th scope="col">{t('serviceLevels.description')}</th>
                <th scope="col">{t('serviceLevels.includes')}</th>
                <th scope="col" aria-label="Action"></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr
                  key={plan.id}
                  className={plan.popular ? 'popular clickable-row' : 'clickable-row'}
                  onClick={() => handleOpenPopup(plan)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenPopup(plan);
                    }
                  }}
                >
                  <td className="plan-name-cell">
                    <div className="plan-name-wrapper">
                      <span className="plan-name">{t(plan.nameKey)}</span>
                      {plan.popular && <span className="plan-badge">{t('serviceLevels.mostPopular')}</span>}
                    </div>
                  </td>
                  <td className="plan-price-cell">{getPrice(plan.id)}</td>
                  <td className="plan-description-cell">{t(plan.descKey)}</td>
                  <td className="plan-features-cell">
                    <ul className="plan-features-list">
                      {plan.featKeys.map((key) => (
                        <li key={key} className="plan-feature-item">
                          <span className="plan-feature-check">✓</span>
                          <span className="plan-feature-text">{t(`serviceLevels.${key}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="plan-action-cell">
                    <button
                      className="plan-select-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectPlan(plan);
                      }}
                    >
                      {t('serviceLevels.select')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPlan && (
        <div className="info-modal-overlay" onClick={handleClosePopup}>
          <div
            className="info-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="plan-info-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="info-modal-close" onClick={handleClosePopup}>
              ×
            </button>
            <div className="info-modal-table-wrapper">
              <h3 className="comparison-title">{t('serviceLevels.comparisonTitle')}</h3>
              <table className="modal-plans-table comparison-table">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Essentials</th>
                    <th>Standard</th>
                    <th>Pro</th>
                    <th>First Class</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "EXTERIOR CARE (Cuidado Exterior) - Exterior Process",
                      rows: [
                        { service: "Multi-Stage Exterior Wash", essentials: "✓", standard: "✓", pro: "✓", firstClass: "✓" },
                        { service: "Foam Wash & Controlled Rinse", essentials: "✓", standard: "✓", pro: "✓", firstClass: "✓" },
                        { service: "Dirt-Safe Pre-Cleaning (No Contact)", essentials: "✓", standard: "✓", pro: "✓ (Acid or Alkaline)", firstClass: "✓ (Multi-Stage Acid + Alkali)" },
                        { service: "Advanced Chemical System (Multi-Stage)", essentials: "—", standard: "✓", pro: "✓", firstClass: "✓" },
                        { service: "Wheel & Tire Cleaning", essentials: "✓", standard: "✓ (Deep Clean)", pro: "✓ (Deep Clean + Dressing)", firstClass: "✓ (Deep Clean + Coating)" },
                        { service: "Plastic & Exterior Trim Care", essentials: "—", standard: "✓ (Selected Areas)", pro: "✓ (Dressing)", firstClass: "✓ (Coating)" },
                        { service: "Paint Decontamination Removal", essentials: "—", standard: "—", pro: "✓ (Chemical)", firstClass: "✓ (Chemical + Mechanical)" },
                        { service: "Exterior Paint Protection", essentials: "✓ (Quick Seal)", standard: "✓ (Enhanced Seal)", pro: "✓ (Advanced Seal)", firstClass: "✓ (1-Step Coating)" },
                      ]
                    },
                    {
                      category: "GLASS & VISIBILITY (Vidrios y Visibilidad) - Glass Care",
                      rows: [
                        { service: "Streak-Free Glass Cleaning", essentials: "✓", standard: "✓ (Deep)", pro: "✓ (Deep + Anti-Fog)", firstClass: "✓ (Deep + Anti-Fog + Protection)" },
                      ]
                    },
                    {
                      category: "INTERIOR CARE (Cuidado Interior) - Interior Process",
                      rows: [
                        { service: "Interior Vacuum & Dust Removal", essentials: "✓", standard: "✓", pro: "✓", firstClass: "✓" },
                        { service: "Interior Surface Sanitization", essentials: "✓", standard: "✓", pro: "✓", firstClass: "✓ (Kills 99% of Bacteria)" },
                        { service: "Precision Steam Cleaning", essentials: "—", standard: "✓", pro: "✓", firstClass: "✓" },
                        { service: "Carpet & Upholstery Deep Cleaning", essentials: "—", standard: "—", pro: "✓ (Extractor System)", firstClass: "✓ (Extractor System)" },
                        { service: "Leather Cleaning & Conditioning", essentials: "—", standard: "—", pro: "✓", firstClass: "✓" },
                        { service: "Interior Surface Protection", essentials: "—", standard: "—", pro: "—", firstClass: "✓" },
                        { service: "Fabric Protection", essentials: "—", standard: "—", pro: "—", firstClass: "✓ (Water Repellent Finish)" },
                      ]
                    }
                  ].map((section, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <tr className="table-section-header">
                        <td colSpan="5">{section.category}</td>
                      </tr>
                      {section.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={selectedPlan?.id === 'essentials' && rIdx === 0 ? '' : ''}> {/* Keeping hover effect only */}
                          <td className="comp-service-name">{row.service}</td>
                          <td className={`comp-check ${selectedPlan?.id === 'essentials' ? 'highlight-col' : ''}`}>{row.essentials}</td>
                          <td className={`comp-check ${selectedPlan?.id === 'standard' ? 'highlight-col' : ''}`}>{row.standard}</td>
                          <td className={`comp-check ${selectedPlan?.id === 'pro' ? 'highlight-col' : ''}`}>{row.pro}</td>
                          <td className={`comp-check ${selectedPlan?.id === 'first-class' ? 'highlight-col' : ''}`}>{row.firstClass}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="info-modal-body">
              {(() => {
                const info = planInfo[selectedPlan.id] || {
                  heading: t(selectedPlan.nameKey),
                  summary: t('serviceLevels.infoSoon'),
                  items: [],
                  note: '',
                };
                return (
                  <>
                    <h3 id="plan-info-title">{info.heading}</h3>
                    <p className="info-summary">{info.summary}</p>
                    {info.items.length > 0 && (
                      <ul className="info-list">
                        {info.items.map((text, idx) => (
                          <li key={idx}>{text}</li>
                        ))}
                      </ul>
                    )}
                    {info.note && <p className="info-note">{info.note}</p>}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceLevels;
