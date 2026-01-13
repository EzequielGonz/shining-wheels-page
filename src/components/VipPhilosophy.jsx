import React from 'react';
import './VipPhilosophy.css';

const VipPhilosophy = () => {
    return (
        <section className="vip-philosophy">
            <div className="philosophy-container">
                <div className="philosophy-text">
                    <h2 className="philosophy-title">¿Por qué hacemos esto?</h2>
                    <p className="philosophy-p">
                        Nacimos de la pasión por los detalles que otros ignoran. <br />
                        No nos importa el tiempo, nos importa el resultado. <br />
                        Creamos el nivel VIP porque sabemos que hay coches que no son solo máquinas,
                        sino extensiones del alma de sus dueños.
                    </p>
                    <div className="philosophy-thanks">
                        <h3>Gracias por confiar en nosotros.</h3>
                        <p>Atentamente, el equipo de Shining Wheels.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipPhilosophy;
