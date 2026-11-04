import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural texture generator for gold zari border and embossed kolam
 */
function createCardTexture(type = 'front') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Rich Maroon Silk Background
  const gradient = ctx.createLinearGradient(0, 0, 512, 768);
  gradient.addColorStop(0, '#7A1320');
  gradient.addColorStop(0.5, '#6B0F1A');
  gradient.addColorStop(1, '#4A0812');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 768);

  // Zari Border (Gold Frame)
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 16;
  ctx.strokeRect(16, 16, 480, 736);

  ctx.strokeStyle = '#F5D061';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 452, 708);

  // Tiny corner dots
  ctx.fillStyle = '#F5D061';
  const corners = [
    [40, 40], [472, 40], [40, 728], [472, 728]
  ];
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  if (type === 'front-left') {
    // Left door half kolam
    ctx.strokeStyle = '#E5B842';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(512, 384, 160, Math.PI * 0.5, Math.PI * 1.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(512, 384, 120, Math.PI * 0.5, Math.PI * 1.5);
    ctx.stroke();

    // Corner decorative arcs
    ctx.beginPath();
    ctx.arc(32, 32, 60, 0, Math.PI * 0.5);
    ctx.stroke();
  } else if (type === 'front-right') {
    // Right door half kolam
    ctx.strokeStyle = '#E5B842';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 384, 160, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 384, 120, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.stroke();

    // Corner decorative arcs
    ctx.beginPath();
    ctx.arc(480, 32, 60, Math.PI * 0.5, Math.PI);
    ctx.stroke();
  } else if (type === 'inside') {
    // Inside panel: Intricate auspicious kolam & blessings backdrop
    ctx.fillStyle = '#5A0B15';
    ctx.fillRect(0, 0, 512, 768);

    ctx.strokeStyle = 'rgba(212, 160, 23, 0.4)';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 472, 728);

    // Mandap Arch outline
    ctx.strokeStyle = '#F5D061';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(80, 700);
    ctx.lineTo(80, 240);
    ctx.bezierCurveTo(80, 100, 432, 100, 432, 240);
    ctx.lineTo(432, 700);
    ctx.stroke();

    // Sacred 'உ' text inside
    ctx.fillStyle = '#F5D061';
    ctx.font = 'bold 72px "Noto Serif Tamil", serif';
    ctx.textAlign = 'center';
    ctx.fillText('உ', 256, 170);

    ctx.font = '22px "Noto Serif Tamil", serif';
    ctx.fillStyle = '#FFFDF7';
    ctx.fillText('சுப முகூர்த்தத் திருமணம்', 256, 215);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function InvitationCard3D({ isOpen, isUntied, mousePos = { x: 0, y: 0 } }) {
  const cardGroupRef = useRef();
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();
  const threadRef = useRef();
  const sparkGroupRef = useRef();

  // Create textures
  const leftTexture = useMemo(() => createCardTexture('front-left'), []);
  const rightTexture = useMemo(() => createCardTexture('front-right'), []);
  const insideTexture = useMemo(() => createCardTexture('inside'), []);

  // Golden sparkles when opened
  const sparkleCount = 45;
  const sparkles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < sparkleCount; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 4,
        z: Math.random() * 2 + 0.2,
        speed: 0.02 + Math.random() * 0.04,
        size: 0.03 + Math.random() * 0.05,
      });
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!cardGroupRef.current) return;

    // Gentle floating tilt
    const targetRotX = (mousePos.y * 0.25) + Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    const targetRotY = (mousePos.x * 0.35) + Math.cos(state.clock.elapsedTime * 1.2) * 0.04;

    cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(cardGroupRef.current.rotation.x, targetRotX, 0.08);
    cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(cardGroupRef.current.rotation.y, targetRotY, 0.08);

    // Door opening animation
    if (leftDoorRef.current && rightDoorRef.current) {
      const targetAngle = isOpen ? -Math.PI * 0.75 : 0;
      leftDoorRef.current.rotation.y = THREE.MathUtils.lerp(leftDoorRef.current.rotation.y, targetAngle, delta * 3.5);
      rightDoorRef.current.rotation.y = THREE.MathUtils.lerp(rightDoorRef.current.rotation.y, -targetAngle, delta * 3.5);
    }

    // Thread untying and falling/fading
    if (threadRef.current) {
      if (isUntied) {
        threadRef.current.position.y -= delta * 3.5;
        threadRef.current.scale.multiplyScalar(0.96);
      }
    }

    // Sparkles animation when opened
    if (sparkGroupRef.current && isOpen) {
      sparkGroupRef.current.children.forEach((spark, idx) => {
        spark.position.y += Math.sin(state.clock.elapsedTime * 3 + idx) * 0.01 + 0.01;
        spark.rotation.z += 0.02;
        spark.scale.setScalar(0.6 + Math.sin(state.clock.elapsedTime * 6 + idx) * 0.4);
      });
    }
  });

  return (
    <group ref={cardGroupRef} position={[0, 0, 0]}>
      {/* INSIDE BACK PANEL */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.8, 5.2, 0.08]} />
        <meshStandardMaterial
          map={insideTexture}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Gold Rim around Card */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[3.86, 5.26, 0.06]} />
        <meshStandardMaterial color="#D4A017" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* INSIDE: Procedural 3D Kuthuvilakku Lamp (lit) */}
      <group position={[0, -0.6, 0.15]} visible={isOpen}>
        {/* Lamp Base */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.35, 0.45, 0.12, 24]} />
          <meshStandardMaterial color="#E5B842" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Lamp Stem */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 1.3, 16]} />
          <meshStandardMaterial color="#D4A017" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Lamp Oil Bowl */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.38, 0.2, 0.15, 24]} />
          <meshStandardMaterial color="#F5D061" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Flickering Flame */}
        <mesh position={[0, 0.42, 0]}>
          <coneGeometry args={[0.1, 0.32, 16]} />
          <meshBasicMaterial color="#FF9900" />
        </mesh>
        <mesh position={[0, 0.44, 0]}>
          <coneGeometry args={[0.06, 0.22, 16]} />
          <meshBasicMaterial color="#FFFFDD" />
        </mesh>
        {/* Point light casting warm lamp glow on the card inside */}
        <pointLight position={[0, 0.5, 0.3]} intensity={2.5} color="#FFB84D" distance={4} />
      </group>

      {/* LEFT DOOR (Hinged at left edge x = -1.9) */}
      <group position={[-1.9, 0, 0.04]} ref={leftDoorRef}>
        <mesh position={[0.95, 0, 0]}>
          <boxGeometry args={[1.9, 5.2, 0.05]} />
          <meshStandardMaterial
            map={leftTexture}
            roughness={0.35}
            metalness={0.25}
          />
        </mesh>
        {/* Golden Door Bevel Rim */}
        <mesh position={[1.88, 0, 0.025]}>
          <boxGeometry args={[0.04, 5.2, 0.02]} />
          <meshStandardMaterial color="#F5D061" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      {/* RIGHT DOOR (Hinged at right edge x = 1.9) */}
      <group position={[1.9, 0, 0.04]} ref={rightDoorRef}>
        <mesh position={[-0.95, 0, 0]}>
          <boxGeometry args={[1.9, 5.2, 0.05]} />
          <meshStandardMaterial
            map={rightTexture}
            roughness={0.35}
            metalness={0.25}
          />
        </mesh>
        {/* Golden Door Bevel Rim */}
        <mesh position={[-1.88, 0, 0.025]}>
          <boxGeometry args={[0.04, 5.2, 0.02]} />
          <meshStandardMaterial color="#F5D061" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      {/* MANJAL (TURMERIC) THREAD AND MANGO LEAF SPRIG */}
      <group ref={threadRef} position={[0, 0, 0.1]}>
        {/* Horizontal ribbon / yellow thread wrapped across the card */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.84, 0.16, 0.04]} />
          <meshStandardMaterial color="#E5A93C" roughness={0.6} />
        </mesh>

        {/* Auspicious Center Knot */}
        <mesh position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#F4B942" roughness={0.5} />
        </mesh>

        {/* Mango Leaf Sprig tucked into thread */}
        <group position={[0.15, 0.1, 0.08]} rotation={[0, 0, -0.4]}>
          {/* Leaf 1 */}
          <mesh position={[0, 0.22, 0]} rotation={[0, 0, 0.2]}>
            <coneGeometry args={[0.12, 0.45, 12]} />
            <meshStandardMaterial color="#2E6F40" roughness={0.5} />
          </mesh>
          {/* Leaf 2 */}
          <mesh position={[-0.15, 0.18, 0]} rotation={[0, 0, -0.4]}>
            <coneGeometry args={[0.1, 0.38, 12]} />
            <meshStandardMaterial color="#3D8B55" roughness={0.5} />
          </mesh>
        </group>

        {/* Auspicious Turmeric / Kumkum dots on knot */}
        <mesh position={[0.05, 0.04, 0.18]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#DC2626" />
        </mesh>
      </group>

      {/* GOLD SPARKLES (Burst when opened) */}
      <group ref={sparkGroupRef} visible={isOpen}>
        {sparkles.map((s, idx) => (
          <mesh key={idx} position={[s.x, s.y, s.z]}>
            <octahedronGeometry args={[s.size, 0]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#F5D061' : '#FFFFFF'} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

