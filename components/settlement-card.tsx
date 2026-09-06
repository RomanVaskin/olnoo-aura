import Link from 'next/link'
import Image from 'next/image'
import type { Settlement } from '@/lib/data'

export function SettlementCard({ settlement }: { settlement: Settlement }) {
  return (
    <Link
      href={`/settlements/${settlement.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={settlement.image || '/placeholder.svg'}
          alt={settlement.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {settlement.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            {settlement.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl leading-tight">{settlement.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{settlement.type}</p>
          </div>
          <span className="whitespace-nowrap text-sm font-medium">{settlement.priceFrom}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-border pt-4 text-sm text-muted-foreground">
          <span>{settlement.distance}</span>
          <span>{settlement.location}</span>
        </div>
      </div>
    </Link>
  )
}
