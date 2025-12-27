import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlternatingFeatures from './components/AlternatingFeatures';
import ServiceLevels from './components/ServiceLevels';
import WhyDifferent from './components/WhyDifferent';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import BackgroundAnimation from './components/BackgroundAnimation';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import ExclusiveService from './components/ExclusiveService';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <AlternatingFeatures />
        <ServiceLevels />
        <WhyDifferent />
        <Testimonials />
        <ExclusiveService />
        <Footer />
      </main>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;

