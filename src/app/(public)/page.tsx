import { PageShell } from '@/components/ui';
import { Card, CardBody } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageShell
        title="Welcome to CCFC V2"
        description="Your club commerce and fan connect platform."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h2 className="font-semibold text-[var(--color-text)]">Products</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Browse our latest merchandise and tickets.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h2 className="font-semibold text-[var(--color-text)]">Orders</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Track and manage your orders.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h2 className="font-semibold text-[var(--color-text)]">Support</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Get help with your account or purchase.
              </p>
            </CardBody>
          </Card>
        </div>
      </PageShell>
    </div>
  );
}
