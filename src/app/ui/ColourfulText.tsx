"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);
  const [globalTrigger, setGlobalTrigger] = useState(0);

  const triggerAnimation = (index?: number) => {
    if (typeof index === "number") {
      setAnimatedIndexes([index]);
    } else {
      setGlobalTrigger((prev) => prev + 1);
      setAnimatedIndexes(Array.from({ length: text.length }, (_, i) => i));
    }
  };

  // ✅ Lancer l'animation de tous les caractères lors du chargement
  useEffect(() => {
    triggerAnimation();
  }, [text]);

  return (
    <div onMouseEnter={() => triggerAnimation()} className="inline-block">
      {text.split("").map((char, index) => {
        const shouldAnimate = animatedIndexes.includes(index);

        return (
          <motion.span
            key={`${char}-${globalTrigger}-${index}`}
            onClick={() => triggerAnimation(index)}
            initial={{ y: 0 }}
            animate={
              shouldAnimate
                ? {
                    y: [0, -3, 0],
                    scale: [1, 1.05, 1],
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                    opacity: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 0.4,
              delay: index * 0.03,
            }}
            className="inline-block cursor-pointer whitespace-pre font-sans tracking-tight"
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
