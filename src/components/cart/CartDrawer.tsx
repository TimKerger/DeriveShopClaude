"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { XIcon, PlusIcon, MinusIcon } from "../ui/Icons";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-50 transform transition-transform flex flex-col ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-[11px] uppercase tracking-nav font-medium">
            Your Bag
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="hover:opacity-60 transition-opacity"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <p className="text-sm text-muted">Your bag is empty</p>
              <Link
                href="/collections/all"
                onClick={() => setCartOpen(false)}
                className="text-[11px] uppercase tracking-nav font-medium underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-card-bg relative flex-shrink-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-[11px] uppercase tracking-nav font-medium truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-[11px] text-muted mt-0.5">
                        Size: {item.size}
                      </p>
                      <p className="text-[11px] mt-0.5">
                        &euro;{item.product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="p-1.5 hover:opacity-60 transition-opacity"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="p-1.5 hover:opacity-60 transition-opacity"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-[10px] uppercase tracking-nav text-muted underline underline-offset-2 hover:text-foreground transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase tracking-nav font-medium">
                Subtotal
              </span>
              <span className="text-sm font-medium">
                &euro;{totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-[10px] text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-foreground text-white uppercase tracking-nav text-[11px] font-medium py-4 hover:bg-foreground/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
