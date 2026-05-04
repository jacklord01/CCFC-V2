import Link from 'next/link';
import { Trash2, ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Your Cart — Castlebar Celtic FC' };

const cartItems = [
  { id: '1', name: 'Castlebar Celtic Home Jersey', size: 'Size 12', qty: 1, price: 40, slug: 'home-jersey' },
  { id: '2', name: 'Castlebar Celtic Training Top', size: 'Medium', qty: 2, price: 40, slug: 'training-top' },
];

const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
const shipping = 5.99;
const total = subtotal + shipping;

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-extrabold text-gray-900">Your Cart</h1>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* ── Items list ── */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              {/* Header row — desktop only */}
              <div className="hidden border-b border-gray-100 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:grid sm:grid-cols-[1fr_auto_auto_auto]">
                <span>Product</span>
                <span className="text-center">Size</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Price</span>
              </div>

              {cartItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={[
                    'flex flex-col gap-3 px-6 py-5 sm:grid sm:grid-cols-[1fr_auto_auto_auto] sm:items-center sm:gap-6',
                    idx < cartItems.length - 1 ? 'border-b border-gray-100' : '',
                  ].join(' ')}
                >
                  {/* Product */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] font-black">
                        CCFC
                      </div>
                    </div>
                    <div>
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-gray-500 sm:hidden">
                        Size: {item.size}
                      </p>
                    </div>
                  </div>

                  {/* Size — desktop */}
                  <span className="hidden text-center text-sm text-gray-600 sm:block">
                    {item.size}
                  </span>

                  {/* Qty + remove */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-md border border-gray-200">
                      <button
                        aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-gray-900">
                        {item.qty}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        +
                      </button>
                    </div>
                    <button
                      aria-label={`Remove ${item.name} from cart`}
                      className="text-gray-400 hover:text-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <p className="text-right text-sm font-bold text-gray-900">
                    €{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* ── Order summary ── */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-base font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>€{shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mt-4">
                <label htmlFor="promo" className="mb-1.5 block text-xs font-medium text-gray-700">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button className="rounded-md bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-5 flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <svg
        className="mb-4 h-16 w-16 text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z"
        />
      </svg>
      <h2 className="text-lg font-semibold text-gray-700">Your cart is empty</h2>
      <p className="mt-1 text-sm text-gray-400">
        Add some official merchandise to get started.
      </p>
      <Link
        href="/products"
        className="mt-5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
      >
        Visit the Shop
      </Link>
    </div>
  );
}
