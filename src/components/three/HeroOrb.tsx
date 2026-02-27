"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function OrbMesh({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) {
      return;
    }
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.25;
    meshRef.current.rotation.y += 0.0035;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.1, 2]} />
      <meshStandardMaterial
        color="#00E5FF"
        emissive="#1d4ed8"
        emissiveIntensity={0.25}
        roughness={0.3}
        metalness={0.55}
        wireframe
      />
    </mesh>
  );
}

export function HeroOrb() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="surface relative h-[320px] overflow-hidden rounded-2xl md:h-[420px]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/10" />
      <Canvas camera={{ position: [0, 0, 3.7], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight color="#00E5FF" intensity={35} position={[2, 2, 2]} />
        <pointLight color="#7C3AED" intensity={25} position={[-2, -1, -1]} />
        <OrbMesh reducedMotion={Boolean(reducedMotion)} />
      </Canvas>
    </motion.div>
  );
}
