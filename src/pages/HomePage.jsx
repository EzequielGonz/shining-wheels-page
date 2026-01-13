import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AlternatingFeatures from '../components/AlternatingFeatures';
import ServiceLevels from '../components/ServiceLevels';
import WhyDifferent from '../components/WhyDifferent';
import Testimonials from '../components/Testimonials';
import ExclusiveService from '../components/ExclusiveService';
import Footer from '../components/Footer';

const HomePage = ({ isVip = false }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AlternatingFeatures />
        <ServiceLevels isVip={isVip} />
        <WhyDifferent />
        <ExclusiveService isVip={isVip} />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
