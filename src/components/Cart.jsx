import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import './Cart.css';

const Cart = () => {
  const { t } = useLanguage();
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, total } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>{t('cart.title')}</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart-msg">{t('cart.empty')}</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={`cart-item ${item.type}`}>
                <div className="cart-item-info">
                  <span className="cart-item-name">
                    {item.type === 'addon' ? t('cart.addon') : ''}{item.name || item.service}
                  </span>
                  <span className="cart-item-price">{item.price}</span>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>{t('cart.total')}</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cartItems.length === 0}>
            {t('cart.checkout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
