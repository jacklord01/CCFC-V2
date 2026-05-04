import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ProductCard, type Product } from '@/components/public';

export const metadata = { title: 'Club Shop — Castlebar Celtic FC' };

// ─── Placeholder data ────────────────────────────────────────────────────────

const products: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  name: [
    'Castlebar Celtic Home Jersey',
    'Castlebar Celtic Training Top',
    'Castlebar Celtic Polo Shirt',
    'Castlebar Celtic Half-Zip Top',
    'Castlebar Celtic Away Jersey',
    'Castlebar Celtic Goalkeeper Kit',
    'Castlebar Celtic Junior Jersey',
    'Castlebar Celtic Training Shorts',
    'Castlebar Celtic Cap',
    'Castlebar Celtic Scarf',
    'Castlebar Celtic Water Bottle',
    'Castlebar Celtic Backpack',
  ][i],
  price: [40, 40, 35, 45, 40, 50, 30, 25, 20, 15, 12, 35][i],
  rating: 5,
  reviewCount: 5,
  purchaseCount: 50,
  badge: i < 6 ? 'NEW' : undefined,
  slug: ['home-jersey', 'training-top', 'polo-shirt', 'half-zip', 'away-jersey', 'goalkeeper-kit', 'junior-jersey', 'training-shorts', 'cap', 'scarf', 'water-bottle', 'backpack'][i],
}));

const categories = ['T-Shirts (34)', 'Jersey (22)'];
const genders = ['Boys/Girls (23)', 'Men (227)', 'Women (124)'];
const sizes = [
  'Age 5-7', 'Age 11-12', 'Age 13',
  'Age 9-10', 'Age 10-11', 'Age 5-6',
  'Age 12', 'Size 12', 'Size 14',
  'Size 16', 'Size 18', 'Size 20',
  'Age 2-3', 'Age 4', 'Small',
  '2XL', 'Large', '3XL',
  'Medium', 'X-Large', '2XL Player Fit',
  'Large Player Fit', 'Medium Player Fit', 'X-Large Player Fit',
  '3XL Player Fit', 'Small Player Fit', '4XL',
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      {/* Page hero banner */}
      <div className="relative flex h-36 items-center justify-center bg-gray-800 sm:h-44">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"
          aria-hidden="true"
        />
        <div className="relative text-center">
          <h1 className="text-3xl font-extrabold text-white">Club Shop</h1>
          <p className="mt-1 text-sm text-gray-300">
            Show your support with official Castlebar Celtic FC merchandise
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Shop By Team</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="hover:text-primary transition-colors">GAA County</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-800 font-medium" aria-current="page">County Jerseys</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* ── Sidebar filters ── */}
          <aside className="hidden w-56 shrink-0 lg:block" aria-label="Product filters">
            {/* Category */}
            <FilterSection title="Category">
              {categories.map((c) => (
                <FilterCheckbox key={c} label={c} />
              ))}
            </FilterSection>

            {/* Gender */}
            <FilterSection title="Gender">
              {genders.map((g) => (
                <FilterCheckbox key={g} label={g} />
              ))}
            </FilterSection>

            {/* Size */}
            <FilterSection title="Size">
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className="rounded border border-gray-200 px-2 py-1 text-[11px] text-gray-600 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FilterSection>
          </aside>

          {/* ── Product grid ── */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">564</span> Products
              </p>
              <button className="flex items-center gap-1 rounded border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Sort by <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Filter sub-components ───────────────────────────────────────────────────

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FilterCheckbox({ label }: { label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
      <input
        type="checkbox"
        className="h-3.5 w-3.5 rounded border-gray-300 text-primary accent-primary focus:ring-primary"
      />
      {label}
    </label>
  );
}
