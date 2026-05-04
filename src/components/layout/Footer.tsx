import { siteConfig } from '@/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href="/privacy" className="hover:text-[var(--color-text)] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[var(--color-text)] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[var(--color-text)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
