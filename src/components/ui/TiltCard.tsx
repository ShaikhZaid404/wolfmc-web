"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  glowColor?: string;
  maxTilt?: number;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  accentColor = "#A855F7",
  glowColor,
  maxTilt = 6,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const effectiveGlow = glowColor || `${accentColor}25`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setSpotlightPos({ x, y });
      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
      );
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl overflow-hidden select-none ${className}`}
    >
      {/* 3D Cursor Spotlight Glare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl z-30 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${effectiveGlow}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
