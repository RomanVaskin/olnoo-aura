export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-balance lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}

export function FilterBar({ chips }: { chips: string[] }) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 lg:px-8">
        {chips.map((chip, i) => (
          <button
            key={chip}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              i === 0
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}
