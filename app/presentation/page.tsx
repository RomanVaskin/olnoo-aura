import type { Metadata } from 'next'
import { PresentationDeck } from './deck'

export const metadata: Metadata = {
  title: 'AURA ESTATES — Презентация',
  description:
    'Платформа загородной недвижимости AURA ESTATES: посёлки, дома, участки, брокеры, девелоперы и покупатели в одном пространстве.',
}

export default function PresentationPage() {
  return <PresentationDeck />
}
