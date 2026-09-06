import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  MapPin,
  Clock,
  Home,
  Wallet,
  Check,
  TreePine,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LeadForm } from '@/components/lead-form'
import { SerifAmount } from '@/components/dashboard/widgets'
import type { Settlement, SettlementDetail } from '@/lib/data'

export function SettlementDetailView({
  settlement,
  detail,
}: {
  settlement: Settlement
  detail: SettlementDetail
}) {
  const modelNames = detail.models.map((m) => m.name)

  const facts = [
    { icon: MapPin, label: 'Расположение', value: settlement.location },
    { icon: Clock, label: 'Дорога', value: detail.travelTime },
    { icon: Home, label: 'Масштаб', value: detail.scale },
    { icon: Wallet, label: 'Резиденции', value: settlement.priceFrom },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={detail.gallery[0] || '/placeholder.svg'}
          alt={settlement.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
        <div className="absolute inset-0 flex flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-14 lg:px-8">
            <nav className="text-sm text-white/70">
              <Link href="/settlements" className="hover:text-white">
                Посёлки
              </Link>{' '}
              / <span className="text-white/90">{settlement.name}</span>
            </nav>
            <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
              <TreePine className="h-3.5 w-3.5" />
              {settlement.type}
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
              {settlement.name}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-white/85">
              {detail.positioning}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#lead"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Записаться на просмотр
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#models"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Получить планировки
              </Link>
            </div>
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

      {/* Intro + gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">О посёлке</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Счастье в малом
            </h2>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{detail.locationFull}</span>
            </div>
            {detail.intro.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {detail.gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-lg ${
                  i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`${settlement.name} — фото ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="eyebrow">Почему Малое Исаково</p>
          <h2 className="mt-3 font-serif text-3xl text-balance">Среда, ради которой уезжают за город</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {detail.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span className="text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterplan */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="eyebrow">Генеральный план</p>
        <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">Мастер-план посёлка</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <Image
              src={detail.masterplan.image || '/placeholder.svg'}
              alt="Генеральный план посёлка Малое Исаково"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col justify-center divide-y divide-border">
            {detail.masterplan.zones.map((z, i) => (
              <li key={z.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <span className="mt-0.5 font-serif text-lg text-muted-foreground">
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
      </section>

      {/* House models */}
      <section id="models" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Модели резиденций</p>
              <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
                Три архитектурных сценария
              </h2>
            </div>
            <Link
              href="#lead"
              className="inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Получить планировки
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {detail.models.map((m) => (
              <article
                key={m.name}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={m.image || '/placeholder.svg'}
                    alt={`Резиденция ${m.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                    {m.area}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.tagline}</p>
                  <p className="mt-4 font-serif text-xl">
                    <SerifAmount>{m.price}</SerifAmount>
                  </p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#lead"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    Получить планировку {m.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations + included */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Комплектации</p>
            <h2 className="mt-3 font-serif text-3xl text-balance">Выберите степень готовности</h2>
            <div className="mt-8 flex flex-col gap-4">
              {detail.configurations.map((c) => (
                <div key={c.name} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-serif text-xl">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Уже включено в стоимость</p>
            <h2 className="mt-3 font-serif text-3xl text-balance">Дом, готовый к жизни</h2>
            <div className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {detail.includedFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2.5 border-b border-border pb-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facade options */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Фасадные решения</p>
          <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
            Два характера фасада
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {detail.facadeOptions.map((f) => (
              <article
                key={f.name}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={f.image || '/placeholder.svg'}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Инфраструктура</p>
            <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
              Клубная жизнь внутри посёлка
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Всё для комфортной круглогодичной жизни — не выезжая за пределы Малого Исаково.
            </p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/mi-club.png"
                alt="Клубный комплекс"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {detail.infrastructure.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card p-5">
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase options */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
            Условия покупки
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
            Гибкие способы приобретения
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {detail.purchaseOptions.map((o, i) => (
              <div key={o} className="bg-primary px-6 py-8">
                <p className="font-serif text-2xl text-primary-foreground/50">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-pretty">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead */}
      <section id="lead" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{settlement.name}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Узнать актуальные цены и получить подборку домов
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Оставьте контакты — менеджер пришлёт актуальные цены, планировки выбранной модели
              и согласует удобное время просмотра. Заявка автоматически попадает в CRM OLNOO
              Property.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                'Записаться на просмотр',
                'Получить подборку домов',
                'Узнать актуальные цены',
                'Получить планировки',
              ].map((cta) => (
                <div key={cta} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {cta}
                </div>
              ))}
            </div>

            {/* Developer */}
            <div className="mt-10 flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                {detail.developer.initials}
              </div>
              <div>
                <p className="font-medium">{detail.developer.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {detail.developer.note}
                </p>
              </div>
            </div>
          </div>

          <LeadForm
            title="Заявка на резиденцию"
            subtitle="Перезвоним в течение 15 минут и пришлём подборку."
            submitLabel="Отправить заявку"
            models={modelNames}
            source="Сайт · страница посёлка"
            settlementName={settlement.name}
            budgets={['до 19 млн ₽', '19–23 млн ₽', '23–34 млн ₽', '34+ млн ₽']}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
