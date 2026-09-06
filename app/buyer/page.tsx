'use client'

import Image from 'next/image'
import {
  LayoutGrid,
  Heart,
  Home,
  MapPin,
  MessageSquare,
  CalendarClock,
  FileText,
  Send,
  User,
} from 'lucide-react'
import { DashboardShell, PageTitle } from '@/components/dashboard/shell'
import { StatCard, Panel } from '@/components/dashboard/widgets'
import { settlements, houses, plots } from '@/lib/data'

const nav = [
  { label: 'Обзор', icon: LayoutGrid, active: true },
  { label: 'Сохранённые посёлки', icon: Heart },
  { label: 'Сохранённые дома', icon: Home },
  { label: 'Сохранённые участки', icon: MapPin },
  { label: 'Мои заявки', icon: Send, badge: '3' },
  { label: 'Подборки', icon: FileText },
  { label: 'Показы', icon: CalendarClock, badge: '2' },
  { label: 'Сообщения', icon: MessageSquare, badge: '1' },
  { label: 'Профиль', icon: User },
]

const viewings = [
  { object: 'Малое Исаково · дом 186 м²', date: '14 сентября, 12:00', manager: 'А. Орлова' },
  { object: 'Сосновый Берег · участок 15 сот.', date: '16 сентября, 15:30', manager: 'П. Гущин' },
]

const inquiries = [
  { object: 'Малое Исаково', status: 'Подборка отправлена', date: '3 дня назад' },
  { object: 'Озёрный · участок', status: 'Ожидает ответа', date: '5 дней назад' },
  { object: 'Лесная Усадьба', status: 'Назначен показ', date: 'неделю назад' },
]

export default function BuyerCabinet() {
  return (
    <DashboardShell role="Личный кабинет" name="Игорь Смирнов" initials="ИС" nav={nav}>
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <PageTitle
          title="Добрый день, Игорь"
          subtitle="Ваши сохранённые объекты, заявки и записи на показы."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Сохранено" value="9" icon={Heart} />
          <StatCard label="Заявки" value="3" icon={Send} />
          <StatCard label="Показы" value="2" icon={CalendarClock} />
          <StatCard label="Подборки" value="4" icon={FileText} />
        </div>

        {/* Saved settlements */}
        <div className="mt-8">
          <Panel title="Сохранённые посёлки">
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
                  <div className="p-3">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.priceFrom}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Viewings */}
          <Panel title="Ближайшие показы">
            <div className="space-y-3">
              {viewings.map((v) => (
                <div
                  key={v.object}
                  className="flex items-start justify-between gap-3 rounded-md border border-border p-3.5"
                >
                  <div>
                    <p className="text-sm font-medium">{v.object}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">Менеджер: {v.manager}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-muted-foreground">{v.date}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Inquiries */}
          <Panel title="Мои заявки">
            <div className="space-y-3">
              {inquiries.map((q) => (
                <div
                  key={q.object}
                  className="flex items-center justify-between gap-3 rounded-md border border-border p-3.5"
                >
                  <div>
                    <p className="text-sm font-medium">{q.object}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{q.date}</p>
                  </div>
                  <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {q.status}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* Saved houses & plots */}
        <div className="mt-6">
          <Panel title="Сохранённые дома и участки">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[houses[0], houses[1], plots[0]].map((l) => (
                <div
                  key={l.id}
                  className="flex gap-3 rounded-md border border-border p-3"
                >
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded">
                    <Image
                      src={l.image || '/placeholder.svg'}
                      alt={l.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{l.title}</p>
                    <p className="text-xs text-muted-foreground">{l.settlement}</p>
                    <p className="mt-1 text-xs font-medium">{l.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  )
}
