import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SettlementCard } from '@/components/settlement-card'
import { ListingCard } from '@/components/listing-card'
import { LeadForm } from '@/components/lead-form'
import { settlements, houses, plots } from '@/lib/data'

const benefits = [
  {
    n: '01',
    title: 'Проверенные объекты',
    text: 'Только реальные посёлки, дома и участки с актуальными ценами и документами.',
  },
  {
    n: '02',
    title: 'Персональная подборка',
    text: 'Подбираем варианты под бюджет и направление — без бесконечного скролла каталога.',
  },
  {
    n: '03',
    title: 'CRM и лиды в системе',
    text: 'Застройщики и брокеры ведут клиентов, показы и сделки в одном рабочем пространстве.',
  },
  {
    n: '04',
    title: 'Продвижение',
    text: 'Премиальные размещения, брендированные страницы посёлков и лид-кампании.',
  },
]

const audiences = [
  {
    label: 'Покупателям',
    title: 'Найти дом или участок',
    text: 'Подборки под задачу, сохранённые объекты, записи на показы и общение с менеджером.',
    href: '/buyer',
    cta: 'Личный кабинет',
  },
  {
    label: 'Брокерам',
    title: 'Вести клиентов и сделки',
    text: 'CRM-воронка, лиды, подборки, задачи и аналитика эффективности в одном месте.',
    href: '/broker',
    cta: 'Кабинет брокера',
  },
  {
    label: 'Застройщикам',
    title: 'Продавать посёлки быстрее',
    text: 'Брендированные страницы, поток лидов, управление ценами и маркетинговые кампании.',
    href: '/developer',
    cta: 'Кабинет застройщика',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-estate.png"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video/hero-property.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8 lg:pb-20">
              <p className="text-xs uppercase tracking-[0.22em] text-white/80">
                OLNOO Property · Загородная недвижимость проще
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] text-balance text-white sm:text-5xl lg:text-6xl">
                Платформа загородной недвижимости - тест
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg">
                Посёлки, дома и участки. Лиды, CRM и продвижение — в одной системе.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#lead"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                >
                  Подобрать объект
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/developer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Разместить посёлок
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search entry */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <div className="grid gap-4 rounded-lg border border-border bg-card p-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            <Field label="Что ищете">
              <select className="w-full bg-transparent text-sm outline-none">
                <option>Коттеджный посёлок</option>
                <option>Дом</option>
                <option>Участок</option>
              </select>
            </Field>
            <Field label="Направление">
              <select className="w-full bg-transparent text-sm outline-none">
                <option>Любое</option>
                <option>Северное</option>
                <option>Западное</option>
                <option>Восточное</option>
              </select>
            </Field>
            <Field label="Бюджет">
              <select className="w-full bg-transparent text-sm outline-none">
                <option>до 5 млн ₽</option>
                <option>5–12 млн ₽</option>
                <option>12–20 млн ₽</option>
                <option>20+ млн ₽</option>
              </select>
            </Field>
            <Link
              href="/settlements"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Показать
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured settlements */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHead
          eyebrow="Избранные посёлки"
          title="Посёлки, которые стоит увидеть"
          href="/settlements"
          linkLabel="Все посёлки"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {settlements.map((s) => (
            <SettlementCard key={s.slug} settlement={s} />
          ))}
        </div>
      </section>

      {/* Featured houses & plots */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHead
            eyebrow="Дома и участки"
            title="Готовые дома и участки под строительство"
            href="/houses"
            linkLabel="Весь каталог"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {houses.map((h) => (
              <ListingCard key={h.id} listing={h} />
            ))}
            {plots.slice(0, 3).map((p) => (
              <ListingCard key={p.id} listing={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why use */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Почему OLNOO Property</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Не классифайд, а продукт для загородной недвижимости
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Мы соединяем покупателей, брокеров и застройщиков в одной системе: витрина,
              подбор объектов, поток лидов, CRM и инструменты продвижения.
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/road-entrance.png"
                alt="Въезд в загородный посёлок"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.n} className="bg-card p-7">
                <span className="font-serif text-2xl text-muted-foreground">{b.n}</span>
                <h3 className="mt-4 text-lg font-medium">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHead eyebrow="Одна платформа" title="Для покупателей, брокеров и застройщиков" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex flex-col rounded-lg border border-border bg-card p-7"
              >
                <p className="eyebrow">{a.label}</p>
                <h3 className="mt-4 font-serif text-2xl">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.text}
                </p>
                <Link
                  href={a.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  {a.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section id="lead" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Подбор объекта</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Расскажите, что ищете — остальное сделаем мы
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Оставьте заявку, и персональный менеджер пришлёт подборку посёлков, домов и участков
              под ваш бюджет и направление.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="120+" label="посёлков" />
              <Stat value="3 400+" label="объектов" />
              <Stat value="15 мин" label="ответ менеджера" />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border px-3.5 py-2.5">
      <span className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </div>
  )
}

function SectionHead({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string
  title: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-balance lg:text-4xl">
          {title}
        </h2>
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
