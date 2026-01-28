import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { translations } from './translations/index.js';
import './index.css';
import './styles/ScrollAnimations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LanguageProvider translations={translations}>
          <App />
        </LanguageProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

