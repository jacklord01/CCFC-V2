import { PageShell } from '@/components/ui';

export const metadata = { title: 'Orders' };

export default function AdminOrdersPage() {
  return (
    <PageShell title="Orders" description="Manage customer orders.">
      <p className="text-[var(--color-text-muted)]">Orders table coming in a future phase.</p>
    </PageShell>
  );
}
