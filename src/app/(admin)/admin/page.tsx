import { PageShell } from '@/components/ui';
import { Card, CardBody } from '@/components/ui/Card';

export const metadata = { title: 'Dashboard' };

export default function AdminDashboardPage() {
  return (
    <PageShell title="Dashboard" description="Overview of platform activity.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {['Orders', 'Revenue', 'Products', 'Users'].map((stat) => (
          <Card key={stat}>
            <CardBody>
              <p className="text-sm text-[var(--color-text-muted)]">{stat}</p>
              <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">—</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
