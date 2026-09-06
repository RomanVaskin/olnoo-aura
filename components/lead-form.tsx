'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const channels = ['Телефон', 'WhatsApp', 'Telegram', 'Email']

export function LeadForm({
  title = 'Получить подборку объектов',
  subtitle = 'Оставьте контакты — подберём варианты под ваш бюджет и направление.',
  submitLabel = 'Получить подборку',
  compact = false,
  models,
  source = 'Сайт · форма',
  settlementName,
  budgets = ['до 5 млн ₽', '5–12 млн ₽', '12–20 млн ₽', '20+ млн ₽'],
}: {
  title?: string
  subtitle?: string
  submitLabel?: string
  compact?: boolean
  models?: string[]
  source?: string
  settlementName?: string
  budgets?: string[]
}) {
  const [sent, setSent] = useState(false)
  const [model, setModel] = useState(models?.[0] ?? '')
  const [budget, setBudget] = useState(budgets[0])
  const [channel, setChannel] = useState(channels[0])

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-serif text-xl">Заявка принята</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Менеджер свяжется с вами в течение 15 минут по каналу «{channel}».
          </p>
        </div>
        <div className="w-full rounded-md border border-border bg-secondary/50 p-4">
          <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
            Лид создан в CRM
          </p>
          <dl className="grid grid-cols-2 gap-y-1.5 text-sm">
            <dt className="text-muted-foreground">Источник</dt>
            <dd className="text-right">{source}</dd>
            {settlementName && (
              <>
                <dt className="text-muted-foreground">Посёлок</dt>
                <dd className="text-right">{settlementName}</dd>
              </>
            )}
            {model && (
              <>
                <dt className="text-muted-foreground">Модель дома</dt>
                <dd className="text-right">{model}</dd>
              </>
            )}
            <dt className="text-muted-foreground">Бюджет</dt>
            <dd className="text-right">{budget}</dd>
            <dt className="text-muted-foreground">Канал связи</dt>
            <dd className="text-right">{channel}</dd>
          </dl>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      <div className={`mt-6 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Имя
          </label>
          <input
            required
            placeholder="Ваше имя"
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Телефон
          </label>
          <input
            required
            type="tel"
            placeholder="+7 900 000-00-00"
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>
      </div>

      {models && models.length > 0 && (
        <div className="mt-4">
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Модель дома
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          >
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
      )}

      <div className={`mt-4 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Бюджет
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          >
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
            Канал связи
          </label>
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
          >
            {channels.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {submitLabel}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  )
}
