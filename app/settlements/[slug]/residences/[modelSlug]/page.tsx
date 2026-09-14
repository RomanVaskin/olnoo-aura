import { notFound } from 'next/navigation'
import { ResidenceDetailView } from '@/components/residence-detail'
import { settlements, settlementDetails } from '@/lib/data'

export default async function ResidencePage({
  params,
}: {
  params: Promise<{ slug: string; modelSlug: string }>
}) {
  const { slug, modelSlug } = await params
  const settlement = settlements.find((s) => s.slug === slug)
  const detail = settlementDetails[slug]
  const model = detail?.models.find((m) => m.slug === modelSlug)

  if (!settlement || !detail || !model) notFound()

  return <ResidenceDetailView settlement={settlement} model={model} />
}

export function generateStaticParams() {
  return Object.values(settlementDetails).flatMap((detail) =>
    detail.models.map((model) => ({ slug: detail.slug, modelSlug: model.slug })),
  )
}
