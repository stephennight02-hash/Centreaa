"use client";

import { useState, useEffect } from "react";

/**
 * Hook de suivi de la progression de scroll (0 à 100).
 * Optimisé avec requestAnimationFrame pour une performance maximale.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(Math.min(Math.max(value, 0), 100));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
