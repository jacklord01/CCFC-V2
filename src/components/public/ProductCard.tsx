import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  purchaseCount: number;
  image?: string;
  badge?: 'NEW' | 'SALE' | 'LIMITED';
  slug: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { name, price, rating, reviewCount, purchaseCount, badge, slug } = product;
  const stars = Math.round(rating);

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md',
        className
      )}
    >
      {/* Product image */}
      <Link href={`/products/${slug}`} aria-label={name} className="relative block overflow-hidden rounded-t-lg bg-gray-50">
        {badge && (
          <span className="absolute left-2 top-2 z-10 rounded bg-primary px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
        <div className="flex h-48 items-center justify-center bg-gray-100">
          {/* Placeholder — replace with <Image> once product images are available */}
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-16 w-16 text-primary/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </Link>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-3">
        {/* Star rating */}
        <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-3 w-3',
                i < stars ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
              )}
              aria-hidden="true"
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Name */}
        <Link
          href={`/products/${slug}`}
          className="mt-1.5 text-sm font-medium text-gray-900 hover:text-primary transition-colors line-clamp-2"
        >
          {name}
        </Link>

        {/* Price */}
        <p className="mt-1 text-base font-bold text-gray-900">
          €{price.toFixed(2)}
        </p>

        {/* Footer */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">{purchaseCount} Purchases</span>
          <button
            aria-label={`Add ${name} to wishlist`}
            className="rounded p-1 text-gray-400 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
