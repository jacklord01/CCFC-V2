import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { ProductCard, type Product } from '@/components/public';

// ─── Placeholder data ───────────────────────────────────────────────────────

const nextMatch = {
  date: 'Saturday, March 15, 2025 at 3:00 PM',
  venue: 'Celtic Park, Castlebar',
  homeTeam: { name: 'Castlebar Celtic FC', abbr: 'CCFC' },
  awayTeam: { name: 'Ballina Town FC', abbr: 'BTFC' },
};

const sponsors = [
  'JAMK', 'Digitek', 'Grabbase', 'MSI', 'Otbear', 'OAK', 'Snyk', 'Sonex', 'Stropi',
];

const featuredProducts: Product[] = [
  { id: '1', name: 'Castlebar Celtic Home Jersey', price: 40, rating: 5, reviewCount: 5, purchaseCount: 50, badge: 'NEW', slug: 'home-jersey' },
  { id: '2', name: 'Castlebar Celtic Training Top', price: 40, rating: 5, reviewCount: 5, purchaseCount: 50, badge: 'NEW', slug: 'training-top' },
  { id: '3', name: 'Castlebar Celtic Polo Shirt', price: 40, rating: 5, reviewCount: 5, purchaseCount: 50, badge: 'NEW', slug: 'polo-shirt' },
  { id: '4', name: 'Castlebar Celtic Half-Zip', price: 40, rating: 5, reviewCount: 5, purchaseCount: 50, badge: 'NEW', slug: 'half-zip' },
];

const latestNews = [
  { id: '1', category: 'Match Report', title: 'Celtic secure vital win in league opener', date: 'Mar 10, 2025', slug: 'league-opener-win' },
  { id: '2', category: 'Training', title: 'Pre-season preparations well underway at Celtic Park', date: 'Mar 8, 2025', slug: 'pre-season-2025' },
  { id: '3', category: 'Community', title: 'Community coaching programme returns for 2025', date: 'Mar 5, 2025', slug: 'coaching-2025' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[520px] bg-gray-900"
        aria-label="Hero"
      >
        {/* Background overlay — swap src to public/images/hero-bg.jpg when available */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-start justify-center gap-8 px-4 py-16 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          {/* Left: headline + CTA */}
          <div className="flex-1 text-white">
            <div className="mb-4 flex items-center gap-3" aria-hidden="true">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-white text-xs font-black">
                CCFC
              </div>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Castlebar Celtic FC
            </h1>
            <p className="mt-3 max-w-md text-base text-gray-300">
              Building community through football, celebrating local talent, and
              fostering the spirit of the game.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Support the Club
              </Link>
              <Link
                href="/matches"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                View Fixtures
              </Link>
            </div>
          </div>

          {/* Right: Next Match card */}
          <div className="w-full sm:w-80 shrink-0">
            <div className="rounded-xl bg-white p-5 shadow-xl">
              <div className="mb-1 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Don&apos;t miss our upcoming fixture
              </div>
              <h2 className="text-center text-base font-bold text-gray-900">Next Match</h2>
              <div className="mt-3 flex justify-center">
                <span className="rounded bg-primary px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white">
                  Upcoming
                </span>
              </div>

              <div className="mt-4 flex items-center justify-around">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-[10px] font-black text-primary">
                    CCFC
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{nextMatch.homeTeam.name}</span>
                </div>
                <span className="text-lg font-bold text-gray-400">VS</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[10px] font-black text-blue-600">
                    BTFC
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{nextMatch.awayTeam.name}</span>
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{nextMatch.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{nextMatch.venue}</span>
                </div>
              </div>

              <Link
                href="/matches"
                className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View Full Fixtures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section aria-label="Our sponsors" className="border-y border-gray-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Our Sponsors
            </span>
            {sponsors.map((s) => (
              <span
                key={s}
                className="rounded border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Club Shop preview ── */}
      <section aria-labelledby="shop-heading" className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z" />
                  </svg>
                </span>
                <h2 id="shop-heading" className="text-lg font-bold text-gray-900">
                  Club Shop
                </h2>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Show your support with official merchandise
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Visit Full Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lotto Banner ── */}
      <section
        aria-label="Weekly Lotto"
        className="bg-brand-dark py-5"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Join Our Weekly Lotto</p>
              <p className="text-xs text-gray-400">
                Play weekly and get your chance to win exciting prizes.
              </p>
            </div>
          </div>
          <Link
            href="/lotto"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Enter Now <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section aria-labelledby="news-heading" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </span>
                <h2 id="news-heading" className="text-lg font-bold text-gray-900">
                  Latest News
                </h2>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Stay updated with club news and match reports
              </p>
            </div>
            <Link
              href="/news"
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Read All News <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {latestNews.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative flex h-44 items-center justify-center bg-gray-100">
                  <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    {article.category}
                  </span>
                  <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400">{article.date}</p>
                  <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
