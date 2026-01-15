'use client';

import React, { useCallback, useState, useEffect, createContext, useContext } from 'react';

// Sound settings - very soft, subtle UI feedback tones
const SOUNDS = {
  hover: {
    frequency: 2400, // Higher, more subtle
    duration: 20,
    type: 'sine' as OscillatorType,
    volume: 0.008, // Very quiet
  },
  click: {
    frequency: 440, // Gentle low tone
    duration: 50,
    type: 'sine' as OscillatorType,
    volume: 0.012,
  },
  success: {
    frequency: 660,
    duration: 80,
    type: 'sine' as OscillatorType,
    volume: 0.01,
  },
  nav: {
    frequency: 1800,
    duration: 25,
    type: 'sine' as OscillatorType,
    volume: 0.008,
  },
};

type SoundName = keyof typeof SOUNDS;

// Create context for sound state
const SoundContext = createContext<{
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  play: (name: SoundName) => void;
}>({
  enabled: false,
  setEnabled: () => {},
  play: () => {},
});

class SoundEngine {
  private audioContext: AudioContext | null = null;
  private initialized: boolean = false;

  async init() {
    if (this.initialized || typeof window === 'undefined') return;

    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  play(name: SoundName, enabled: boolean) {
    if (!enabled || !this.audioContext) return;

    const sound = SOUNDS[name];
    if (!sound) return;

    try {
      // Resume context if suspended (browser autoplay policy)
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.type = sound.type;
      oscillator.frequency.setValueAtTime(sound.frequency, this.audioContext.currentTime);

      // Soft envelope - quick attack, smooth decay
      const now = this.audioContext.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(sound.volume, now + 0.005);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + sound.duration / 1000);

      oscillator.start(now);
      oscillator.stop(now + sound.duration / 1000);
    } catch (e) {
      // Silently fail if audio playback fails
    }
  }

  isInitialized() {
    return this.initialized;
  }
}

// Singleton
const soundEngine = new SoundEngine();

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      soundEngine.init();
    }
  }, [enabled]);

  const play = useCallback((name: SoundName) => {
    soundEngine.play(name, enabled);
  }, [enabled]);

  return (
    <SoundContext.Provider value={{ enabled, setEnabled, play }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  return useContext(SoundContext);
}

export function useSoundEnabled() {
  const { enabled, setEnabled, play } = useSoundContext();

  const toggle = useCallback(() => {
    const newState = !enabled;
    setEnabled(newState);

    // Initialize and play success sound when enabling
    if (newState) {
      soundEngine.init().then(() => {
        setTimeout(() => soundEngine.play('success', true), 50);
      });
    }
  }, [enabled, setEnabled]);

  return { enabled, toggle };
}

export function useSound() {
  const { play, enabled } = useSoundContext();
  return { play, enabled };
}

// Hook to add hover sound to elements
export function useHoverSound() {
  const { play, enabled } = useSoundContext();

  const onMouseEnter = useCallback(() => {
    if (enabled) {
      play('hover');
    }
  }, [play, enabled]);

  return { onMouseEnter };
}
