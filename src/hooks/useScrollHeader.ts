"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { HeaderScrollState } from "@/types/layout";

interface UseScrollHeaderOptions {
  /** Pixels à partir desquels le header devient scrolled. Défaut : 20 */
  scrollThreshold?: number;
  /** Pixels de scroll vers le bas pour masquer le header. Défaut : 150 */
  hideThreshold?: number;
}

interface UseScrollHeaderReturn {
  scrollState: HeaderScrollState;
  scrollY: number;
}

/**
 * Hook gérant les états du header selon le comportement de scroll.
 *
 * Logique :
 * - < scrollThreshold   → "initial" (transparent)
 * - >= scrollThreshold  → "scrolled" (glassmorphism)
 * - scroll vers le bas prolongé au-delà de hideThreshold → "hidden"
 * - scroll vers le haut → "scrolled" (réapparition naturelle)
 */
export function useScrollHeader({
  scrollThreshold = 20,
  hideThreshold = 150,
}: UseScrollHeaderOptions = {}): UseScrollHeaderReturn {
  const [scrollState, setScrollState] = useState<HeaderScrollState>("initial");
  const [scrollY, setScrollY] = useState(0);

  const lastScrollY = useRef(0);
  const accumulatedDown = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        setScrollY(currentScrollY);

        if (currentScrollY < scrollThreshold) {
          setScrollState("initial");
          accumulatedDown.current = 0;
        } else if (delta > 0) {
          // Scroll vers le bas
          accumulatedDown.current += delta;
          if (accumulatedDown.current > hideThreshold) {
            setScrollState("hidden");
          } else {
            setScrollState("scrolled");
          }
        } else {
          // Scroll vers le haut
          accumulatedDown.current = 0;
          setScrollState("scrolled");
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [scrollThreshold, hideThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollState, scrollY };
}
