import Image from 'next/image'
import { ArrowRight, ShieldCheck, Building2, Award } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SettlementCard } from '@/components/settlement-card'
import { LeadForm } from '@/components/lead-form'
import { settlements } from '@/lib/data'

const stats = [
  { value: '12', label: 'посёлков' },
  { value: '900+', label: 'переданных объектов' },
  { value: '2019', label: 'на платформе с' },
  { value: '4.9', label: 'рейтинг покупателей' },
]

const trust = [
  { icon: ShieldCheck, title: 'Строительный контроль', text: 'Собственная служба надзора на каждом этапе.' },
  { icon: Building2, title: 'Единая архитектура', text: 'Продуманная концепция каждого посёлка.' },
  { icon: Award, title: 'Гарантия', text: 'Гарантия на дома и инженерные системы.' },
]

export default async function DeveloperPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await params

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Branded hero */}
      <section className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/settlement-3.png"
          alt="Посёлки застройщика GreenLine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-lg font-semibold">
                GL
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/75">Застройщик</p>
                <h1 className="mt-1 font-serif text-4xl text-white lg:text-5xl">
                  GreenLine Development
                </h1>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-white/85">
              Загородные посёлки премиального уровня в окружении природы — с единой архитектурой
              и полной инженерной готовностью.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-5 py-8 text-center lg:px-8">
              <p className="font-serif text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="rounded-lg border border-border bg-card p-7">
              <t.icon className="h-6 w-6" />
              <h3 className="mt-4 text-lg font-medium">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Settlements */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-serif text-3xl">Посёлки застройщика</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {settlements.slice(0, 3).map((s) => (
              <SettlementCard key={s.slug} settlement={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Консультация застройщика</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Оставьте заявку — расскажем о наличии и условиях
            </h2>
            <a
              href="/developer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Кабинет застройщика на платформе
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <LeadForm title="Связаться с застройщиком" compact />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
