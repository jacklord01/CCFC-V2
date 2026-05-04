import { PageShell } from '@/components/ui';

export const metadata = { title: 'Products' };

export default function AdminProductsPage() {
  return (
    <PageShell title="Products" description="Manage products, tickets, and merchandise.">
      <p className="text-[var(--color-text-muted)]">Products management coming in a future phase.</p>
    </PageShell>
  );
}
