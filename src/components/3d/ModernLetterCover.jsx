import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural texture for the Envelope Body & Flap with Gold Zari Border
 */
function createEnvelopeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');

  // Rich Royal Kumkum Maroon Silk
  const grad = ctx.createLinearGradient(0, 0, 1024, 680);
  grad.addColorStop(0, '#7A1320');
  grad.addColorStop(0.5, '#5E0D17');
  grad.addColorStop(1, '#42060E');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 680);

  // Outer Gold Zari Border
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 18;
  ctx.strokeRect(18, 18, 988, 644);

  // Inner Fine Gold Line
  ctx.strokeStyle = '#F5D061';
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 36, 952, 608);

  // Corner Kolam Flourishes
  ctx.fillStyle = '#F5D061';
  const corners = [
    [48, 48], [976, 48], [48, 632], [976, 632]
  ];
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  // Diagonal envelope fold lines (embossed seams)
  ctx.strokeStyle = 'rgba(212, 160, 23, 0.45)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(36, 36);
  ctx.lineTo(512, 340);
  ctx.lineTo(988, 36);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(36, 644);
  ctx.lineTo(512, 340);
  ctx.lineTo(988, 644);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Procedural texture for the Heart Wax Seal with Groom & Bride Initials
 */
function createHeartSealTexture(groomInitial = 'K', brideInitial = 'Y') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Transparent clear background
  ctx.clearRect(0, 0, 512, 512);

  // Heart Path
  const drawHeart = (ox, oy, scale) => {
    ctx.beginPath();
    ctx.moveTo(ox, oy + 70 * scale);
    ctx.bezierCurveTo(ox, oy + 30 * scale, ox - 140 * scale, oy - 80 * scale, ox - 140 * scale, oy - 140 * scale);
    ctx.bezierCurveTo(ox - 140 * scale, oy - 220 * scale, ox - 40 * scale, oy - 240 * scale, ox, oy - 150 * scale);
    ctx.bezierCurveTo(ox + 40 * scale, oy - 240 * scale, ox + 140 * scale, oy - 220 * scale, ox + 140 * scale, oy - 140 * scale);
    ctx.bezierCurveTo(ox + 140 * scale, oy - 80 * scale, ox, oy + 30 * scale, ox, oy + 70 * scale);
    ctx.closePath();
  };

  // Outer Gold Glow / Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(212, 160, 23, 0.8)';
  ctx.shadowBlur = 24;
  drawHeart(256, 260, 1.15);
  ctx.fillStyle = '#D4A017';
  ctx.fill();
  ctx.restore();

  // Inner Rich Kumkum Maroon / Crimson Heart Wax
  drawHeart(256, 260, 1.05);
  const heartGrad = ctx.createRadialGradient(256, 220, 20, 256, 260, 220);
  heartGrad.addColorStop(0, '#9E1C2E');
  heartGrad.addColorStop(0.6, '#6B0F1A');
  heartGrad.addColorStop(1, '#42060E');
  ctx.fillStyle = heartGrad;
  ctx.fill();

  // Gold Bevel Edge
  ctx.strokeStyle = '#F5D061';
  ctx.lineWidth = 8;
  ctx.stroke();

  // Inner Beaded Gold Accent
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 6]);
  drawHeart(256, 260, 0.92);
  ctx.stroke();
  ctx.setLineDash([]);

  // Groom & Bride 1st letters inside heart!
  ctx.fillStyle = '#FFFDF7';
  ctx.font = 'bold 110px "Cormorant Garamond", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 10;

  const initialsText = `${groomInitial} ♥ ${brideInitial}`;
  ctx.fillText(initialsText, 256, 205);

  // Sacred Pillaiyar Suzhi 'உ' above initials inside heart
  ctx.fillStyle = '#F5D061';
  ctx.font = 'bold 36px "Noto Serif Tamil", serif';
  ctx.fillText('உ', 256, 125);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Procedural texture for the Inner Letter Card sliding out of envelope
 */
function createLetterCardTexture(groomName, brideName) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext('2d');

  // Ivory & Champagne parchment
  const bgGrad = ctx.createLinearGradient(0, 0, 1024, 700);
  bgGrad.addColorStop(0, '#FFFDF7');
  bgGrad.addColorStop(0.5, '#FBF5E8');
  bgGrad.addColorStop(1, '#F7EDD6');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 700);

  // Outer Gold Zari Frame
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, 984, 660);

  ctx.strokeStyle = '#8C650B';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(34, 34, 956, 632);

  // Pillaiyar Suzhi 'உ'
  ctx.fillStyle = '#6B0F1A';
  ctx.font = 'bold 64px "Noto Serif Tamil", serif';
  ctx.textAlign = 'center';
  ctx.fillText('உ', 512, 110);

  // Auspicious Header
  ctx.font = 'bold 28px "Noto Serif Tamil", serif';
  ctx.fillStyle = '#8C650B';
  ctx.fillText('சுப முகூர்த்தத் திருமண அழைப்பிதழ்', 512, 160);

  // Traditional Greeting
  ctx.font = '22px "Mukta Malar", sans-serif';
  ctx.fillStyle = '#5A0B15';
  ctx.fillText('அன்புடையீர் வணக்கம் • Traditional Wedding Invitation', 512, 205);

  // Divider line
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(250, 225);
  ctx.lineTo(774, 225);
  ctx.stroke();

  // Couple Names
  ctx.font = 'bold 56px "Noto Serif Tamil", serif';
  ctx.fillStyle = '#6B0F1A';
  ctx.fillText(brideName || 'யோகேஷ் குமார்', 512, 320);

  ctx.font = 'italic 34px "Cormorant Garamond", serif';
  ctx.fillStyle = '#AA7C11';
  ctx.fillText('weds', 512, 385);

  ctx.font = 'bold 56px "Noto Serif Tamil", serif';
  ctx.fillStyle = '#6B0F1A';
  ctx.fillText(groomName || 'கமலி', 512, 470);

  // Blessing Footer
  ctx.font = 'bold 26px "Noto Serif Tamil", serif';
  ctx.fillStyle = '#D4A017';
  ctx.fillText('வாழ்க வளமுடன்! தங்களின் வருகையே எங்களின் பெரும் பாக்கியம்.', 512, 570);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function ModernLetterCover({ isOpen, mousePos = { x: 0, y: 0 }, config }) {
  const envelopeGroupRef = useRef();
  const flapGroupRef = useRef();
  const innerLetterRef = useRef();
  const sparkGroupRef = useRef();

  // Extract groom and bride first letters
  const groomNameEn = config?.couple?.groom?.name?.en || 'Yogeshkumar';
  const brideNameEn = config?.couple?.bride?.name?.en || 'Kamali';
  const groomInitial = groomNameEn.trim()[0] || 'Y';
  const brideInitial = brideNameEn.trim()[0] || 'K';

  const groomNameTa = config?.couple?.groom?.name?.ta || 'யோகேஷ்குமார்';
  const brideNameTa = config?.couple?.bride?.name?.ta || 'கமலி';

  // Textures
  const envelopeTexture = useMemo(() => createEnvelopeTexture(), []);
  const heartSealTexture = useMemo(() => createHeartSealTexture(groomInitial, brideInitial), [groomInitial, brideInitial]);
  const letterTexture = useMemo(() => createLetterCardTexture(groomNameTa, brideNameTa), [groomNameTa, brideNameTa]);

  // Sparkles on open
  const sparkleCount = 40;
  const sparkles = useMemo(() => {
    return Array.from({ length: sparkleCount }).map(() => ({
      x: (Math.random() - 0.5) * 4.5,
      y: (Math.random() - 0.5) * 3.5,
      z: Math.random() * 2 + 0.5,
      size: 0.04 + Math.random() * 0.05,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!envelopeGroupRef.current) return;

    // Gentle 3D floating and mouse parallax tilt
    const targetRotX = (mousePos.y * 0.22) + Math.sin(state.clock.elapsedTime * 1.6) * 0.035;
    const targetRotY = (mousePos.x * 0.3) + Math.cos(state.clock.elapsedTime * 1.3) * 0.035;

    envelopeGroupRef.current.rotation.x = THREE.MathUtils.lerp(envelopeGroupRef.current.rotation.x, targetRotX, 0.08);
    envelopeGroupRef.current.rotation.y = THREE.MathUtils.lerp(envelopeGroupRef.current.rotation.y, targetRotY, 0.08);

    // 1. Envelope Flap Hinged Opening Animation
    if (flapGroupRef.current) {
      // Unfolds upwards around top hinge
      const targetFlapAngle = isOpen ? -Math.PI * 0.95 : 0;
      flapGroupRef.current.rotation.x = THREE.MathUtils.lerp(flapGroupRef.current.rotation.x, targetFlapAngle, delta * 3.8);
    }

    // 2. Inner Letter Sliding Outwards
    if (innerLetterRef.current) {
      const targetY = isOpen ? 1.65 : 0;
      const targetZ = isOpen ? 0.35 : 0;
      innerLetterRef.current.position.y = THREE.MathUtils.lerp(innerLetterRef.current.position.y, targetY, delta * 2.8);
      innerLetterRef.current.position.z = THREE.MathUtils.lerp(innerLetterRef.current.position.z, targetZ, delta * 2.8);
    }

    // 3. Sparkles float when opened
    if (sparkGroupRef.current && isOpen) {
      sparkGroupRef.current.children.forEach((spark, idx) => {
        spark.position.y += Math.sin(state.clock.elapsedTime * 3 + idx) * 0.012 + 0.008;
        spark.rotation.z += 0.02;
        spark.scale.setScalar(0.7 + Math.sin(state.clock.elapsedTime * 5 + idx) * 0.3);
      });
    }
  });

  return (
    <group ref={envelopeGroupRef} position={[0, 0, 0]}>
      {/* 1. ENVELOPE BACK POCKET (Maroon Silk with Gold Bevel) */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[5.2, 3.6, 0.08]} />
        <meshStandardMaterial
          map={envelopeTexture}
          roughness={0.4}
          metalness={0.25}
        />
      </mesh>

      {/* Gold Trim along Back Outer Edges */}
      <mesh position={[0, 0, -0.07]}>
        <boxGeometry args={[5.26, 3.66, 0.06]} />
        <meshStandardMaterial color="#D4A017" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 2. INNER INVITATION LETTER (Slides up when envelope opens!) */}
      <group ref={innerLetterRef} position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4.85, 3.25, 0.04]} />
          <meshStandardMaterial
            map={letterTexture}
            roughness={0.35}
            metalness={0.15}
          />
        </mesh>
        {/* Fine Gold Edge on Letter */}
        <mesh position={[0, 0, -0.005]}>
          <boxGeometry args={[4.9, 3.3, 0.035]} />
          <meshStandardMaterial color="#F5D061" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      {/* 3. ENVELOPE FRONT POCKET (Lower half cover that holds the letter inside) */}
      <mesh position={[0, -0.4, 0.08]}>
        <boxGeometry args={[5.2, 2.8, 0.05]} />
        <meshStandardMaterial
          map={envelopeTexture}
          roughness={0.4}
          metalness={0.25}
        />
      </mesh>
      {/* Front Gold Rim */}
      <mesh position={[0, 0.98, 0.09]}>
        <boxGeometry args={[5.2, 0.05, 0.04]} />
        <meshStandardMaterial color="#F5D061" metalness={0.92} roughness={0.18} />
      </mesh>

      {/* 4. ENVELOPE TOP FLAP (Hinged at the top edge y = 1.8) */}
      <group position={[0, 1.8, 0.1]} ref={flapGroupRef}>
        {/* Triangular / Angled Envelope Flap */}
        <mesh position={[0, -0.9, 0]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[2.6, 1.8, 4]} />
          <meshStandardMaterial
            map={envelopeTexture}
            roughness={0.4}
            metalness={0.25}
          />
        </mesh>

        {/* Gold Border on the V-Flap */}
        <mesh position={[0, -0.9, 0.02]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[2.62, 1.82, 4]} />
          <meshStandardMaterial color="#D4A017" metalness={0.88} roughness={0.22} wireframe={false} />
        </mesh>

        {/* 💖 IN THE MIDDLE: HEART SHAPE WITH 1ST LETTERS OF GROOM & BRIDE! */}
        <group position={[0, -1.75, 0.12]}>
          <mesh>
            <planeGeometry args={[1.65, 1.65]} />
            <meshStandardMaterial
              map={heartSealTexture}
              transparent={true}
              roughness={0.25}
              metalness={0.65}
              alphaTest={0.05}
            />
          </mesh>
          {/* Subtle gold back plate for depth */}
          <mesh position={[0, -0.05, -0.02]}>
            <circleGeometry args={[0.7, 32]} />
            <meshStandardMaterial color="#D4A017" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* 5. CELEBRATORY GOLD SPARKLES (Burst when opened) */}
      <group ref={sparkGroupRef} visible={isOpen}>
        {sparkles.map((s, idx) => (
          <mesh key={idx} position={[s.x, s.y + 0.8, s.z]}>
            <octahedronGeometry args={[s.size, 0]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#F5D061' : '#FFFFFF'} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

