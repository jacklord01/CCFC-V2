import Link from 'next/link';

const adminNavItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/clubs', label: 'Clubs' },
  { href: '/admin/reports', label: 'Reports' },
  { href: '/admin/settings', label: 'Settings' },
  { href: '/admin/users', label: 'Users & Roles' },
  { href: '/admin/audit-log', label: 'Audit Log' },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="flex h-16 items-center border-b border-[var(--color-border)] px-6">
        <span className="text-lg font-bold text-[var(--color-primary)]">Admin</span>
      </div>
      <nav aria-label="Admin navigation">
        <ul className="flex flex-col gap-1 p-3">
          {adminNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-white hover:text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
