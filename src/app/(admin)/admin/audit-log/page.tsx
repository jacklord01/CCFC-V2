import { PageShell } from '@/components/ui';

export const metadata = { title: 'Audit Log' };

export default function AdminAuditLogPage() {
  return (
    <PageShell title="Audit Log" description="Record of all admin actions for compliance.">
      <p className="text-[var(--color-text-muted)]">Audit log coming in a future phase.</p>
    </PageShell>
  );
}
