'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = { label: string; icon: LucideIcon; active?: boolean; badge?: string }

export function DashboardShell({
  role,
  name,
  initials,
  nav,
  children,
}: {
  role: string
  name: string
  initials: string
  nav: NavItem[]
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold tracking-tight">OLNOO</span>
          <span className="text-base font-light tracking-tight text-muted-foreground">
            Property
          </span>
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Закрыть">
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="px-5 pb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{role}</p>
      <nav className="flex-1 space-y-0.5 px-3">
        {nav.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
              item.active
                ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground'
            }`}
          >
            <span className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              {item.label}
            </span>
            {item.badge && (
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          На сайт
        </Link>
        <div className="mt-2 flex items-center gap-3 rounded-md px-3 py-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {initials}
          </span>
          <span className="text-sm font-medium">{name}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto">{sidebar}</div>
      </aside>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 border-r border-sidebar-border bg-sidebar">
            {sidebar}
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-border bg-background px-5 py-4 lg:hidden">
          <button onClick={() => setOpen(true)} aria-label="Меню">
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium">{role}</span>
        </header>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}

export function PageTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-serif text-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
