'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { SettlementDetail } from '@/lib/data'

// Masterplan images are rendered with object-contain; markers are positioned
// in % of the image itself, so the overlay box must match its aspect ratio.
const IMAGE_ASPECT = 1376 / 768

export function Masterplan({
  masterplan,
  alt,
}: {
  masterplan: SettlementDetail['masterplan']
  alt: string
}) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary">
        <Image
          src={masterplan.image || '/placeholder.svg'}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain"
        />
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          style={{ aspectRatio: IMAGE_ASPECT }}
        >
          {masterplan.zones.map((z, i) =>
            z.marker ? (
              <button
                key={z.label}
                type="button"
                aria-label={`${String(i + 1).padStart(2, '0')} — ${z.label}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                className={`absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[11px] font-medium tabular-nums shadow-sm backdrop-blur transition-all duration-200 sm:h-8 sm:w-8 sm:text-xs ${
                  active === i
                    ? 'z-10 scale-110 border-foreground bg-foreground text-background'
                    : 'border-white/70 bg-background/85 text-foreground hover:bg-background'
                }`}
                style={{ left: `${z.marker.x}%`, top: `${z.marker.y}%` }}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ) : null,
          )}
        </div>
      </div>
      <ul className="flex flex-col justify-center divide-y divide-border">
        {masterplan.zones.map((z, i) => (
          <li
            key={z.label}
            onMouseEnter={() => z.marker && setActive(i)}
            onMouseLeave={() => z.marker && setActive(null)}
            className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
          >
            <span
              className={`mt-0.5 font-serif text-lg transition-colors ${
                active === i ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-medium">{z.label}</p>
              <p className="text-sm text-muted-foreground">{z.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
