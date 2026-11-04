import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Procedural Banana Tree (Vazhai Maram) with hanging flower & bunch
 */
function BananaTree({ position = [-2.2, -1.2, 0.8] }) {
  return (
    <group position={position}>
      {/* Trunk (maram) */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.22, 2.4, 16]} />
        <meshStandardMaterial color="#3D7E44" roughness={0.6} />
      </mesh>

      {/* Broad Arching Banana Leaves */}
      {[0, 1.1, 2.2, 3.3, 4.4, 5.5].map((angle, i) => (
        <group key={i} position={[0, 2.2, 0]} rotation={[0, angle, 0.45]}>
          <mesh position={[0.7, 0.3, 0]} rotation={[0, 0, -0.6]} scale={[1.4, 0.1, 0.4]}>
            <sphereGeometry args={[0.55, 16, 12]} />
            <meshStandardMaterial color="#2E6F40" roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Hanging Banana Bunch (Vazhaikkai) */}
      <group position={[0.2, 1.6, 0.2]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.18, 0.4, 12]} />
          <meshStandardMaterial color="#558B2F" roughness={0.5} />
        </mesh>
        {/* Purple Banana Blossom (Vazhaipoo) */}
        <mesh position={[0, -0.3, 0]}>
          <coneGeometry args={[0.1, 0.28, 12]} />
          <meshStandardMaterial color="#5B1647" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Procedural Mandapam / Manavarai with 4 Carved Gold Pillars, Canopy & Flower Garlands
 */
function ManavaraiModel() {
  const groupRef = useRef();

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* RAISED MANDAP PLATFORM (RED CARPET & GOLD BORDER) */}
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[4.4, 0.24, 3.4]} />
        <meshStandardMaterial color="#6B0F1A" roughness={0.6} />
      </mesh>
      {/* Golden Stage Trim */}
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[4.48, 0.18, 3.48]} />
        <meshStandardMaterial color="#D4A017" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* 4 CARVED GOLDEN PILLARS */}
      {[
        [-1.7, 0, 1.2],
        [1.7, 0, 1.2],
        [-1.7, 0, -1.2],
        [1.7, 0, -1.2],
      ].map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Pillar Base */}
          <mesh position={[0, -1.05, 0]}>
            <boxGeometry args={[0.42, 0.35, 0.42]} />
            <meshStandardMaterial color="#AA7C11" metalness={0.8} roughness={0.25} />
          </mesh>
          {/* Main Column */}
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.13, 0.16, 2.0, 20]} />
            <meshStandardMaterial color="#E5B842" metalness={0.9} roughness={0.18} />
          </mesh>
          {/* Rings */}
          <mesh position={[0, 0.4, 0]}>
            <torusGeometry args={[0.17, 0.035, 12, 20]} />
            <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.4, 0]}>
            <torusGeometry args={[0.17, 0.035, 12, 20]} />
            <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Pillar Capital (Bodhikai) */}
          <mesh position={[0, 1.15, 0]}>
            <boxGeometry args={[0.45, 0.2, 0.45]} />
            <meshStandardMaterial color="#D4A017" metalness={0.88} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* MANDAPAM CANOPY / ROOF */}
      <mesh position={[0, 1.45, 0]}>
        <boxGeometry args={[4.2, 0.2, 3.2]} />
        <meshStandardMaterial color="#7A1320" roughness={0.5} />
      </mesh>
      {/* Tiered Temple Pagoda Ridge on Top */}
      <mesh position={[0, 1.7, 0]}>
        <boxGeometry args={[3.2, 0.3, 2.2]} />
        <meshStandardMaterial color="#D4A017" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* 3 Golden Summit Kalasams atop Mandap */}
      {[-0.9, 0, 0.9].map((xOffset, i) => (
        <group key={i} position={[xOffset, 2.05, 0]}>
          <mesh>
            <coneGeometry args={[0.12, 0.4, 16]} />
            <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.15} />
          </mesh>
        </group>
      ))}

      {/* MARIGOLD & JASMINE GARLAND ARCH (FLOWER FESTOONS) */}
      {[-1.2, -0.6, 0, 0.6, 1.2].map((x, idx) => (
        <group key={idx} position={[x, 1.3, 1.22]}>
          <mesh position={[0, -0.25, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.5, 8]} />
            <meshStandardMaterial color={idx % 2 === 0 ? '#F59E0B' : '#FFFDF7'} roughness={0.7} />
          </mesh>
          {/* Flower bell tassel */}
          <mesh position={[0, -0.52, 0]}>
            <sphereGeometry args={[0.065, 8, 8]} />
            <meshStandardMaterial color="#DC2626" />
          </mesh>
        </group>
      ))}

      {/* MANAVARAI SEATING THRONE (ASANAM) */}
      <group position={[0, -0.7, -0.2]}>
        {/* Bench / Seat */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.3, 0.8]} />
          <meshStandardMaterial color="#F5D061" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Red velvet cushion */}
        <mesh position={[0, 0.18, 0]}>
          <boxGeometry args={[1.7, 0.12, 0.72]} />
          <meshStandardMaterial color="#8B1E2B" roughness={0.7} />
        </mesh>
        {/* Carved Backrest */}
        <mesh position={[0, 0.65, -0.35]}>
          <boxGeometry args={[1.7, 0.85, 0.1]} />
          <meshStandardMaterial color="#D4A017" metalness={0.8} roughness={0.25} />
        </mesh>
      </group>

      {/* BANANA TREES FLANKING THE MANDAP */}
      <BananaTree position={[-2.3, -1.2, 1.2]} />
      <BananaTree position={[2.3, -1.2, 1.2]} />
    </group>
  );
}

/**
 * Interactive 3D Manavarai Scene with OrbitControls & Auto-rotation
 */
export function ManavaraiScene() {
  return (
    <div className="w-full h-[360px] sm:h-[450px] relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-gradient-to-b from-kumkum-dark/70 to-kumkum-deep/90">
      <Canvas
        camera={{ position: [0, 1.2, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} color="#FFFDF7" />
        <directionalLight position={[-4, 3, 2]} intensity={0.8} color="#F5D061" />
        <pointLight position={[0, 2, 2]} intensity={1.4} color="#FF9900" distance={6} />

        <ManavaraiModel />

        {/* OrbitControls: smooth drag to rotate, damping & auto-rotate */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.0}
          maxPolarAngle={Math.PI / 2 - 0.05} // Don't flip below stage
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Interactive Helper Overlay Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-kumkum-deep/80 backdrop-blur-md border border-gold/40 text-[11px] sm:text-xs text-gold-warm font-tamilBody pointer-events-none flex items-center gap-1.5 shadow-md">
        <span>🔄</span>
        <span>சுழற்றிப் பார்க்க தொடவும் / Drag to rotate the Manavarai</span>
      </div>
    </div>
  );
}

