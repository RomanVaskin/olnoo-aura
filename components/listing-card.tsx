import Image from 'next/image'
import type { Listing } from '@/lib/data'

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.image || '/placeholder.svg'}
          alt={listing.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          {listing.kind}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-medium leading-snug text-pretty">{listing.title}</h3>
          <span className="whitespace-nowrap text-sm font-semibold">{listing.price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {listing.settlement} · {listing.area}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
          {listing.specs.map((spec) => (
            <span
              key={spec}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
