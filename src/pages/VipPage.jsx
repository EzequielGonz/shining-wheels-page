import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VipHero from '../components/VipHero';
import ServiceLevels from '../components/ServiceLevels';
import VipUltimateService from '../components/VipUltimateService';
import VipPhilosophy from '../components/VipPhilosophy';
import BackgroundAnimation from '../components/BackgroundAnimation';

const VipPage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
        // Add vip class to body if needed for global overrides
        document.body.classList.add('vip-page-active');
        return () => {
            document.body.classList.remove('vip-page-active');
        };
    }, []);

    return (
        <div className="vip-page-wrapper">
            <BackgroundAnimation />
            <Header />
            <main>
                <VipHero />
                <section id="vip-plans">
                    <ServiceLevels isVip={true} />
                </section>
                <VipUltimateService />
                <VipPhilosophy />
            </main>
            <Footer isVip={true} />
        </div>
    );
};

export default VipPage;
