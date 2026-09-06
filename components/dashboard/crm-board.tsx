import { Phone, MapPin, User } from 'lucide-react'
import { crmStages, leads, type Lead } from '@/lib/data'

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="rounded-md border border-border bg-card p-3.5">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium">{lead.name}</p>
        <span className="text-xs text-muted-foreground">{lead.budget}</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{lead.object}</p>
      <div className="mt-3 space-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" />
          {lead.phone}
        </p>
        <p className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          {lead.direction}
        </p>
        <p className="flex items-center gap-1.5">
          <User className="h-3 w-3" />
          {lead.manager}
        </p>
      </div>
      <p className="mt-3 rounded bg-secondary px-2 py-1.5 text-xs">
        Следующее: <span className="font-medium text-foreground">{lead.nextAction}</span>
      </p>
    </div>
  )
}

export function CrmBoard() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max gap-4">
        {crmStages.map((stage) => {
          const stageLeads = leads.filter((l) => l.stage === stage)
          return (
            <div key={stage} className="w-64 shrink-0">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium">{stage}</h3>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {stageLeads.length}
                </span>
              </div>
              <div className="space-y-3">
                {stageLeads.length > 0 ? (
                  stageLeads.map((l) => <LeadCard key={l.name} lead={l} />)
                ) : (
                  <div className="rounded-md border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                    Пусто
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { LeadCard }
