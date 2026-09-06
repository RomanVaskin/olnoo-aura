'use client'

import {
  LayoutGrid,
  Users,
  KanbanSquare,
  FileText,
  Building2,
  Home,
  MessageSquare,
  CheckSquare,
  BarChart3,
  Phone,
  Send,
} from 'lucide-react'
import { DashboardShell, PageTitle } from '@/components/dashboard/shell'
import { StatCard, Panel, BarChart, ProgressRow } from '@/components/dashboard/widgets'
import { CrmBoard } from '@/components/dashboard/crm-board'

const nav = [
  { label: 'Обзор', icon: LayoutGrid, active: true },
  { label: 'Лиды', icon: Send, badge: '12' },
  { label: 'CRM-воронка', icon: KanbanSquare },
  { label: 'Клиенты', icon: Users },
  { label: 'Подборки', icon: FileText },
  { label: 'Мои объекты', icon: Home },
  { label: 'Посёлки', icon: Building2 },
  { label: 'Коммуникации', icon: MessageSquare, badge: '4' },
  { label: 'Задачи', icon: CheckSquare, badge: '5' },
  { label: 'Аналитика', icon: BarChart3 },
]

const tasks = [
  { title: 'Позвонить Игорю Смирнову', time: 'Сегодня 15:00', done: false },
  { title: 'Отправить подборку М. Ковалёвой', time: 'Сегодня 17:00', done: false },
  { title: 'Подтвердить показ в субботу', time: 'Завтра', done: false },
  { title: 'Договор для Е. Титовой', time: '13 сентября', done: true },
]

const comms = [
  { name: 'Игорь Смирнов', channel: 'Звонок', text: 'Обсудили бюджет, ждёт подборку', time: '10:24' },
  { name: 'Мария Ковалёва', channel: 'WhatsApp', text: 'Уточнила про коммуникации', time: '09:40' },
  { name: 'Дмитрий Лебедев', channel: 'Telegram', text: 'Согласовал время показа', time: 'вчера' },
]

const funnel = [
  { label: 'Лиды', value: '48', percent: 100 },
  { label: 'Контакт', value: '34', percent: 71 },
  { label: 'Подборка', value: '22', percent: 46 },
  { label: 'Показ', value: '14', percent: 29 },
  { label: 'Сделка', value: '6', percent: 12 },
]

export default function BrokerCabinet() {
  return (
    <DashboardShell role="Кабинет брокера" name="Анна Орлова" initials="АО" nav={nav}>
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <PageTitle
          title="Рабочее пространство"
          subtitle="Лиды, воронка сделок, задачи и коммуникации с клиентами."
          action={
            <button className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
              + Новый лид
            </button>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Активные лиды" value="48" delta="+8 за неделю" icon={Send} />
          <StatCard label="Показы" value="14" delta="+3 за неделю" icon={Users} />
          <StatCard label="Сделки в работе" value="6" delta="+1 за неделю" icon={KanbanSquare} />
          <StatCard label="Конверсия в сделку" value="12%" delta="+2.4 п.п." icon={BarChart3} />
        </div>

        {/* CRM */}
        <div className="mt-8">
          <Panel
            title="CRM-воронка"
            action={<span className="text-xs text-muted-foreground">7 этапов</span>}
          >
            <CrmBoard />
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Tasks */}
          <Panel title="Задачи" className="lg:col-span-1">
            <div className="space-y-2">
              {tasks.map((t) => (
                <div key={t.title} className="flex items-start gap-3 rounded-md border border-border p-3">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      t.done ? 'border-foreground bg-foreground' : 'border-border'
                    }`}
                  >
                    {t.done && <CheckSquare className="h-3 w-3 text-background" />}
                  </span>
                  <div>
                    <p className={`text-sm ${t.done ? 'text-muted-foreground line-through' : ''}`}>
                      {t.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          {/* Communication history */}
          <Panel title="История коммуникаций" className="lg:col-span-1">
            <div className="space-y-3">
              {comms.map((c) => (
                <div key={c.name} className="rounded-md border border-border p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{c.name}</p>
                    <span className="text-xs text-muted-foreground">{c.time}</span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    {c.channel === 'Звонок' ? (
                      <Phone className="h-3 w-3" />
                    ) : (
                      <MessageSquare className="h-3 w-3" />
                    )}
                    {c.channel}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* Funnel analytics */}
          <Panel title="Воронка за месяц" className="lg:col-span-1">
            <div className="space-y-4">
              {funnel.map((f) => (
                <ProgressRow key={f.label} label={f.label} value={f.value} percent={f.percent} />
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                Заявки по неделям
              </p>
              <BarChart
                data={[
                  { label: 'Н1', value: 9 },
                  { label: 'Н2', value: 14 },
                  { label: 'Н3', value: 11 },
                  { label: 'Н4', value: 18 },
                ]}
              />
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  )
}
