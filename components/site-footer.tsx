import Link from 'next/link'

const columns = [
  {
    title: 'Каталог',
    links: [
      { href: '/settlements', label: 'Посёлки' },
      { href: '/houses', label: 'Дома' },
      { href: '/plots', label: 'Участки' },
      { href: '/settlements/maloe-isakovo', label: 'Малое Исаково' },
    ],
  },
  {
    title: 'Профессионалам',
    links: [
      { href: '/developers/greenline', label: 'Застройщикам' },
      { href: '/brokers/anna-orlova', label: 'Брокерам' },
      { href: '/developer', label: 'Кабинет застройщика' },
      { href: '/broker', label: 'Кабинет брокера' },
    ],
  },
  {
    title: 'Кабинеты',
    links: [
      { href: '/buyer', label: 'Личный кабинет' },
      { href: '/broker', label: 'Брокер' },
      { href: '/developer', label: 'Застройщик' },
      { href: '/admin', label: 'Администратор' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold tracking-tight">OLNOO</span>
              <span className="text-lg font-light tracking-tight text-muted-foreground">
                Property
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Загородная недвижимость проще. Посёлки, дома и участки в одной системе.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OLNOO Property. Все права защищены.</p>
          <p>Загородная недвижимость проще.</p>
        </div>
      </div>
    </footer>
  )
}
