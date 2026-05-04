import { PageShell } from '@/components/ui';

export const metadata = { title: 'Products' };

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageShell title="Products" description="Browse all available products and tickets.">
        <p className="text-[var(--color-text-muted)]">
          Product listing coming in Phase 3.
        </p>
      </PageShell>
    </div>
  );
}
