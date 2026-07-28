"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMaquette, type MaquetteVariant } from "./MaquetteProvider";
import { Moon, Play, Sun } from "lucide-react";

const labels: Record<MaquetteVariant, { label: string; icon: typeof Moon }> = {
  noir: { label: "Sombre", icon: Moon },
  video: { label: "Vidéo", icon: Play },
  clair: { label: "Clair", icon: Sun },
};

export function MaquetteSwitcher() {
  const { variant, cycleVariant } = useMaquette();
  const current = labels[variant];
  const Icon = current.icon;

  return (
    <motion.button
      onClick={cycleVariant}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-3 rounded-full border border-foreground/20 bg-background/90 backdrop-blur-xl shadow-2xl text-foreground cursor-pointer transition-colors hover:border-primary"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3"
        >
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase">
            {current.label}
          </span>
        </motion.div>
      </AnimatePresence>
      <div className="w-px h-4 bg-foreground/20" />
      <span className="text-[10px] text-foreground/40 tracking-wider uppercase">Maquette</span>
    </motion.button>
  );
}
