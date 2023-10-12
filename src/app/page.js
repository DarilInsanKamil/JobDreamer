'use client'
import { About, Card, FlowSection, HeroSection, ListCard, ListSection, PrimacySection } from '@/components';

export default function Home() {
  return (
    <div>

      <main>
        {/* Konten halaman beranda Anda */}
        <HeroSection />
        <FlowSection />
        <ListSection />
        <PrimacySection />
        <About />
      </main>
    </div>

  )
}
