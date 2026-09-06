import Image from 'next/image'
import { ArrowRight, Phone, MessageCircle, Star } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ListingCard } from '@/components/listing-card'
import { LeadForm } from '@/components/lead-form'
import { houses, plots } from '@/lib/data'

const stats = [
  { value: '8 лет', label: 'на рынке' },
  { value: '240+', label: 'сделок' },
  { value: '4.9', label: 'рейтинг' },
  { value: '35 км', label: 'зона работы' },
]

export default async function BrokerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await params

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Profile hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/interior.png"
              alt="Брокер Анна Орлова"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Персональный брокер</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight lg:text-5xl">Анна Орлова</h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-foreground text-foreground" />
              4.9 · Загородная недвижимость · Северное направление
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Помогаю подобрать дом или участок в загородных посёлках: от первого запроса
              до сделки. Работаю с проверенными застройщиками платформы OLNOO.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                <Phone className="h-4 w-4" />
                Позвонить
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                <MessageCircle className="h-4 w-4" />
                Написать в мессенджер
              </button>
            </div>
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

      {/* Listings */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="font-serif text-3xl">Объекты в работе</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...houses, plots[0], plots[1]].map((l, i) => (
            <ListingCard key={l.id + i} listing={l} />
          ))}
        </div>
      </section>

      {/* Lead */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Записаться на консультацию</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Подберу объект под вашу задачу
            </h2>
            <a href="/broker" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
              Кабинет брокера на платформе
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <LeadForm title="Оставить заявку брокеру" compact />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
