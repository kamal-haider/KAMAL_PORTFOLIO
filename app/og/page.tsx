export default function OGImage() {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#030303',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, #222222 1px, transparent 1px), linear-gradient(to bottom, #222222 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
      />

      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 255, 224, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 0, 170, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Corner accents */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '60px',
          height: '60px',
          borderLeft: '2px solid #00FFE0',
          borderTop: '2px solid #00FFE0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '60px',
          height: '60px',
          borderRight: '2px solid #00FFE0',
          borderBottom: '2px solid #00FFE0',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              background: '#00FFE0',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(0, 255, 224, 0.8)',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              color: '#00FFE0',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            AI Mobile Engineer
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: '96px',
            fontWeight: 700,
            color: '#00FFE0',
            margin: 0,
            lineHeight: 1,
            textShadow: '0 0 60px rgba(0, 255, 224, 0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          KAMAL
        </h1>
        <h1
          style={{
            fontSize: '96px',
            fontWeight: 700,
            color: '#F0F0F0',
            margin: 0,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          HAIDER
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '40px',
            maxWidth: '700px',
            lineHeight: 1.4,
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          Building AI-powered mobile apps with LLMs, on-device intelligence, and cross-platform experiences.
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          {['Flutter', 'AI/ML', 'iOS', 'Android'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '8px 20px',
                border: '1px solid #333',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '14px',
                letterSpacing: '0.1em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative data lines */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.2)',
            letterSpacing: '0.15em',
          }}
        >
          PORTFOLIO.2024
        </div>
        <div
          style={{
            width: '100px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00FFE0)',
          }}
        />
      </div>
    </div>
  );
}
