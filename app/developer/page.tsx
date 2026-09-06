'use client'

import Image from 'next/image'
import {
  LayoutGrid,
  Building2,
  Home,
  MapPin,
  Tag,
  Send,
  KanbanSquare,
  Megaphone,
  BarChart3,
  Palette,
  Eye,
  MousePointerClick,
  TrendingUp,
  Check,
} from 'lucide-react'
import { DashboardShell, PageTitle } from '@/components/dashboard/shell'
import { StatCard, Panel, BarChart, ProgressRow } from '@/components/dashboard/widgets'
import { settlements } from '@/lib/data'

const nav = [
  { label: 'Обзор', icon: LayoutGrid, active: true },
  { label: 'Мои посёлки', icon: Building2 },
  { label: 'Дома', icon: Home },
  { label: 'Участки', icon: MapPin },
  { label: 'Цены', icon: Tag },
  { label: 'Лиды', icon: Send, badge: '27' },
  { label: 'CRM', icon: KanbanSquare },
  { label: 'Маркетинг', icon: Megaphone },
  { label: 'Аналитика', icon: BarChart3 },
  { label: 'Брендинг страницы', icon: Palette },
]

const promo = [
  { title: 'Премиум-размещение', text: 'Топ выдачи каталога', active: true },
  { title: 'Featured посёлок', text: 'На главной платформы', active: true },
  { title: 'Брендированная страница', text: 'Логотип и фирменный стиль', active: true },
  { title: 'Лид-кампании', text: 'Гарантированный поток заявок', active: false },
  { title: 'Внешний трафик / реклама', text: 'Директ, VK, таргет', active: true },
  { title: 'SEO-лендинги', text: 'Посадочные под запросы', active: false },
  { title: 'Ретаргетинг', text: 'Возврат тёплой аудитории', active: false },
  { title: 'Email-кампании', text: 'Рассылки по базе покупателей', active: true },
]

const topSettlements = [
  { name: 'Малое Исаково', value: '1 240 просмотров', percent: 100 },
  { name: 'Сосновый Берег', value: '980 просмотров', percent: 79 },
  { name: 'Лесная Усадьба', value: '610 просмотров', percent: 49 },
]

const sources = [
  { label: 'Каталог OLNOO', value: '42%', percent: 42 },
  { label: 'Реклама / Директ', value: '28%', percent: 28 },
  { label: 'SEO / органика', value: '18%', percent: 18 },
  { label: 'Рекомендации', value: '12%', percent: 12 },
]

export default function DeveloperCabinet() {
  return (
    <DashboardShell
      role="Кабинет застройщика"
      name="GreenLine Development"
      initials="GL"
      nav={nav}
    >
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <PageTitle
          title="Панель застройщика"
          subtitle="Посёлки, лиды, продвижение и аналитика в одной системе."
          action={
            <button className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
              + Добавить посёлок
            </button>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Просмотры" value="3 420" delta="+18% за месяц" icon={Eye} />
          <StatCard label="Заявки" value="27" delta="+9 за месяц" icon={Send} />
          <StatCard label="Конверсия" value="4.8%" delta="+0.6 п.п." icon={TrendingUp} />
          <StatCard label="CTR продвижения" value="6.2%" delta="+1.1 п.п." icon={MousePointerClick} />
        </div>

        {/* My settlements */}
        <div className="mt-8">
          <Panel
            title="Мои посёлки"
            action={<span className="text-xs text-muted-foreground">3 активных</span>}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {settlements.slice(0, 3).map((s) => (
                <div key={s.slug} className="overflow-hidden rounded-md border border-border">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={s.name}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{s.name}</p>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">Активен</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {s.houses} домов · {s.plots} участков · {s.priceFrom}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* Promotion tools */}
        <div className="mt-6">
          <Panel
            title="Инструменты продвижения"
            action={<span className="text-xs text-muted-foreground">5 из 8 активны</span>}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {promo.map((p) => (
                <div
                  key={p.title}
                  className={`rounded-md border p-4 ${
                    p.active ? 'border-foreground/30 bg-secondary/50' : 'border-border'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <Megaphone className="h-4 w-4 text-muted-foreground" />
                    {p.active ? (
                      <span className="flex items-center gap-1 text-xs font-medium">
                        <Check className="h-3 w-3" /> Вкл
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Подключить</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm font-medium">{p.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* Analytics */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Panel title="Просмотры по месяцам" className="lg:col-span-1">
            <BarChart
              data={[
                { label: 'Май', value: 2100 },
                { label: 'Июн', value: 2600 },
                { label: 'Июл', value: 2400 },
                { label: 'Авг', value: 3420 },
              ]}
            />
          </Panel>
          <Panel title="Источники лидов" className="lg:col-span-1">
            <div className="space-y-4">
              {sources.map((s) => (
                <ProgressRow key={s.label} label={s.label} value={s.value} percent={s.percent} />
              ))}
            </div>
          </Panel>
          <Panel title="Топ посёлков по просмотрам" className="lg:col-span-1">
            <div className="space-y-4">
              {topSettlements.map((s) => (
                <ProgressRow key={s.name} label={s.name} value={s.value} percent={s.percent} />
              ))}
            </div>
          </Panel>
        </div>

        {/* Branding */}
        <div className="mt-6">
          <Panel title="Брендинг страницы посёлка">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-lg font-semibold text-primary-foreground">
                  GL
                </div>
                <div>
                  <p className="text-sm font-medium">Фирменный стиль подключён</p>
                  <p className="text-xs text-muted-foreground">
                    Логотип, цвета и обложка отображаются на страницах посёлков
                  </p>
                </div>
              </div>
              <button className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">
                Настроить страницу
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  )
}
