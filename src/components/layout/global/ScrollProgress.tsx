"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ScrollProgressProps } from "@/types/layout";

/**
 * Barre de progression de scroll.
 *
 * – Très discrète : hauteur 2px par défaut, couleur primary.
 * – Animée avec un spring Framer Motion pour un rendu ultra-fluide.
 * – Respecte prefers-reduced-motion via Framer Motion.
 * – Positionnée au-dessus du header (z-50).
 */
export function ScrollProgress({
  height = 2,
  className,
}: ScrollProgressProps) {
  const progress = useScrollProgress();

  const springProgress = useSpring(progress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = useTransform(springProgress, [0, 100], [0, 1]);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture de la page"
      className={cn("fixed inset-x-0 top-0 z-50 origin-left", className)}
      style={{ height }}
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-full w-full bg-primary/70"
      />
    </div>
  );
}
