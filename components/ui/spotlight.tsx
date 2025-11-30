"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export const Spotlight = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity,
        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${
          theme === "dark"
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0,0,0,0.05)"
        }, transparent 40%)`,
      }}
    />
  );
};
