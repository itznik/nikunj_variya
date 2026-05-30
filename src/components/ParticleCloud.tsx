"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CloudPoints({ count = 2800 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate uniform data-point coordinates mathematically inside a sphere
  const [positions, initialScales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.2; // Sphere bounds

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      scales[i] = Math.random() * 0.8 + 0.2;
    }
    return [pos, scales];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle physical rotation
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = time * 0.02;

    // Simulate architectural "data breathing"
    const geometry = pointsRef.current.geometry;
    const positionAttribute = geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      // Access direct vector points
      const xIndex = i * 3;
      const yIndex = i * 3 + 1;
      const zIndex = i * 3 + 2;

      // Apply low-frequency noise algorithm
      const offset = (initialScales[i] * 10);
      positionAttribute.array[yIndex] += Math.sin(time + offset) * 0.001;
    }
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FF331F" // Volt Crimson design system token
        size={0.025}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Low-power Static Fallback Module
function StaticFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-20">
      <div className="w-[500px] h-[500px] border border-edge rounded-full animate-[spin_120s_linear_infinite] flex items-center justify-center">
        <div className="w-[400px] h-[400px] border border-dashed border-edge rounded-full animate-[spin_60s_linear_infinite_reverse]" />
      </div>
    </div>
  );
}

export default function ParticleCloud() {
  return (
    <div className="absolute inset-0 -z-10 bg-canvas">
      {/* Target hardware constraints and pixel depth adjustments */}
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ 
          antialias: false, // Turned off intentionally to prevent mobile GPU aliasing overhead
          powerPreference: "high-performance" 
        }}
        dpr={[1, 1.5]} // Absolute lock to eliminate high-density screen thermal throttling
        className="w-full h-full pointer-events-none"
      >
        <CloudPoints />
      </Canvas>
    </div>
  );
}
