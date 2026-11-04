import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Procedural 3D Gold Kalasam with Coconut and Mango Leaves
 */
function KalasamModel() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45;
    }
  });

  // Mango leaves around the rim
  const leafCount = 7;
  const leafAngles = useMemo(() => {
    return Array.from({ length: leafCount }).map((_, i) => (i * Math.PI * 2) / leafCount);
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* BASE RING */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.7, 0.9, 0.2, 32]} />
        <meshStandardMaterial color="#D4A017" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* KALASAM BRASS POT BODY */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[1.05, 32, 24]} />
        <meshStandardMaterial
          color="#E5B842"
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* POT NECK */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.55, 0.75, 0.4, 32]} />
        <meshStandardMaterial color="#D4A017" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* POT RIM / FLARE */}
      <mesh position={[0, 0.65, 0]}>
        <torusGeometry args={[0.62, 0.1, 16, 32]} />
        <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* SACRED STRING (NOOL) AROUND POT */}
      <mesh position={[0, -0.45, 0]}>
        <torusGeometry args={[1.06, 0.04, 8, 32]} />
        <meshStandardMaterial color="#DC2626" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <torusGeometry args={[1.03, 0.035, 8, 32]} />
        <meshStandardMaterial color="#F4B942" roughness={0.7} />
      </mesh>

      {/* MANGO LEAVES ARRANGED RADIALLY */}
      <group position={[0, 0.65, 0]}>
        {leafAngles.map((angle, idx) => (
          <group key={idx} rotation={[0, angle, 0]}>
            <mesh
              position={[0.42, 0.45, 0]}
              rotation={[0, 0, -0.45]}
              scale={[1, 1.4, 0.4]}
            >
              <coneGeometry args={[0.22, 0.8, 16]} />
              <meshStandardMaterial color="#2E6F40" roughness={0.4} />
            </mesh>
            {/* Golden vein down the leaf */}
            <mesh position={[0.43, 0.45, 0]} rotation={[0, 0, -0.45]}>
              <cylinderGeometry args={[0.015, 0.015, 0.75, 6]} />
              <meshStandardMaterial color="#E5A93C" roughness={0.3} />
            </mesh>
          </group>
        ))}
      </group>

      {/* SACRED COCONUT (THENGAI) */}
      <group position={[0, 1.1, 0]}>
        <mesh>
          <sphereGeometry args={[0.55, 24, 20]} />
          <meshStandardMaterial color="#6B4423" roughness={0.8} />
        </mesh>
        {/* Coconut fiber tuft on top */}
        <mesh position={[0, 0.52, 0]}>
          <coneGeometry args={[0.22, 0.45, 16]} />
          <meshStandardMaterial color="#8B5A2B" roughness={0.9} />
        </mesh>

        {/* Kumkum & Vibhuti Pottu on Coconut */}
        <mesh position={[0, 0.05, 0.52]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#DC2626" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.18, 0.51]}>
          <boxGeometry args={[0.28, 0.04, 0.04]} />
          <meshStandardMaterial color="#FFFDF7" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Flickering Brass Kuthuvilakku Lamp alongside
 */
function Kuthuvilakku3D({ position = [2.2, -0.8, -0.5] }) {
  const flameRef = useRef();

  useFrame((state) => {
    if (flameRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 9) * 0.12;
      flameRef.current.scale.set(scale, scale * 1.08, scale);
    }
  });

  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.38, 0.52, 0.15, 24]} />
        <meshStandardMaterial color="#D4A017" metalness={0.88} roughness={0.2} />
      </mesh>
      {/* Column */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.5, 16]} />
        <meshStandardMaterial color="#E5B842" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Rings on column */}
      <mesh position={[0, -0.4, 0]}>
        <torusGeometry args={[0.16, 0.04, 12, 24]} />
        <meshStandardMaterial color="#F5D061" metalness={0.92} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.16, 0.04, 12, 24]} />
        <meshStandardMaterial color="#F5D061" metalness={0.92} roughness={0.18} />
      </mesh>
      {/* Oil Dish */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.42, 0.24, 0.14, 24]} />
        <meshStandardMaterial color="#D4A017" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Crown finial */}
      <mesh position={[0, 0.85, 0]}>
        <coneGeometry args={[0.12, 0.28, 16]} />
        <meshStandardMaterial color="#F5D061" metalness={0.92} roughness={0.18} />
      </mesh>

      {/* Lit Flame */}
      <group position={[0, 0.95, 0]} ref={flameRef}>
        <mesh>
          <coneGeometry args={[0.09, 0.3, 16]} />
          <meshBasicMaterial color="#FF9900" />
        </mesh>
        <mesh position={[0, 0.04, 0]}>
          <coneGeometry args={[0.05, 0.2, 16]} />
          <meshBasicMaterial color="#FFFFDD" />
        </mesh>
        <pointLight position={[0, 0.1, 0.1]} intensity={1.8} color="#FF9933" distance={3.5} />
      </group>
    </group>
  );
}

/**
 * Floating Marigold (orange/yellow) and Jasmine (white) Petals
 */
function FloatingPetals({ count = 35 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      speedX: (Math.random() - 0.5) * 0.008,
      speedY: -0.006 - Math.random() * 0.008,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      isMarigold: Math.random() > 0.45,
    }));
  }, [count]);

  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const p = petals[i];
      child.position.y += p.speedY;
      child.position.x += Math.sin(child.position.y * 2) * 0.006;
      child.rotation.x += p.rotSpeed;
      child.rotation.y += p.rotSpeed * 0.8;

      // Wrap around screen bounds
      if (child.position.y < -3) {
        child.position.y = 3;
        child.position.x = (Math.random() - 0.5) * 8;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {petals.map((p, i) => (
        <mesh key={i} position={p.position} rotation={p.rotation}>
          {p.isMarigold ? (
            <>
              {/* Marigold Petal */}
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#F59E0B' : '#E5A93C'}
                roughness={0.7}
              />
            </>
          ) : (
            <>
              {/* Jasmine Petal */}
              <coneGeometry args={[0.045, 0.12, 6]} />
              <meshStandardMaterial color="#FCFCF7" roughness={0.4} />
            </>
          )}
        </mesh>
      ))}
    </group>
  );
}

/**
 * Main Hero 3D Canvas Scene
 */
export function KalasamScene() {
  return (
    <div className="w-full h-[360px] sm:h-[440px] md:h-[500px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0.3, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={1.6} color="#FFFDF7" />
        <directionalLight position={[-4, 2, 2]} intensity={0.8} color="#F5D061" />
        <pointLight position={[0, 2, 2]} intensity={1.2} color="#D4A017" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
          <KalasamModel />
        </Float>

        <Kuthuvilakku3D position={[-2.2, -0.6, -0.6]} />
        <Kuthuvilakku3D position={[2.2, -0.6, -0.6]} />

        <FloatingPetals count={32} />
      </Canvas>
    </div>
  );
}

