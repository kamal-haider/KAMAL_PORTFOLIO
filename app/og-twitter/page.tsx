export default function TwitterCard() {
  return (
    <div
      style={{
        width: '1200px',
        height: '600px',
        background: '#030303',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'JetBrains Mono, monospace',
      }}
    >
      {/* Animated grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, #222222 1px, transparent 1px), linear-gradient(to bottom, #222222 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
        }}
      />

      {/* Central glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0, 255, 224, 0.12) 0%, transparent 60%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Left accent line */}
      <div
        style={{
          position: 'absolute',
          left: '60px',
          top: '60px',
          bottom: '60px',
          width: '2px',
          background: 'linear-gradient(180deg, #00FFE0, transparent)',
        }}
      />

      {/* Content container */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '80px', width: '100%' }}>
        {/* Left side - Name and info */}
        <div style={{ flex: 1 }}>
          {/* Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              border: '1px solid #333',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                background: '#00FFE0',
                borderRadius: '50%',
                boxShadow: '0 0 12px rgba(0, 255, 224, 0.8)',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: '#00FFE0',
                letterSpacing: '0.2em',
              }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Name */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#00FFE0',
                textShadow: '0 0 40px rgba(0, 255, 224, 0.4)',
                letterSpacing: '-0.02em',
              }}
            >
              KAMAL
            </span>
            <span
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#F0F0F0',
                marginLeft: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              HAIDER
            </span>
          </div>

          {/* Role */}
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.4)',
              margin: 0,
              letterSpacing: '0.15em',
            }}
          >
            AI MOBILE ENGINEER
          </p>
        </div>

        {/* Right side - Skills visualization */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '32px',
            border: '1px solid #222',
            background: 'rgba(17, 17, 17, 0.5)',
          }}
        >
          {[
            { label: 'LLM Integration', value: 95 },
            { label: 'Flutter/Dart', value: 92 },
            { label: 'Mobile AI', value: 88 },
            { label: 'iOS & Android', value: 90 },
          ].map((skill) => (
            <div key={skill.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  width: '120px',
                  letterSpacing: '0.05em',
                }}
              >
                {skill.label}
              </span>
              <div
                style={{
                  width: '120px',
                  height: '4px',
                  background: '#222',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${skill.value}%`,
                    background: '#00FFE0',
                    boxShadow: '0 0 10px rgba(0, 255, 224, 0.5)',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '11px',
                  color: '#00FFE0',
                  fontWeight: 600,
                }}
              >
                {skill.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '80px',
          right: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            color: 'rgba(255, 255, 255, 0.2)',
            letterSpacing: '0.2em',
          }}
        >
          FLUTTER • AI/ML • iOS • ANDROID
        </div>
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00FFE0)',
          }}
        />
      </div>
    </div>
  );
}
