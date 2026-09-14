import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Bath, BedDouble, Check, Home, LayoutGrid, Ruler } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LeadForm } from '@/components/lead-form'
import { SerifAmount } from '@/components/dashboard/widgets'
import type { HouseModel, Settlement } from '@/lib/data'

export function ResidenceDetailView({
  settlement,
  model,
}: {
  settlement: Settlement
  model: HouseModel
}) {
  const stats = [
    { icon: Ruler, label: 'Площадь дома', value: model.area },
    { icon: LayoutGrid, label: 'Площадь участка', value: model.plotArea },
    { icon: Home, label: 'Этажность', value: model.floors },
    { icon: BedDouble, label: 'Спальни', value: model.bedrooms },
    { icon: Bath, label: 'Санузлы', value: model.bathrooms },
    { icon: Ruler, label: 'Терраса', value: model.terrace },
  ].filter((s): s is typeof s & { value: string } => Boolean(s.value))

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={model.image || '/placeholder.svg'}
          alt={`Резиденция ${model.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        <div className="absolute inset-0 flex flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-14 lg:px-8">
            <Link
              href={`/settlements/${settlement.slug}#models`}
              className="inline-flex w-fit items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {settlement.name}
            </Link>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
              {model.name}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-white/85">{model.tagline}</p>
            <p className="mt-3 font-serif text-2xl text-white">
              <SerifAmount>{model.price}</SerifAmount>
            </p>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      {stats.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-6 px-5 py-8 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="min-w-[140px]">
                <s.icon className="h-5 w-5 text-muted-foreground" />
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1 font-medium">{s.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Description + highlights */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">О резиденции</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              {model.tagline}
            </h2>
            {model.description && (
              <p className="mt-5 leading-relaxed text-muted-foreground">{model.description}</p>
            )}
          </div>
          <div>
            <p className="eyebrow">Особенности планировки</p>
            <ul className="mt-4 flex flex-col gap-3">
              {model.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Floor plans */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Планировки</p>
          <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
            Этажи резиденции {model.name}
          </h2>
          {model.floorPlans && model.floorPlans.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {model.floorPlans.map((fp) => (
                <div
                  key={fp.label}
                  className="overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] bg-secondary">
                    <Image
                      src={fp.image || '/placeholder.svg'}
                      alt={fp.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <p className="p-4 text-sm font-medium">{fp.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Планировки резиденции «{model.name}» будут добавлены дополнительно.
            </p>
          )}
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="eyebrow">Архитектура</p>
        <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">Фасады и решения</h2>
        {model.architectureImages && model.architectureImages.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {model.architectureImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`Архитектура резиденции ${model.name} — фото ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Фотографии фасадов резиденции «{model.name}» будут добавлены дополнительно.
          </p>
        )}
      </section>

      {/* Gallery */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Галерея</p>
          <h2 className="mt-3 font-serif text-3xl text-balance lg:text-4xl">
            Резиденция {model.name}
          </h2>
          {model.gallery && model.gallery.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {model.gallery.map((src, i) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`${model.name} — фото ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Дополнительные фотографии резиденции «{model.name}» будут добавлены позже.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="lead" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{settlement.name}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance lg:text-4xl">
              Получить предложение по резиденции {model.name}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Оставьте контакты — менеджер пришлёт планировки, расчёт стоимости и условия покупки.
            </p>
            <Link
              href={`/settlements/${settlement.slug}#models`}
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Все модели резиденций
            </Link>
          </div>
          <LeadForm
            title="Получить предложение"
            subtitle="Пришлём планировки и расчёт в течение 15 минут."
            submitLabel="Получить предложение"
            settlementName={settlement.name}
            models={[model.name]}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
