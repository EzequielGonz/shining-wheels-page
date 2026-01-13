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
                            No es solo un detallado, es una restauración artesanal completa de 48 horas bajo luz controlada.
                            Equipamiento quirúrgico, los selladores más caros del planeta y una atención que roza la obsesión.
                        </p>

                        <ul className="ultimate-features">
                            <li><FaStar /> Descontaminación química de grado aeroespacial</li>
                            <li><FaStar /> Corrección de pintura en 3 etapas (Eliminación de microrrayas al 99%)</li>
                            <li><FaStar /> Recubrimiento cerámico multicapa (Garantía de por vida)</li>
                            <li><FaStar /> Detallado interior con restauración de texturas originales</li>
                            <li><FaStar /> Protección de chasis y motor con inhibidores de corrosión</li>
                        </ul>

                        <div className="surprise-box">
                            <FaGift className="gift-icon" />
                            <div>
                                <strong>Incluye Regalo Sorpresa VIP</strong>
                                <p>Un detalle exclusivo que llegará a tu puerta tras el servicio.</p>
                            </div>
                        </div>

                        <button className="ultimate-button" onClick={handleSelect}>
                            Reservar Experiencia Exclusive
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipUltimateService;
