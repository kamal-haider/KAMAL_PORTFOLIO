'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectShowcase from '@/components/ProjectShowcase';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import SoundToggle from '@/components/SoundToggle';
import ScrollToTop from '@/components/ScrollToTop';
import { SoundProvider } from '@/hooks/useSound';

// Dynamically import heavy 3D components
const NeuralField = dynamic(() => import('@/components/NeuralField'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 bg-void" />
  ),
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setTimeout(() => setIsReady(true), 100);
  }, []);

  return (
    <SoundProvider>
      <SmoothScroll>
        {/* Custom cursor */}
        <CustomCursor />

        {/* Sound toggle */}
        <SoundToggle />

        {/* Scroll to top */}
        <ScrollToTop />

        {/* Loading Screen */}
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        </AnimatePresence>

        {/* Three.js Neural Particle Field Background */}
        <NeuralField />

        {/* Main Content */}
        <main className={`relative z-10 transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
          <Navigation />
          <Hero />
          <ProjectShowcase />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Noise overlay for texture */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </SmoothScroll>
    </SoundProvider>
  );
}
