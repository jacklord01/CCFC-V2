import { PageShell } from '@/components/ui';

export const metadata = { title: 'Users & Roles' };

export default function AdminUsersPage() {
  return (
    <PageShell title="Users & Roles" description="Manage admin users and role assignments.">
      <p className="text-[var(--color-text-muted)]">User and role management coming in a future phase.</p>
    </PageShell>
  );
}
