"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

/**
 * Section "L'Environnement"
 * Met en valeur l'architecture du bâtiment (voûtes / modernité).
 * Design fluide avec une grande image et du texte épuré.
 */
export function HomeEnvironment() {
  return (
    <Section id="environnement" className="w-full py-4 md:py-12 bg-background border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Titre pleine largeur */}
        <div className="flex flex-col items-start w-full mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
          >
            Le lieu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-4xl leading-tight"
          >
            Où l'histoire rencontre la modernité.
          </motion.p>
        </div>

        {/* Grande image pleine largeur */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-foreground/5 mb-8 md:mb-12"
        >
          <MediaPlaceholder 
            type="image" 
            brief="Photo : Large vue intérieure mettant en valeur les voûtes historiques et la lumière naturelle."
            format="Panoramique (21:9)"
            className="h-full w-full border-none opacity-80"
          />
        </motion.div>

        {/* Texte descriptif en deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-foreground/60 leading-relaxed"
          >
            Installé au cœur d'une ancienne fonderie, Centreaa a su préserver l'âme industrielle du lieu tout en y insufflant une modernité élégante.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-foreground/60 leading-relaxed"
          >
            Les voûtes historiques en briques contrastent avec des équipements de pointe, créant une atmosphère rassurante et stimulante, pensée pour favoriser votre récupération et vos performances.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
