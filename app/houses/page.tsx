import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingCard } from '@/components/listing-card'
import { PageHero, FilterBar } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { houses } from '@/lib/data'

export default function HousesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Каталог домов"
        title="Готовые дома"
        description="Дома в коттеджных посёлках — с отделкой, коммуникациями и участком."
      />
      <FilterBar chips={['Все', 'до 15 млн', '15–25 млн', '25+ млн', 'С отделкой', 'У леса', 'У воды']} />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...houses, ...houses].map((h, i) => (
            <ListingCard key={h.id + i} listing={h} />
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Персональный подбор</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
              Подберём дом под бюджет и направление
            </h2>
          </div>
          <LeadForm title="Подобрать дом" compact />
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
