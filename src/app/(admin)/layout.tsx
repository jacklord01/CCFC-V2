import { ReactNode } from 'react';
import { AdminSidebar } from '@/components/admin';

// TODO: Replace this placeholder with real server-side auth check in Phase 4.
// Admin routes must be protected server-side before production deployment.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-[var(--color-border)] bg-white px-6">
          <span className="text-sm text-[var(--color-text-muted)]">
            Admin Portal — authentication placeholder
          </span>
        </header>
        <main className="flex-1 bg-[var(--color-surface)] p-6">{children}</main>
      </div>
    </div>
  );
}
