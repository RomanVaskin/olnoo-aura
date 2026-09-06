'use client'

import {
  LayoutGrid,
  Building2,
  Home,
  Users,
  UserCog,
  Send,
  ShieldCheck,
  CreditCard,
  Layers,
  BarChart3,
  Eye,
  TrendingUp,
} from 'lucide-react'
import { DashboardShell, PageTitle } from '@/components/dashboard/shell'
import { StatCard, Panel, BarChart, ProgressRow, SerifAmount } from '@/components/dashboard/widgets'
import { settlements } from '@/lib/data'

const nav = [
  { label: 'Обзор', icon: LayoutGrid, active: true },
  { label: 'Посёлки', icon: Building2 },
  { label: 'Объявления', icon: Home },
  { label: 'Брокеры', icon: Users },
  { label: 'Застройщики', icon: UserCog },
  { label: 'Пользователи', icon: Users },
  { label: 'Лиды', icon: Send },
  { label: 'Модерация', icon: ShieldCheck, badge: '6' },
  { label: 'Тарифы', icon: Layers },
  { label: 'Платежи', icon: CreditCard },
  { label: 'Аналитика', icon: BarChart3 },
]

const moderation = [
  { object: 'Новый посёлок «Дубрава»', by: 'GreenLine', type: 'Посёлок', status: 'На проверке' },
  { object: 'Дом 210 м², Сосновый Берег', by: 'А. Орлова', type: 'Объявление', status: 'На проверке' },
  { object: 'Участок 20 сот., Озёрный', by: 'П. Гущин', type: 'Объявление', status: 'На проверке' },
  { object: 'Обновление цен, Лесная Усадьба', by: 'GreenLine', type: 'Цены', status: 'На проверке' },
]

const tariffs = [
  { name: 'Base', price: '0 ₽', desc: 'Базовое размещение', users: '2 140' },
  { name: 'Pro', price: '19 900 ₽/мес', desc: 'Продвижение и CRM', users: '312' },
  { name: 'Premium', price: '49 900 ₽/мес', desc: 'Featured и лид-кампании', users: '84' },
]

const payments = [
  { who: 'GreenLine Development', plan: 'Premium', amount: '49 900 ₽', date: 'Сегодня' },
  { who: 'Северный Дом', plan: 'Pro', amount: '19 900 ₽', date: 'Вчера' },
  { who: 'А. Орлова', plan: 'Pro', amount: '19 900 ₽', date: '2 дня назад' },
]

export default function AdminCabinet() {
  return (
    <DashboardShell role="Администратор" name="OLNOO Admin" initials="OA" nav={nav}>
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <PageTitle
          title="Администрирование платформы"
          subtitle="Объекты, участники, модерация, тарифы и платежи."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Посёлков" value="124" delta="+6 за месяц" icon={Building2} />
          <StatCard label="Объявлений" value="3 412" delta="+214 за месяц" icon={Home} />
          <StatCard label="Лидов за месяц" value="1 860" delta="+12%" icon={Send} />
          <StatCard label="Выручка (MRR)" value="4.1 млн ₽" delta="+8%" icon={TrendingUp} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Застройщики" value="38" icon={UserCog} />
          <StatCard label="Брокеры" value="146" icon={Users} />
          <StatCard label="Пользователи" value="12 480" icon={Users} />
          <StatCard label="Просмотры" value="284k" icon={Eye} />
        </div>

        {/* Moderation */}
        <div className="mt-8">
          <Panel
            title="Модерация"
            action={<span className="text-xs text-muted-foreground">6 в очереди</span>}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-normal">Объект</th>
                    <th className="pb-3 font-normal">Автор</th>
                    <th className="pb-3 font-normal">Тип</th>
                    <th className="pb-3 font-normal">Статус</th>
                    <th className="pb-3 font-normal text-right">Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {moderation.map((m) => (
                    <tr key={m.object} className="border-b border-border last:border-0">
                      <td className="py-3.5 font-medium">{m.object}</td>
                      <td className="py-3.5 text-muted-foreground">{m.by}</td>
                      <td className="py-3.5 text-muted-foreground">{m.type}</td>
                      <td className="py-3.5">
                        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                          {m.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right">
                        <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                          Одобрить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Tariffs */}
          <Panel title="Тарифы" className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              {tariffs.map((t) => (
                <div key={t.name} className="rounded-md border border-border p-4">
                  <p className="text-sm font-medium">{t.name}</p>
                    <p className="mt-1 font-serif text-xl">
                      <SerifAmount>{t.price}</SerifAmount>
                    </p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
                  <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                    {t.users} аккаунтов
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          {/* Platform analytics */}
          <Panel title="Лиды по месяцам" className="lg:col-span-1">
            <BarChart
              data={[
                { label: 'Май', value: 1420 },
                { label: 'Июн', value: 1580 },
                { label: 'Июл', value: 1710 },
                { label: 'Авг', value: 1860 },
              ]}
            />
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Payments */}
          <Panel title="Последние платежи" className="lg:col-span-2">
            <div className="space-y-3">
              {payments.map((p) => (
                <div
                  key={p.who}
                  className="flex items-center justify-between gap-3 rounded-md border border-border p-3.5"
                >
                  <div>
                    <p className="text-sm font-medium">{p.who}</p>
                    <p className="text-xs text-muted-foreground">
                      {p.plan} · {p.date}
                    </p>
                  </div>
                  <span className="text-sm font-medium">{p.amount}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Top settlements */}
          <Panel title="Топ посёлков" className="lg:col-span-1">
            <div className="space-y-4">
              {settlements.slice(0, 4).map((s, i) => (
                <ProgressRow
                  key={s.slug}
                  label={s.name}
                  value={`${100 - i * 18}%`}
                  percent={100 - i * 18}
                />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  )
}
