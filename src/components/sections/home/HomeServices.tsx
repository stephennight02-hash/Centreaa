"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

/**
 * Section "Les Prestations"
 * Design horizontal brutaliste avec défilement (Marquee).
 */
export function HomeServices() {
  const topText = "Kinésithérapie • Nutrition • Madérothérapie • Ostéopathie • Cryothérapie • ";
  const bottomText = "Rééducation • Performance • Bien-être • Récupération • Prévention • ";

  return (
    <Section id="prestations" className="w-full py-16 md:py-32 bg-background border-t border-foreground/10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary"
        >
          Nos expertises
        </motion.h2>
      </div>

      <div className="relative w-full flex flex-col gap-4 overflow-hidden py-10 rotate-[-1deg] scale-105">
        
        {/* Ligne 1 : Défile vers la gauche */}
        <div className="flex w-max animate-marquee-left">
          <div className="flex whitespace-nowrap">
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground uppercase px-4">
              {topText}
            </span>
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground uppercase px-4" aria-hidden="true">
              {topText}
            </span>
          </div>
          <div className="flex whitespace-nowrap" aria-hidden="true">
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground uppercase px-4">
              {topText}
            </span>
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground uppercase px-4" aria-hidden="true">
              {topText}
            </span>
          </div>
        </div>
        
        {/* Ligne 2 : Défile vers la droite */}
        <div className="flex w-max animate-marquee-right">
          <div className="flex whitespace-nowrap">
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground/10 uppercase px-4">
              {bottomText}
            </span>
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground/10 uppercase px-4" aria-hidden="true">
              {bottomText}
            </span>
          </div>
          <div className="flex whitespace-nowrap" aria-hidden="true">
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground/10 uppercase px-4">
              {bottomText}
            </span>
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground/10 uppercase px-4" aria-hidden="true">
              {bottomText}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
