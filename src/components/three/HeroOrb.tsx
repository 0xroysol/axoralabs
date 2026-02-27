"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ExecutiveCore({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const markerRef = useRef<THREE.Points>(null);

  const markerPositions = useMemo(() => {
    const points = new Float32Array(180);

    for (let i = 0; i < points.length; i += 3) {
      const radius = 1.6 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      points[i] = radius * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = (radius * Math.cos(phi)) / 2;
      points[i + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return points;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !markerRef.current || reducedMotion) {
      return;
    }

    groupRef.current.rotation.y += 0.0024;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
    markerRef.current.rotation.y -= 0.0018;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2.8, 0.2, 0]}>
        <torusGeometry args={[1.35, 0.045, 24, 180]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.35} metalness={0.8} />
      </mesh>

      <mesh rotation={[Math.PI / 2.8, 0.2, Math.PI / 2]}>
        <torusGeometry args={[1.35, 0.045, 24, 180]} />
        <meshStandardMaterial color="#93c5fd" roughness={0.35} metalness={0.7} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.58, 2]} />
        <meshStandardMaterial color="#0f172a" emissive="#1d4ed8" emissiveIntensity={0.16} roughness={0.45} metalness={0.55} />
      </mesh>

      <points ref={markerRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[markerPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#bfdbfe" size={0.03} sizeAttenuation />
      </points>
    </group>
  );
}

export function HeroOrb() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="relative h-[320px] overflow-hidden rounded-[1.35rem] border border-slate-700/40 bg-[#0c131d] md:h-[420px]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
      <Canvas camera={{ position: [0, 0, 4.3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight color="#e2e8f0" intensity={24} position={[2, 2, 2]} />
        <pointLight color="#60a5fa" intensity={10} position={[-2, -1, 1]} />
        <ExecutiveCore reducedMotion={Boolean(reducedMotion)} />
      </Canvas>
    </motion.div>
  );
}
