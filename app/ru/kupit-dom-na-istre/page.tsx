import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Check, MapPin, Clock, Home, Wallet } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingCard } from '@/components/listing-card'
import { LeadForm } from '@/components/lead-form'
import { SerifAmount } from '@/components/dashboard/widgets'
import { settlements, settlementDetails, houses } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Купить дом на Истре — цены и предложения | AURA ESTATES',
  description:
    'Дома у Истринского водохранилища в Московской области, 45 минут от Москвы. Проверенные объекты застройщика, ипотека и рассрочка. Оставьте заявку на просмотр.',
}

const settlement = settlements.find((s) => s.slug === 'maloe-isakovo')!
const detail = settlementDetails['maloe-isakovo']
const featuredHouse = houses.find((h) => h.settlement === 'Малое Исаково')

const facts = [
  { icon: MapPin, label: 'Расположение', value: settlement.location },
  { icon: Clock, label: 'Дорога от Москвы', value: detail.travelTime },
  { icon: Home, label: 'Масштаб', value: detail.scale },
  { icon: Wallet, label: 'Цена', value: settlement.priceFrom },
]

const faq = [
  {
    q: 'Правда ли, что дома на Истре можно купить недорого?',
    a: 'Цена зависит от модели дома, площади и степени готовности отделки. На платформе представлены резиденции в посёлке Малое Исаково от 19 млн ₽ — это премиальный сегмент у воды, а не бюджетное жильё. Сделать покупку доступнее позволяют беспроцентная рассрочка до 6 месяцев и ипотека.',
  },
  {
    q: 'Чем покупка через AURA ESTATES отличается от объявлений на Авито?',
    a: 'Все объекты на платформе продаются напрямую через застройщика «Истра Строй Сервис», а не по частным объявлениям. Это значит проверенные документы, актуальные цены и единый строительный контроль на каждом этапе — в отличие от классифайдов, где карточки может размещать кто угодно.',
  },
  {
    q: 'Можно ли на Истре купить участок без дома?',
    a: 'В посёлке Малое Исаково сейчас в продаже готовые резиденции с участком в составе, отдельных участков без подряда в этом посёлке нет. Если вам нужен именно участок, оставьте заявку — менеджер подскажет актуальные варианты на платформе.',
  },
  {
    q: 'Есть ли в продаже дома в других посёлках на Истре, например КП Ливадия?',
    a: 'На платформе AURA ESTATES представлен клубный посёлок Малое Исаково на Истринском водохранилище. Если вы ищете конкретный посёлок, которого нет в каталоге, напишите об этом в заявке — так мы точнее подберём варианты.',
  },
  {
    q: 'Какие есть варианты оплаты — ипотека, рассрочка?',
    a: 'Доступны 100% оплата, индивидуальная скидка, беспроцентная рассрочка до 6 месяцев и ипотека. Условия по конкретному дому уточняет менеджер после заявки.',
  },
]

export default function KupitDomNaIstrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Дома у Истринского водохранилища</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-balance lg:text-5xl">
            Купить дом на Истре
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {detail.locationFull} — {detail.travelTime}. Резиденции клубного посёлка{' '}
            {settlement.name} на первой линии Истринского водохранилища — с готовыми
            коммуникациями и единой архитектурной концепцией.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#lead"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Оставить заявку
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/settlements/maloe-isakovo"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Смотреть посёлок Малое Исаково
            </Link>
          </div>
        </div>
      </section>

      {/* Facts */}
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

      {/* Intro + benefits */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">О локации</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-balance">
              Посёлок на берегу Истринского водохранилища
            </h2>
            {detail.intro.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Все дома продаются напрямую через застройщика «{detail.developer.name}».{' '}
              {detail.developer.note}
            </p>
          </div>
          <div>
            <p className="eyebrow">Что получает покупатель</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {detail.benefits.map((b) => (
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
        </div>
      </section>

      {/* Models & pricing */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Дома в продаже</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-balance">
            Модели резиденций и цены
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {detail.models.map((m) => (
              <div key={m.name} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.tagline}</p>
                <p className="mt-4 font-serif text-xl">
                  <SerifAmount>{m.price}</SerifAmount>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{m.area}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Способы оплаты: {detail.purchaseOptions.join(', ').toLowerCase()}.
          </p>
          <Link
            href="/settlements/maloe-isakovo#models"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
          >
            Подробные планировки и комплектации
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured listing */}
      {featuredHouse && (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Актуальный объект</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-balance">
            Дом на Истре в наличии сейчас
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ListingCard listing={featuredHouse} />
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/houses" className="inline-flex items-center gap-1.5 font-medium">
              Весь каталог домов
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/settlements" className="inline-flex items-center gap-1.5 font-medium">
              Все посёлки на платформе
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Вопросы и ответы</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-balance">
            Часто спрашивают про покупку дома на Истре
          </h2>
          <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">
            {faq.map((item) => (
              <div key={item.q} className="p-6">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead */}
      <section id="lead" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Купить дом на Истре</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Оставьте заявку — подберём дом и условия покупки
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Расскажем о наличии, планировках и способах оплаты, согласуем удобное время
              просмотра в посёлке {settlement.name}.
            </p>
          </div>
          <LeadForm
            title="Заявка на дом у Истры"
            subtitle="Оставьте контакты — менеджер перезвонит и подберёт вариант под ваш бюджет."
            submitLabel="Отправить заявку"
            source="SEO · купить дом на истре"
            settlementName={settlement.name}
            models={detail.models.map((m) => m.name)}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
