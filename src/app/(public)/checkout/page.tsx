import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

export const metadata = { title: 'Checkout — Castlebar Celtic FC' };

const orderItems = [
  { id: '1', name: 'Castlebar Celtic Home Jersey', size: 'Size 12', qty: 1, price: 40 },
  { id: '2', name: 'Castlebar Celtic Training Top', size: 'Medium', qty: 2, price: 40 },
];
const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
const shipping = 5.99;
const total = subtotal + shipping;

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/cart"
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to cart
        </Link>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Lock className="h-3.5 w-3.5" />
          Secure checkout
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* ── Left: Checkout form ── */}
        <div className="flex-1 space-y-8">
          {/* Contact */}
          <FormSection title="Contact Information">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="first-name" label="First Name" required />
              <FormField id="last-name" label="Last Name" required />
            </div>
            <FormField id="email" label="Email Address" type="email" required />
            <FormField id="phone" label="Phone Number" type="tel" />
          </FormSection>

          {/* Shipping */}
          <FormSection title="Shipping Address">
            <FormField id="address" label="Street Address" required />
            <FormField id="address2" label="Apartment, suite, etc." />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="city" label="City" required />
              <FormField id="county" label="County" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="eircode" label="Eircode" />
              <div>
                <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-700">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  defaultValue="IE"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="IE">Ireland</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                </select>
              </div>
            </div>
          </FormSection>

          {/* Shipping method */}
          <FormSection title="Shipping Method">
            <div className="space-y-2">
              {[
                { id: 'standard', label: 'Standard Delivery (3–5 business days)', price: '€5.99' },
                { id: 'express', label: 'Express Delivery (1–2 business days)', price: '€12.99' },
                { id: 'click-collect', label: 'Click & Collect — Celtic Park', price: 'Free' },
              ].map((method) => (
                <label
                  key={method.id}
                  className="flex cursor-pointer items-center justify-between rounded-md border border-gray-200 px-4 py-3 transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping-method"
                      value={method.id}
                      defaultChecked={method.id === 'standard'}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm font-medium text-gray-800">{method.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{method.price}</span>
                </label>
              ))}
            </div>
          </FormSection>

          {/* Payment */}
          <FormSection title="Payment">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Your payment information is encrypted and secure.
              </p>
              <div className="space-y-4">
                <FormField id="card-number" label="Card Number" placeholder="1234 5678 9012 3456" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField id="expiry" label="Expiry Date" placeholder="MM / YY" />
                  <FormField id="cvv" label="CVV" placeholder="123" />
                </div>
                <FormField id="card-name" label="Name on Card" placeholder="As it appears on your card" />
              </div>
            </div>
          </FormSection>
        </div>

        {/* ── Right: Order summary ── */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-base font-bold text-gray-900">Order Summary</h2>

            <ul className="mb-4 divide-y divide-gray-100">
              {orderItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[9px] font-black text-primary">
                      CCFC
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-xs font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.size} · Qty {item.qty}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-gray-900">
                    €{(item.price * item.qty).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t border-gray-100 pt-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span><span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span><span>€{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-900">
                <span>Total</span><span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Lock className="h-4 w-4" />
              Place Order
            </button>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              By placing your order you agree to our{' '}
              <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared form components ──────────────────────────────────────────────────

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-base font-bold text-gray-900">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
