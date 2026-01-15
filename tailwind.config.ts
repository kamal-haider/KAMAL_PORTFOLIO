import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NEURAL.LINK Color System
        void: {
          DEFAULT: '#050508',
          light: '#0a0a0f',
          dark: '#020203',
        },
        surface: {
          DEFAULT: '#0f0f14',
          elevated: '#16161d',
          overlay: '#1c1c25',
        },
        neural: {
          DEFAULT: '#00F0FF',
          dim: 'rgba(0, 240, 255, 0.5)',
          glow: 'rgba(0, 240, 255, 0.15)',
          muted: 'rgba(0, 240, 255, 0.08)',
        },
        amber: {
          DEFAULT: '#FFB800',
          dim: 'rgba(255, 184, 0, 0.5)',
          glow: 'rgba(255, 184, 0, 0.15)',
          muted: 'rgba(255, 184, 0, 0.08)',
        },
        signal: {
          DEFAULT: '#FF3366',
          dim: 'rgba(255, 51, 102, 0.5)',
          glow: 'rgba(255, 51, 102, 0.15)',
        },
        text: {
          primary: '#E8E8E8',
          secondary: '#888894',
          tertiary: '#555560',
          muted: '#3a3a44',
        },
        border: {
          DEFAULT: '#1e1e28',
          light: '#2a2a36',
          active: '#3a3a48',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'title': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'data-stream': 'dataStream 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 240, 255, 0.1)',
            borderColor: 'rgba(0, 240, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2), 0 0 50px rgba(0, 240, 255, 0.1)',
            borderColor: 'rgba(0, 240, 255, 0.6)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dataStream: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': `
          linear-gradient(to right, rgba(30, 30, 40, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 30, 40, 0.5) 1px, transparent 1px)
        `,
        'dot-pattern': 'radial-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px)',
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      },
      backgroundSize: {
        'grid': '80px 80px',
        'grid-sm': '40px 40px',
        'dot': '24px 24px',
      },
      boxShadow: {
        'glow-neural': '0 0 20px rgba(0, 240, 255, 0.15), 0 0 40px rgba(0, 240, 255, 0.1)',
        'glow-amber': '0 0 20px rgba(255, 184, 0, 0.15), 0 0 40px rgba(255, 184, 0, 0.1)',
        'glow-signal': '0 0 20px rgba(255, 51, 102, 0.15), 0 0 40px rgba(255, 51, 102, 0.1)',
        'inner-glow': 'inset 0 0 30px rgba(0, 240, 255, 0.05)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      blur: {
        '4xl': '100px',
      },
    },
  },
  plugins: [],
};

export default config;
