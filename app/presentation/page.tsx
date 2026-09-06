import type { Metadata } from 'next'
import { PresentationDeck } from './deck'

export const metadata: Metadata = {
  title: 'OLNOO Property — Презентация',
  description:
    'Платформа загородной недвижимости OLNOO Property: посёлки, дома, участки, брокеры, девелоперы и покупатели в одном пространстве.',
}

export default function PresentationPage() {
  return <PresentationDeck />
}
