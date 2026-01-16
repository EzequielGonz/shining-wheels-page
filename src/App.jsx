import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Loader from './components/Loader';
import BackgroundAnimation from './components/BackgroundAnimation';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import VipPage from './pages/VipPage';
import VipAccessPage from './pages/VipAccessPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <BackgroundAnimation />
      <Cart />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vip" element={<VipPage />} />
        <Route path="/vip-access" element={<VipAccessPage />} />
      </Routes>
    </div>
  );
}

export default App;

