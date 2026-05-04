import { PageShell } from '@/components/ui';

export const metadata = { title: 'Checkout' };

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageShell title="Checkout" description="Complete your purchase securely.">
        <p className="text-[var(--color-text-muted)]">
          Checkout flow (Stripe integration) coming in a future phase.
        </p>
      </PageShell>
    </div>
  );
}
