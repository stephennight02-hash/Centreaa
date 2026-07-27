"use client";

import { useState, useEffect, useCallback } from "react";

interface UseLockScrollReturn {
  lockScroll: () => void;
  unlockScroll: () => void;
  isLocked: boolean;
}

/**
 * Hook pour verrouiller/déverrouiller le scroll du body.
 * Utilisé principalement par le drawer mobile.
 * Préserve la position courante pour éviter le "jump" sur les navigateurs mobiles.
 */
export function useLockScroll(): UseLockScrollReturn {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
    setIsLocked(true);
  }, []);

  const unlockScroll = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setIsLocked(false);
  }, []);

  // Cleanup au démontage
  useEffect(() => {
    return () => {
      if (isLocked) unlockScroll();
    };
  }, [isLocked, unlockScroll]);

  return { lockScroll, unlockScroll, isLocked };
}
