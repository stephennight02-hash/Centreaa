"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type MaquetteVariant = "noir" | "video" | "clair";

interface MaquetteContextType {
  variant: MaquetteVariant;
  setVariant: (v: MaquetteVariant) => void;
  cycleVariant: () => void;
}

const MaquetteContext = createContext<MaquetteContextType | null>(null);

const variants: MaquetteVariant[] = ["noir", "video", "clair"];

export function MaquetteProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<MaquetteVariant>("noir");

  // Appliquer le data-attribute sur la balise html pour que les variables CSS globales s'appliquent correctement
  useEffect(() => {
    document.documentElement.setAttribute("data-maquette", variant);
  }, [variant]);

  const cycleVariant = useCallback(() => {
    setVariant((prev) => {
      const idx = variants.indexOf(prev);
      return variants[(idx + 1) % variants.length];
    });
  }, []);

  return (
    <MaquetteContext.Provider value={{ variant, setVariant, cycleVariant }}>
      {children}
    </MaquetteContext.Provider>
  );
}

export function useMaquette() {
  const ctx = useContext(MaquetteContext);
  if (!ctx) throw new Error("useMaquette must be used within MaquetteProvider");
  return ctx;
}
