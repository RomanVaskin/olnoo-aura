import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

/**
 * Renders text where the ₽ sign is drawn with the sans font, because the
 * Playfair serif face has no ruble glyph and would otherwise show tofu.
 */
export function SerifAmount({ children }: { children: string }) {
  const parts = children.split('₽')
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span className="font-sans">₽</span>}
        </span>
      ))}
    </>
  )
}

export function StatCard({
  label,
  value,
  delta,
  positive = true,
  icon: Icon,
}: {
  label: string
  value: string
  delta?: string
  positive?: boolean
  icon?: LucideIcon
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </div>
      <p className="mt-3 font-serif text-3xl">
        <SerifAmount>{value}</SerifAmount>
      </p>
      {delta && (
        <p
          className={`mt-2 inline-flex items-center gap-1 text-xs ${
            positive ? 'text-foreground' : 'text-destructive'
          }`}
        >
          {positive ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {delta}
        </p>
      )}
    </div>
  )
}

export function Panel({
  title,
  action,
  children,
  className = '',
}: {
  title: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-lg border border-border bg-card ${className}`}>
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-sm font-medium">{title}</h2>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  )
}

export function BarChart({
  data,
  unit = '',
}: {
  data: { label: string; value: number }[]
  unit?: string
}) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="flex items-end gap-3">
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {d.value}
            {unit}
          </span>
          <div
            className="w-full rounded-t-sm bg-foreground/85"
            style={{ height: `${Math.max((d.value / max) * 160, 6)}px` }}
          />
          <span className="text-xs text-muted-foreground">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

export function ProgressRow({
  label,
  value,
  percent,
}: {
  label: string
  value: string
  percent: number
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">{value}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-foreground" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
