"use client";

import React, { useEffect, useRef } from "react";

export function HeroCrystal3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angleY = 0;
    let angleX = 0.2;
    let targetTiltX = 0;
    let targetTiltY = 0;

    // Responsive Canvas dimensions
    const width = 280;
    const height = 280;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse move tracking for 3D tilt
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetTiltY = ((e.clientX - cx) / window.innerWidth) * 0.8;
      targetTiltX = ((e.clientY - cy) / window.innerHeight) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Inner Octahedron Vertices (Obsidian Crystal)
    const baseVertices: [number, number, number][] = [
      [0, 1.25, 0], // Top
      [0, -1.25, 0], // Bottom
      [0.85, 0, 0], // Right
      [0, 0, 0.85], // Front
      [-0.85, 0, 0], // Left
      [0, 0, -0.85], // Back
    ];

    // Faces: (v0, v1, v2)
    const faces: [number, number, number][] = [
      // Top pyramid
      [0, 2, 3],
      [0, 3, 4],
      [0, 4, 5],
      [0, 5, 2],
      // Bottom pyramid
      [1, 3, 2],
      [1, 4, 3],
      [1, 5, 4],
      [1, 2, 5],
    ];

    // Orbiting particles (3D Embers)
    const particles = Array.from({ length: 18 }, (_, i) => ({
      radius: 1.4 + (i % 4) * 0.25,
      speed: 0.012 + (i % 3) * 0.006,
      angle: (i * Math.PI * 2) / 18,
      y: (Math.sin(i * 1.5) * 0.8),
      size: 1.5 + (i % 3),
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp to mouse tilt
      angleX += (0.2 + targetTiltX - angleX) * 0.05;
      angleY += 0.015 + (targetTiltY * 0.02);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 3D rotation and projection
      const transform = (p: [number, number, number]): [number, number, number] => {
        // Rotate Y
        let x = p[0] * cosY + p[2] * sinY;
        let y = p[1];
        let z = -p[0] * sinY + p[2] * cosY;

        // Rotate X
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;

        // Perspective Project
        const fov = 160;
        const dist = z2 + 3.8;
        const projScale = fov / dist;

        return [width / 2 + x * projScale, height / 2 + y2 * projScale, z2];
      };

      // Draw Orbiting 3D Stardust Embers (Back layer)
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = Math.cos(p.angle) * p.radius;
        const pz = Math.sin(p.angle) * p.radius;
        const pt = transform([px, p.y, pz]);

        if (pt[2] < 0) {
          ctx.beginPath();
          ctx.arc(pt[0], pt[1], p.size * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
          ctx.fill();
        }
      });

      // Core Ambient Pulsing Glow
      const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.15;
      const coreGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        5,
        width / 2,
        height / 2,
        55 * pulse
      );
      coreGrad.addColorStop(0, "rgba(216, 180, 254, 0.85)");
      coreGrad.addColorStop(0.3, "rgba(168, 85, 247, 0.5)");
      coreGrad.addColorStop(1, "rgba(147, 51, 234, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 55 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // Transform all vertices
      const transformedVerts = baseVertices.map((v) => transform(v));

      // Sort faces by average depth for painter's algorithm
      const sortedFaces = faces
        .map((f) => {
          const v0 = transformedVerts[f[0]];
          const v1 = transformedVerts[f[1]];
          const v2 = transformedVerts[f[2]];
          const depth = (v0[2] + v1[2] + v2[2]) / 3;

          // Cross product for normal orientation
          const normalZ =
            (v1[0] - v0[0]) * (v2[1] - v0[1]) - (v1[1] - v0[1]) * (v2[0] - v0[0]);

          return { face: f, depth, normalZ, v0, v1, v2 };
        })
        .filter((item) => item.normalZ > 0) // Back-face culling
        .sort((a, b) => b.depth - a.depth);

      // Render Obsidian Faces with Glass Specular
      sortedFaces.forEach(({ v0, v1, v2 }) => {
        ctx.beginPath();
        ctx.moveTo(v0[0], v0[1]);
        ctx.lineTo(v1[0], v1[1]);
        ctx.lineTo(v2[0], v2[1]);
        ctx.closePath();

        // Shaded Onyx / Obsidian glass fill
        const faceGrad = ctx.createLinearGradient(v0[0], v0[1], v1[0], v2[1]);
        faceGrad.addColorStop(0, "rgba(30, 15, 50, 0.82)");
        faceGrad.addColorStop(0.5, "rgba(60, 25, 95, 0.72)");
        faceGrad.addColorStop(1, "rgba(18, 10, 30, 0.88)");

        ctx.fillStyle = faceGrad;
        ctx.fill();

        // Luminous Obsidian Edges
        ctx.strokeStyle = "rgba(192, 132, 252, 0.8)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // Orbiting 3D Stardust Embers (Front layer)
      particles.forEach((p) => {
        const px = Math.cos(p.angle) * p.radius;
        const pz = Math.sin(p.angle) * p.radius;
        const pt = transform([px, p.y, pz]);

        if (pt[2] >= 0) {
          ctx.beginPath();
          ctx.arc(pt[0], pt[1], p.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(233, 213, 255, 0.85)";
          ctx.shadowColor = "#A855F7";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]"
      />
    </div>
  );
}
