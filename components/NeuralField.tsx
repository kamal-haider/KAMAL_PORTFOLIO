'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Particle count based on device capability
const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 800 : 1500;
const CONNECTION_DISTANCE = 1.5;

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();
  const mousePosition = useRef(new THREE.Vector3(0, 0, 0));

  // Initialize particle positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Spread particles in a 3D space
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 10 - 5;

      // Random velocities
      vel[i3] = (Math.random() - 0.5) * 0.01;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.01;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    return [pos, vel];
  }, []);

  // Create particle geometry
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  // Create line geometry for connections
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    // Pre-allocate for maximum possible connections
    const maxConnections = PARTICLE_COUNT * 10;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    geometry.setDrawRange(0, 0);
    return geometry;
  }, []);

  // Particle material
  const particleMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Size based on distance from camera
          float size = 3.0 * uPixelRatio;
          gl_PointSize = size * (1.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        void main() {
          // Circular particle with soft edges
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(0.0, 0.94, 1.0, alpha * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  // Line material
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    if (!mesh.current || !linesMesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const linePositions = linesMesh.current.geometry.attributes.position.array as Float32Array;
    const lineColors = linesMesh.current.geometry.attributes.color.array as Float32Array;

    // Update mouse position in 3D space
    mousePosition.current.x = (mouse.x * viewport.width) / 2;
    mousePosition.current.y = (mouse.y * viewport.height) / 2;

    let connectionCount = 0;

    // Update particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Apply velocity
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // Mouse interaction - subtle attraction
      const dx = mousePosition.current.x - positions[i3];
      const dy = mousePosition.current.y - positions[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3) {
        const force = (3 - dist) / 3 * 0.002;
        positions[i3] += dx * force;
        positions[i3 + 1] += dy * force;
      }

      // Boundary wrapping
      if (positions[i3] > 10) positions[i3] = -10;
      if (positions[i3] < -10) positions[i3] = 10;
      if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
      if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      if (positions[i3 + 2] > 0) positions[i3 + 2] = -10;
      if (positions[i3 + 2] < -10) positions[i3 + 2] = 0;

      // Find connections (limited for performance)
      if (connectionCount < 1000) {
        for (let j = i + 1; j < Math.min(i + 50, PARTICLE_COUNT); j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < CONNECTION_DISTANCE) {
            const idx = connectionCount * 6;
            const alpha = 1 - distance / CONNECTION_DISTANCE;

            // Line start
            linePositions[idx] = positions[i3];
            linePositions[idx + 1] = positions[i3 + 1];
            linePositions[idx + 2] = positions[i3 + 2];

            // Line end
            linePositions[idx + 3] = positions[j3];
            linePositions[idx + 4] = positions[j3 + 1];
            linePositions[idx + 5] = positions[j3 + 2];

            // Colors (cyan with alpha based on distance)
            const colorIntensity = alpha * 0.15;
            lineColors[idx] = 0;
            lineColors[idx + 1] = colorIntensity * 0.94;
            lineColors[idx + 2] = colorIntensity;
            lineColors[idx + 3] = 0;
            lineColors[idx + 4] = colorIntensity * 0.94;
            lineColors[idx + 5] = colorIntensity;

            connectionCount++;
          }
        }
      }
    }

    // Update geometries
    mesh.current.geometry.attributes.position.needsUpdate = true;
    linesMesh.current.geometry.attributes.position.needsUpdate = true;
    linesMesh.current.geometry.attributes.color.needsUpdate = true;
    linesMesh.current.geometry.setDrawRange(0, connectionCount * 2);

    // Update shader time
    (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <>
      <points ref={mesh} geometry={particleGeometry} material={particleMaterial} />
      <lineSegments ref={linesMesh} geometry={lineGeometry} material={lineMaterial} />
    </>
  );
}

function Scene() {
  return (
    <>
      <Particles />
      {/* Ambient glow */}
      <mesh position={[0, 0, -15]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          color="#00F0FF"
          transparent
          opacity={0.02}
        />
      </mesh>
    </>
  );
}

export default function NeuralField() {
  return (
    <div className="fixed inset-0 z-0" id="neural-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene />
      </Canvas>

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(5, 5, 8, 0.4) 50%, rgba(5, 5, 8, 0.9) 100%),
            linear-gradient(180deg, rgba(5, 5, 8, 0) 0%, rgba(5, 5, 8, 0.6) 100%)
          `,
        }}
      />
    </div>
  );
}
