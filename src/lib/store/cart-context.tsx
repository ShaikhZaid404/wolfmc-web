"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { STORE_ITEMS, CURRENCIES, StoreItem, CurrencyConfig } from "@/data/store-items";

export interface CartLine {
  id: string;
  qty: number;
}

interface CartContextType {
  cart: CartLine[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  currency: CurrencyConfig;
  setCurrencyCode: (code: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  itemCount: number;
  totalUSD: number;
  hasCustom: boolean;
  formatPrice: (usdPrice: number) => string;
}

const CART_KEY = "wolfmc-cart";
const CURRENCY_KEY = "wolfmc-currency";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [currencyCode, setCurrencyCodeState] = useState<string>("USD");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart and currency from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCart(parsed.filter((item) => item && typeof item.id === "string" && Number.isInteger(item.qty)));
        }
      }
      const savedCurr = localStorage.getItem(CURRENCY_KEY);
      if (savedCurr && CURRENCIES[savedCurr]) {
        setCurrencyCodeState(savedCurr);
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart, isMounted]);

  const setCurrencyCode = (code: string) => {
    if (CURRENCIES[code]) {
      setCurrencyCodeState(code);
      try {
        localStorage.setItem(CURRENCY_KEY, code);
      } catch {
        // ignore
      }
    }
  };

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const addToCart = (id: string, qty = 1) => {
    if (!STORE_ITEMS[id]) return;
    setCart((prev: CartLine[]) => {
      const existing = prev.find((item: CartLine) => item.id === id);
      if (existing) {
        return prev.map((item: CartLine) =>
          item.id === id ? { ...item, qty: Math.min(10, item.qty + qty) } : item
        );
      }
      if (prev.length >= 20) return prev; // max 20 distinct lines
      return [...prev, { id, qty: Math.min(10, Math.max(1, qty)) }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev: CartLine[]) => prev.filter((item: CartLine) => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev: CartLine[]) =>
      prev.map((item: CartLine) => (item.id === id ? { ...item, qty: Math.min(10, qty) } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((acc: number, line: CartLine) => acc + line.qty, 0);

  let totalUSD = 0;
  let hasCustom = false;
  for (const line of cart) {
    const item = STORE_ITEMS[line.id];
    if (item) {
      if (item.type === "custom") {
        hasCustom = true;
      } else {
        totalUSD += item.price * line.qty;
      }
    }
  }

  const formatPrice = (usdPrice: number) => {
    if (usdPrice === 0) return "Quote";
    const converted = usdPrice * currency.rate;
    // Format nicely without decimal if whole, or with 2 decimals
    const numStr = converted % 1 === 0 ? converted.toFixed(0) : converted.toFixed(2);
    return `${currency.symbol}${numStr}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        currency,
        setCurrencyCode,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        itemCount,
        totalUSD,
        hasCustom,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
