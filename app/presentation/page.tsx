import type { Metadata } from 'next'
import { PresentationDeck } from './deck'

export const metadata: Metadata = {
  title: 'AURE ESTATES — Презентация',
  description:
    'Платформа загородной недвижимости AURE ESTATES: посёлки, дома, участки, брокеры, девелоперы и покупатели в одном пространстве.',
}

export default function PresentationPage() {
  return <PresentationDeck />
}
