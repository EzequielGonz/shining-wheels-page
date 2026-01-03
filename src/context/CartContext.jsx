import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shiningWheelsCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('shiningWheelsCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addPlan = (plan) => {
    setCartItems((prevItems) => {
      // Remove any existing plan
      const filteredItems = prevItems.filter((item) => item.type !== 'plan');
      return [...filteredItems, { ...plan, type: 'plan', id: `plan-${plan.name}` }];
    });
    setIsCartOpen(true);
  };

  const toggleAddon = (addon) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.name === addon.service && item.type === 'addon');
      if (exists) {
        return prevItems.filter((item) => item.name !== addon.service);
      } else {
        return [...prevItems, { ...addon, name: addon.service, type: 'addon', id: `addon-${addon.service}` }];
      }
    });
    // Optional: open cart when adding addon, but maybe not when removing
    // setIsCartOpen(true); 
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => {
    // Parse price string (e.g., "$89" or "+$50")
    const priceString = item.price.replace(/[^0-9.]/g, '');
    const price = parseFloat(priceString) || 0;
    return sum + price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addPlan,
        toggleAddon,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
