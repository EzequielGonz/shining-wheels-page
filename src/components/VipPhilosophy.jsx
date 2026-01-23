import React from 'react';
import './VipPhilosophy.css';

const VipPhilosophy = () => {
    return (
        <section className="vip-philosophy">
            <div className="philosophy-container">
                <div className="philosophy-text">
                    <h2 className="philosophy-title">Why do we do this?</h2>
                    <p className="philosophy-p">
                        We were born from a passion for the details that others overlook. <br />
                        We don't care about time, we care about results. <br />
                        We created the VIP level because we know there are cars that aren't just machines,
                        but extensions of their owners' souls.
                    </p>
                    <div className="philosophy-thanks">
                        <h3>Thank you for trusting us.</h3>
                        <p>Sincerely, the Shining Wheels team.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VipPhilosophy;
