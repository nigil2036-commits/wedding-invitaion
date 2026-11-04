import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MonogramMedallion({ text = 'K & A' }) {
  const meshRef = useRef();

  // Create texture for the gold medallion with monogram text
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Golden metallic gradient circle
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
    grad.addColorStop(0, '#FFFDF7');
    grad.addColorStop(0.3, '#F5D061');
    grad.addColorStop(0.7, '#D4A017');
    grad.addColorStop(1, '#6B0F1A');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.fill();

    // Kolam beaded border
    ctx.strokeStyle = '#D4A017';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(256, 256, 220, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(256, 256, 205, 0, Math.PI * 2);
    ctx.stroke();

    // Monogram Couple Initials
    ctx.fillStyle = '#45060E';
    ctx.font = 'bold 120px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 250);

    // Auspicious 'உ' top symbol
    ctx.fillStyle = '#6B0F1A';
    ctx.font = 'bold 44px "Noto Serif Tamil", serif';
    ctx.fillText('உ', 256, 120);

    // Lotus motif bottom
    ctx.font = '28px serif';
    ctx.fillText('🪷', 256, 380);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [text]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Front Face */}
      <mesh>
        <cylinderGeometry args={[1.5, 1.5, 0.12, 48]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
      {/* Gold Rim Edge */}
      <mesh>
        <torusGeometry args={[1.51, 0.06, 16, 48]} />
        <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.15} />
      </mesh>
    </group>
  );
}

export function Monogram3D({ monogram = 'K & A' }) {
  return (
    <div className="w-36 h-36 mx-auto relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[3, 4, 3]} intensity={1.5} color="#FFFDF7" />
        <directionalLight position={[-3, -2, 2]} intensity={0.6} color="#F5D061" />
        <MonogramMedallion text={monogram} />
      </Canvas>
    </div>
  );
}

