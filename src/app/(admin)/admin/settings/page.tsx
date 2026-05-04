import { PageShell } from '@/components/ui';

export const metadata = { title: 'Settings' };

export default function AdminSettingsPage() {
  return (
    <PageShell title="Settings" description="Platform configuration and preferences.">
      <p className="text-[var(--color-text-muted)]">Settings coming in a future phase.</p>
    </PageShell>
  );
}
