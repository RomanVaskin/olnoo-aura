import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin, Ruler, Wallet, TreePine, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingCard } from '@/components/listing-card'
import { LeadForm } from '@/components/lead-form'
import { SerifAmount } from '@/components/dashboard/widgets'
import { SettlementDetailView } from '@/components/settlement-detail'
import { settlements, houses, plots, settlementDetails } from '@/lib/data'

const defaultGallery = [
  '/images/settlement-maloe-isakovo.png',
  '/images/road-entrance.png',
  '/images/nature-lake.png',
  '/images/interior.png',
]

const galleryBySlug: Record<string, string[]> = {
  'sosnovy-bereg': [
    '/IMG_5781.jpeg',
    '/IMG_5782.jpeg',
    '/IMG_5783.jpeg',
    '/IMG_5784.jpeg',
    '/IMG_5785.jpeg',
  ],
}

const benefits = [
  'Огороженная территория и охрана 24/7',
  'Центральные коммуникации: газ, свет, вода',
  'Асфальтированные дороги и освещение',
  'Собственная набережная и зона отдыха',
  'Детская и спортивная площадки',
  'Единая архитектурная концепция',
]

export default async function SettlementPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const settlement = settlements.find((s) => s.slug === slug)
  if (!settlement) notFound()

  const gallery = galleryBySlug[slug] ?? defaultGallery

  const detail = settlementDetails[slug]
  if (detail) {
    return <SettlementDetailView settlement={settlement} detail={detail} />
  }

  const facts = [
    { icon: TreePine, label: 'Тип', value: settlement.type },
    { icon: MapPin, label: 'Расположение', value: settlement.location },
    { icon: Ruler, label: 'Расстояние', value: settlement.distance },
    { icon: Wallet, label: 'Цена', value: settlement.priceFrom },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={settlement.image || '/placeholder.svg'}
          alt={settlement.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8">
            <nav className="text-sm text-white/70">
              <Link href="/settlements" className="hover:text-white">
                Посёлки
              </Link>{' '}
              / <span className="text-white/90">{settlement.name}</span>
            </nav>
            {settlement.tag && (
              <span className="mt-4 inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
                {settlement.tag}
              </span>
            )}
            <h1 className="mt-4 font-serif text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
              {settlement.name}
            </h1>
            <p className="mt-3 max-w-xl text-white/85">
              {settlement.type} · {settlement.format}
            </p>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-background px-5 py-6 lg:px-8">
              <f.icon className="h-5 w-5 text-muted-foreground" />
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                {f.label}
              </p>
              <p className="mt-1 font-medium">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Main column */}
          <div>
            <p className="eyebrow">О посёлке</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-balance">
              Загородная жизнь в 35 км от города
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {settlement.name} — {settlement.type.toLowerCase()} премиального уровня с единой
              архитектурной концепцией. Посёлок расположен в окружении соснового леса, рядом
              с озером. Здесь продаются как готовые дома, так и участки под строительство с
              подведёнными коммуникациями.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Всего в продаже {settlement.houses} домов и {settlement.plots} участков. Территория
              огорожена, работает охрана, обустроены дороги, освещение и зоны отдыха.
            </p>

            {/* Gallery */}
            <div className="mt-10">
              <p className="eyebrow">Галерея</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {gallery.map((src, i) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-lg ${
                      i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={src || '/placeholder.svg'}
                      alt={`${settlement.name} — фото ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <p className="eyebrow">Преимущества</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map block */}
            <div className="mt-12">
              <p className="eyebrow">Расположение</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-border">
                <div className="relative aspect-[16/7]">
                  <Image
                    src="/images/plot-2.png"
                    alt="Расположение посёлка на карте"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                    <span className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium shadow-sm">
                      <MapPin className="h-4 w-4" />
                      {settlement.location} · {settlement.distance}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">Стоимость</p>
                <p className="mt-1 font-serif text-3xl">
                  <SerifAmount>{settlement.priceFrom}</SerifAmount>
                </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {settlement.houses} домов · {settlement.plots} участков
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="#lead"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Записаться на просмотр
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#lead"
                  className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Получить подборку
                </Link>
              </div>
            </div>

            {/* Developer info */}
            <div className="mt-6 rounded-lg border border-border bg-card p-6">
              <p className="eyebrow">Застройщик</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  GL
                </div>
                <div>
                  <p className="font-medium">GreenLine Development</p>
                  <p className="text-sm text-muted-foreground">На платформе с 2019</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                12 реализованных посёлков, более 900 переданных объектов. Собственная служба
                строительного контроля.
              </p>
              <Link
                href="/developers/greenline"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
              >
                Страница застройщика
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Available houses */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-serif text-3xl">Доступные дома</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {houses.map((h) => (
              <ListingCard key={h.id} listing={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Available plots */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-serif text-3xl">Доступные участки</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plots.map((p) => (
              <ListingCard key={p.id} listing={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead */}
      <section id="lead" className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{settlement.name}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Записаться на просмотр посёлка
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Оставьте контакты — менеджер согласует удобное время, покажет доступные дома
              и участки и пришлёт актуальную подборку.
            </p>
          </div>
          <LeadForm title="Записаться на просмотр" subtitle="Перезвоним в течение 15 минут." />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export function generateStaticParams() {
  return settlements.map((s) => ({ slug: s.slug }))
}
