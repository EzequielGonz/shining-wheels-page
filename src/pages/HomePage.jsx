import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AlternatingFeatures from '../components/AlternatingFeatures';
import ServiceLevels from '../components/ServiceLevels';
import WhyDifferent from '../components/WhyDifferent';
import Testimonials from '../components/Testimonials';
import ExclusiveService from '../components/ExclusiveService';
import Footer from '../components/Footer';
import VipSection from '../components/VipSection';

import DoubtsSection from '../components/DoubtsSection';

const HomePage = ({ isVip = false }) => {
  // Add/remove vip-mode class on body for layout adjustments
  useEffect(() => {
    if (isVip) {
      document.body.classList.add('vip-mode');
    } else {
      document.body.classList.remove('vip-mode');
    }
    return () => {
      document.body.classList.remove('vip-mode');
    };
  }, [isVip]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {isVip && <VipSection />}
        <AlternatingFeatures />
        {!isVip && <ServiceLevels isVip={isVip} />}
        <WhyDifferent />
        <ExclusiveService isVip={isVip} />
        <Testimonials />
        <DoubtsSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;


