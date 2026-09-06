import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SettlementCard } from '@/components/settlement-card'
import { PageHero, FilterBar } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { settlements } from '@/lib/data'

export default function SettlementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Каталог посёлков"
        title="Коттеджные посёлки"
        description="Проверенные загородные посёлки с актуальными ценами, форматами и инфраструктурой."
      />
      <FilterBar
        chips={['Все', 'Премиум', 'Бизнес-класс', 'Дачные', 'У воды', 'Дома', 'Участки']}
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {settlements.map((s) => (
            <SettlementCard key={s.slug} settlement={s} />
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Не нашли подходящий посёлок?</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
              Составим подборку под ваши требования
            </h2>
          </div>
          <LeadForm title="Подобрать посёлок" compact />
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
