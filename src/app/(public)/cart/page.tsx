import { PageShell } from '@/components/ui';

export const metadata = { title: 'Cart' };

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageShell title="Your Cart" description="Review items before checkout.">
        <p className="text-[var(--color-text-muted)]">Cart functionality coming in Phase 3.</p>
      </PageShell>
    </div>
  );
}
