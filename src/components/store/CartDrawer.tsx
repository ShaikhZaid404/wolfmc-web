"use client";

import React from "react";
import { X, Trash2, ShoppingBag, ArrowRight, Plus, Minus, Ticket } from "lucide-react";
import { useCart } from "@/lib/store/cart-context";
import { STORE_ITEMS } from "@/data/store-items";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQty,
    removeFromCart,
    clearCart,
    formatPrice,
    totalUSD,
    hasCustom,
    currency,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-white/[0.08] shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="font-bebas text-2xl tracking-wider text-neutral-100">
                YOUR ORDER CART
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 gap-3 py-16">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-neutral-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-bebas text-xl text-neutral-400 tracking-wide">
                  YOUR CART IS EMPTY
                </p>
                <p className="text-xs text-neutral-500 max-w-xs font-sans">
                  Browse BoxPvP ranks and crate keys to add items to your Discord ticket order!
                </p>
              </div>
            ) : (
              cart.map((line) => {
                const item = STORE_ITEMS[line.id];
                if (!item) return null;

                const isCustom = item.type === "custom";
                const linePrice = isCustom ? "Quote" : formatPrice(item.price * line.qty);

                return (
                  <div
                    key={line.id}
                    className="p-4 rounded-2xl glass-card bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bebas text-lg tracking-wider text-neutral-100 truncate">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono font-bold text-purple-400">
                        {linePrice}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      {!isCustom && (
                        <div className="flex items-center rounded-lg bg-neutral-900 border border-white/[0.08] p-0.5">
                          <button
                            onClick={() => updateQty(line.id, line.qty - 1)}
                            className="p-1 hover:text-white text-neutral-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-mono font-bold text-neutral-200">
                            {line.qty}
                          </span>
                          <button
                            onClick={() => updateQty(line.id, line.qty + 1)}
                            disabled={line.qty >= 10}
                            className="p-1 hover:text-white text-neutral-400 disabled:opacity-30 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <button
                        onClick={() => removeFromCart(line.id)}
                        className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/[0.06] bg-neutral-950 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 font-sans">
                    Estimated Total ({currency.code})
                  </span>
                  <span className="font-bebas text-2xl tracking-wider text-neutral-100">
                    {formatPrice(totalUSD)}
                    {hasCustom && <span className="text-xs text-purple-400 ml-1 font-sans">+ Custom Quote</span>}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">
                  Prices shown in your selected currency — final checkout amount is confirmed in USD on Discord.
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-purple-900/40 transition-all font-sans group cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2.5 text-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-sans"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
