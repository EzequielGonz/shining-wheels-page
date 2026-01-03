import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, total } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart-msg">Tu carrito está vacío</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={`cart-item ${item.type}`}>
                <div className="cart-item-info">
                  <span className="cart-item-name">
                    {item.type === 'addon' ? 'Addon: ' : ''}{item.name || item.service}
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
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cartItems.length === 0}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
