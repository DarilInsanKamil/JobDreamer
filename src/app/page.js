'use client'
import { About, Card, FlowSection, HeroSection, ListCard, ListSection, PrimacySection } from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FlowSection />
      <ListSection />
      <PrimacySection />
      <About />
    </main>
  )
}
