"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ArrowRight, RotateCw } from "lucide-react";
import Link from "next/link";

interface Specialist {
  name: string;
  specialty: string;
  description: string;
  link: string;
}

const specialists: Specialist[] = [
  {
    name: "[Nom du fondateur]",
    specialty: "Kinésithérapie",
    description: "[Description maquette : parcours, spécialités, approche thérapeutique et philosophie du praticien. Ce texte sera remplacé par le contenu final.]",
    link: "/prise-de-rendez-vous",
  },
  {
    name: "[Nom du spécialiste 2]",
    specialty: "Nutrition",
    description: "[Description maquette : parcours, spécialités, approche thérapeutique et philosophie du praticien. Ce texte sera remplacé par le contenu final.]",
    link: "/prise-de-rendez-vous",
  },
  {
    name: "[Nom du spécialiste 3]",
    specialty: "Madérothérapie",
    description: "[Description maquette : parcours, spécialités, approche thérapeutique et philosophie du praticien. Ce texte sera remplacé par le contenu final.]",
    link: "/prise-de-rendez-vous",
  },
  {
    name: "[Nom du spécialiste 4]",
    specialty: "[Spécialité]",
    description: "[Description maquette : parcours, spécialités, approche thérapeutique et philosophie du praticien. Ce texte sera remplacé par le contenu final.]",
    link: "/prise-de-rendez-vous",
  },
  {
    name: "[Nom du spécialiste 5]",
    specialty: "[Spécialité]",
    description: "[Description maquette : parcours, spécialités, approche thérapeutique et philosophie du praticien. Ce texte sera remplacé par le contenu final.]",
    link: "/prise-de-rendez-vous",
  },
];

function FlipCard({ specialist, index }: { specialist: Specialist; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full aspect-[3/4] cursor-pointer group"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FACE AVANT */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-foreground/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Zone photo (maquette) */}
          <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center">
            <div className="text-center text-foreground/20 px-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-dashed border-foreground/20 flex items-center justify-center">
                <span className="text-3xl">📷</span>
              </div>
              <p className="text-sm tracking-wide uppercase">[Photo du praticien]</p>
            </div>
          </div>

          {/* Infos en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              {specialist.specialty}
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
              {specialist.name}
            </h3>

            {/* Indicateur "retourner" sur mobile */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="mt-4 flex items-center gap-2 text-foreground/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
              <RotateCw className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase">Appuyez pour découvrir</span>
            </motion.div>
          </div>
        </div>

        {/* FACE ARRIÈRE */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-foreground/10 bg-foreground text-background p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {specialist.specialty}
            </p>
            <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-tight">
              {specialist.name}
            </h3>
            <div className="w-12 h-px bg-primary mb-6" />
            <p className="text-base md:text-lg leading-relaxed text-background/70 font-light">
              {specialist.description}
            </p>
          </div>

          <Link
            href={specialist.link}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest hover:scale-105 transition-transform w-fit group/link shadow-lg mt-6"
          >
            Prendre rendez-vous
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EquipePage() {
  return (
    <main className="w-full bg-background">
      
      {/* Hero */}
      <Section className="w-full pt-40 pb-8 md:pt-48 md:pb-16 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="text-sm font-semibold tracking-widest uppercase text-primary mb-8">
              Les Spécialistes
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight mb-6">
              [Titre de la page équipe]
            </p>
            <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-3xl">
              [Sous-titre maquette décrivant l'équipe pluridisciplinaire]
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Grille de Cards */}
      <Section className="w-full py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specialists.map((specialist, idx) => (
              <FlipCard key={idx} specialist={specialist} index={idx} />
            ))}
          </div>
        </div>
      </Section>


    </main>
  );
}
