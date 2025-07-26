"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/app/ui/canvas-reveal-effect";
import { cn } from "@/app/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color, // sera déterminé par le thème si non fourni
  theme = "dark",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  theme?: "light" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Couleurs adaptées selon le thème
  const getCanvasColors = () => {
    if (theme === "light") {
      return [
        [237, 184, 62],   // Marron chocolat #8B4513 - contraste bien avec #fbf8f3
        [160, 82, 45],   // Saddle brown #A0522D - ton chaud complémentaire
        [101, 67, 33],   // Marron foncé #654321 - profondeur
      ];
    }
    return [
      [237, 184, 62],  // doré #edb83e
      [58, 63, 58],    // violet
    ];
  };

const getSpotlightColor = () => {
  if (color) return color;
  return theme === "light"
    ? "rgba(255, 255, 255, 0.4)" // blanc translucide
    : "rgba(227, 189, 107, 0.15)"; // doré pour le dark
};


  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border transition-all duration-300",
        theme === "light" 
          ? "bg-[#fbf8f3] border-gray-300 shadow-[rgba(68,67,67,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset]"
          : "bg-[#252320] border-neutral-400 shadow-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: getSpotlightColor(),
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={getCanvasColors()}
            dotSize={3}
          />
        )}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};