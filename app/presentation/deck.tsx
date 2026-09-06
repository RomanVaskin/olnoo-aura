'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Building2,
  Users,
  Home,
  MapPin,
  BarChart3,
  Megaphone,
  Layers,
} from 'lucide-react'
import { SerifAmount } from '@/components/dashboard/widgets'

/* ------------------------------------------------------------------ */
/*  EDITABLE CONTENT — all copy and prices live here for easy editing  */
/* ------------------------------------------------------------------ */

const deck = {
  brand: 'OLNOO Property',
  cover: {
    kicker: 'Презентация для девелоперов и брокеров',
    title: 'OLNOO Property',
    subtitle: 'Платформа загородной недвижимости',
    image: '/images/hero-estate.png',
  },
  what: {
    kicker: 'Что это',
    title: 'Одна платформа для всего загородного рынка',
    lead: 'Посёлки, дома, участки, брокеры, девелоперы и покупатели — в едином пространстве.',
    items: [
      { icon: Building2, label: 'Посёлки' },
      { icon: Home, label: 'Дома' },
      { icon: MapPin, label: 'Участки' },
      { icon: Users, label: 'Брокеры' },
      { icon: Layers, label: 'Девелоперы' },
      { icon: Users, label: 'Покупатели' },
    ],
  },
  how: {
    kicker: 'Как это работает',
    title: 'Путь от трафика до сделки',
    steps: ['Трафик', 'Страница объекта', 'Лид', 'CRM', 'Просмотр', 'Сделка'],
  },
  developers: {
    kicker: 'Для девелоперов',
    title: 'Продавайте посёлки системно',
    items: [
      'Страницы посёлков',
      'Дома',
      'Участки',
      'Лиды',
      'CRM',
      'Аналитика',
      'Продвижение',
    ],
    image: '/images/settlement-3.png',
  },
  brokers: {
    kicker: 'Для брокеров',
    title: 'Ведите клиентов и закрывайте сделки',
    items: [
      'Клиенты',
      'Лиды',
      'CRM',
      'Подборки',
      'Коммуникация',
      'Аналитика',
    ],
    image: '/images/interior.png',
  },
  example: {
    kicker: 'Пример посёлка',
    title: 'Малое Исаково',
    subtitle: 'Клубный посёлок · Истринское водохранилище · 45 минут от Москвы',
    image: '/images/mi-hero.png',
    facts: [
      { value: '30+', label: 'резиденций' },
      { value: '3', label: 'модели домов' },
      { value: 'от 19 млн ₽', label: 'стоимость' },
    ],
    href: '/settlements/maloe-isakovo',
  },
  crm: {
    kicker: 'CRM · Аналитика · Продвижение',
    title: 'Управляйте воронкой и ростом',
    pipeline: ['Новый лид', 'В работе', 'Подборка', 'Просмотр', 'Сделка'],
    sources: [
      { label: 'Сайт', value: 42 },
      { label: 'Реклама', value: 31 },
      { label: 'Брокеры', value: 18 },
      { label: 'Рекомендации', value: 9 },
    ],
    tools: ['Приоритет в каталоге', 'Баннеры и подборки', 'Таргетированные кампании'],
    conversion: '12.4%',
  },
  offer: {
    kicker: 'Коммерческое предложение',
    title: 'Три формата подключения',
    cards: [
      {
        icon: Users,
        name: 'Брокер',
        price: 'по запросу',
        points: ['CRM и лиды', 'Подборки для клиентов', 'Аналитика продаж'],
      },
      {
        icon: Building2,
        name: 'Девелопер',
        price: 'по запросу',
        points: ['Страницы посёлков', 'Дома и участки', 'Лиды и аналитика'],
      },
      {
        icon: Megaphone,
        name: 'Продвижение посёлка',
        price: 'по запросу',
        points: ['Приоритет в каталоге', 'Рекламные кампании', 'Баннеры и подборки'],
      },
    ],
    ctaLabel: 'Обсудить подключение',
    ctaHref: '/#lead',
  },
}

const SLIDES = 8

/* ------------------------------------------------------------------ */

function Kicker({ children }: { children: string }) {
  return <p className="eyebrow mb-6">{children}</p>
}

function SlideShell({
  id,
  index,
  children,
  className = '',
  background,
  dark = false,
}: {
  id: string
  index: number
  children: React.ReactNode
  className?: string
  background?: { src: string; alt: string }
  dark?: boolean
}) {
  return (
    <section
      id={id}
      className={`relative flex h-screen w-full snap-start flex-col justify-center overflow-hidden px-8 py-16 md:px-20 lg:px-28 ${className}`}
    >
      {background && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background.src || '/placeholder.svg'}
            alt={background.alt}
            fill
            priority
            className="object-cover"
          />
          <div className={dark ? 'absolute inset-0 bg-foreground/62' : 'absolute inset-0 bg-background/80'} />
        </div>
      )}
      <span className="absolute right-8 top-8 z-10 font-mono text-xs text-muted-foreground md:right-20 lg:right-28">
        {String(index).padStart(2, '0')} / {String(SLIDES).padStart(2, '0')}
      </span>
      <span
        className={`absolute left-8 top-8 z-10 text-xs font-medium tracking-tight md:left-20 lg:left-28 ${dark ? 'text-primary-foreground' : ''}`}
      >
        {deck.brand}
      </span>
      <div className="relative z-10 flex flex-1 flex-col justify-center">{children}</div>
    </section>
  )
}

export function PresentationDeck() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-slide]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.slide))
          }
        })
      },
      { threshold: 0.6 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-background text-foreground">
      {/* progress dots */}
      <nav
        aria-label="Навигация по слайдам"
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      >
        {Array.from({ length: SLIDES }).map((_, i) => (
          <a
            key={i}
            href={`#slide-${i}`}
            aria-label={`Слайд ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-foreground/40 transition-colors ${
              active === i ? 'bg-foreground' : 'bg-transparent'
            }`}
          />
        ))}
      </nav>

      {/* 1 — Cover */}
      <div data-slide="0">
        <SlideShell
          id="slide-0"
          index={1}
          background={{ src: deck.cover.image, alt: 'Загородная резиденция OLNOO Property' }}
        >
          <Kicker>{deck.cover.kicker}</Kicker>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
            {deck.cover.title}
          </h1>
          <p className="mt-8 max-w-xl text-xl text-muted-foreground md:text-2xl">
            {deck.cover.subtitle}
          </p>
        </SlideShell>
      </div>

      {/* 2 — What it is */}
      <div data-slide="1">
        <SlideShell id="slide-1" index={2}>
          <Kicker>{deck.what.kicker}</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
            {deck.what.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {deck.what.lead}
          </p>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {deck.what.items.map((it) => (
              <div key={it.label} className="flex items-center gap-3 bg-card px-5 py-6">
                <it.icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-base font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </SlideShell>
      </div>

      {/* 3 — How it works */}
      <div data-slide="2">
        <SlideShell id="slide-2" index={3}>
          <Kicker>{deck.how.kicker}</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
            {deck.how.title}
          </h2>
          <ol className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-6">
            {deck.how.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-2xl tracking-tight md:text-3xl">
                    {step}
                  </span>
                </div>
                {i < deck.how.steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                )}
              </li>
            ))}
          </ol>
        </SlideShell>
      </div>

      {/* 4 — For developers */}
      <div data-slide="3">
        <SlideShell id="slide-3" index={4}>
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Kicker>{deck.developers.kicker}</Kicker>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
                {deck.developers.title}
              </h2>
              <ul className="mt-10 flex flex-wrap gap-3">
                {deck.developers.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-card px-5 py-2 text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-md lg:block">
              <Image
                src={deck.developers.image || '/placeholder.svg'}
                alt="Посёлок девелопера"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SlideShell>
      </div>

      {/* 5 — For brokers */}
      <div data-slide="4">
        <SlideShell id="slide-4" index={5}>
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 hidden aspect-[4/3] overflow-hidden rounded-md lg:order-1 lg:block">
              <Image
                src={deck.brokers.image || '/placeholder.svg'}
                alt="Работа брокера с клиентами"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Kicker>{deck.brokers.kicker}</Kicker>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
                {deck.brokers.title}
              </h2>
              <ul className="mt-10 flex flex-wrap gap-3">
                {deck.brokers.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-card px-5 py-2 text-base"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SlideShell>
      </div>

      {/* 6 — Settlement example */}
      <div data-slide="5">
        <SlideShell
          id="slide-5"
          index={6}
          dark
          className="text-primary-foreground"
          background={{ src: deck.example.image, alt: 'Малое Исаково' }}
        >
          <p className="eyebrow mb-6 text-primary-foreground/70">{deck.example.kicker}</p>
          <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
            {deck.example.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            {deck.example.subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-10">
            {deck.example.facts.map((f) => (
              <div key={f.label}>
                <div className="font-serif text-3xl md:text-4xl">
                  <SerifAmount>{f.value}</SerifAmount>
                </div>
                <div className="mt-1 text-sm text-primary-foreground/70">{f.label}</div>
              </div>
            ))}
          </div>
          <Link
            href={deck.example.href}
            className="mt-12 inline-flex w-fit items-center gap-2 border-b border-primary-foreground/60 pb-1 text-base transition-colors hover:border-primary-foreground"
          >
            Открыть страницу посёлка
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </SlideShell>
      </div>

      {/* 7 — CRM + Analytics + Promotion */}
      <div data-slide="6">
        <SlideShell id="slide-6" index={7}>
          <Kicker>{deck.crm.kicker}</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            {deck.crm.title}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {/* pipeline */}
            <div className="lg:col-span-2">
              <p className="eyebrow mb-4">Воронка</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
                {deck.crm.pipeline.map((stage, i) => (
                  <div key={stage} className="flex items-center gap-3">
                    <span className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium">
                      {stage}
                    </span>
                    {i < deck.crm.pipeline.length - 1 && (
                      <ArrowRight
                        className="h-4 w-4 text-muted-foreground"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="eyebrow mb-4">Источники лидов</p>
                  <ul className="space-y-3">
                    {deck.crm.sources.map((s) => (
                      <li key={s.label}>
                        <div className="mb-1 flex items-baseline justify-between text-sm">
                          <span>{s.label}</span>
                          <span className="font-mono text-muted-foreground">{s.value}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-foreground"
                            style={{ width: `${s.value}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-4">Инструменты продвижения</p>
                  <ul className="space-y-3 text-sm">
                    {deck.crm.tools.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Megaphone
                          className="h-4 w-4 text-muted-foreground"
                          strokeWidth={1.5}
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* conversion highlight */}
            <div className="flex flex-col justify-center rounded-md border border-border bg-card p-8">
              <BarChart3 className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
              <div className="mt-4 font-serif text-5xl tracking-tight">
                {deck.crm.conversion}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Конверсия из лида в сделку
              </p>
            </div>
          </div>
        </SlideShell>
      </div>

      {/* 8 — Commercial offer */}
      <div data-slide="7">
        <SlideShell id="slide-7" index={8}>
          <Kicker>{deck.offer.kicker}</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            {deck.offer.title}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {deck.offer.cards.map((card) => (
              <div
                key={card.name}
                className="flex flex-col rounded-md border border-border bg-card p-7"
              >
                <card.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-2xl tracking-tight">{card.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.price}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-foreground" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href={deck.offer.ctaHref}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {deck.offer.ctaLabel}
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </SlideShell>
      </div>
    </div>
  )
}
