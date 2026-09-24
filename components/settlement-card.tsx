import Link from 'next/link'
import Image from 'next/image'
import type { Settlement } from '@/lib/data'

export function SettlementCard({
  settlement,
  respectClickability = false,
  singleLineType = false,
  aligned = false,
}: {
  settlement: Settlement
  respectClickability?: boolean
  singleLineType?: boolean
  // Share row tracks with sibling cards (CSS subgrid) so titles, prices, types
  // and the details line up across a row. The parent grid must be a plain grid.
  aligned?: boolean
}) {
  const clickable = !respectClickability || settlement.isClickable !== false

  const image = (
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={settlement.image || '/placeholder.svg'}
        alt={settlement.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={
          clickable
            ? 'object-cover transition-transform duration-700 group-hover:scale-105'
            : 'object-cover'
        }
      />
      {settlement.tag && (
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
          {settlement.tag}
        </span>
      )}
    </div>
  )

  const content = aligned ? (
    <>
      {image}
      <div className="flex items-start justify-between gap-4 px-5 pt-5">
        <h3 className="font-serif text-xl leading-tight">{settlement.name}</h3>
        <span className="whitespace-nowrap text-sm font-medium">{settlement.priceFrom}</span>
      </div>
      <p
        className={`mt-1 px-5 text-sm text-muted-foreground ${singleLineType ? 'whitespace-nowrap' : ''}`}
      >
        {settlement.type}
      </p>
      <div className="mx-5 mb-5 mt-5 flex flex-col gap-y-1 border-t border-border pt-4 text-sm text-muted-foreground">
        <span>{settlement.distance}</span>
        <span>{settlement.location}</span>
      </div>
    </>
  ) : (
    <>
      {image}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className={singleLineType ? 'min-w-0' : undefined}>
            <h3 className="font-serif text-xl leading-tight">{settlement.name}</h3>
            <p
              className={
                singleLineType
                  ? 'mt-1 whitespace-nowrap text-sm text-muted-foreground'
                  : 'mt-1 text-sm text-muted-foreground'
              }
            >
              {settlement.type}
            </p>
          </div>
          <span className="whitespace-nowrap text-sm font-medium">{settlement.priceFrom}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-border pt-4 text-sm text-muted-foreground">
          <span>{settlement.distance}</span>
          <span>{settlement.location}</span>
        </div>
      </div>
    </>
  )

  const layout = aligned ? 'row-span-4 grid grid-cols-1 grid-rows-subgrid gap-0' : 'block'

  if (!clickable) {
    return (
      <div className={`${layout} overflow-hidden rounded-lg border border-border bg-card`}>
        {content}
      </div>
    )
  }

  return (
    <Link
      href={`/settlements/${settlement.slug}`}
      className={`group ${layout} overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/30`}
    >
      {content}
    </Link>
  )
}
