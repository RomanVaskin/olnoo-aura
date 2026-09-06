import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingCard } from '@/components/listing-card'
import { PageHero, FilterBar } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { plots } from '@/lib/data'

export default function PlotsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Каталог участков"
        title="Земельные участки"
        description="Участки под строительство в организованных посёлках — с коммуникациями и дорогами."
      />
      <FilterBar chips={['Все', 'ИЖС', 'до 3 млн', '3–6 млн', 'У воды', 'У леса', 'С коммуникациями']} />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...plots, ...plots].map((p, i) => (
            <ListingCard key={p.id + i} listing={p} />
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Подбор участка</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
              Найдём участок под ваш проект дома
            </h2>
          </div>
          <LeadForm title="Подобрать участок" compact />
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
