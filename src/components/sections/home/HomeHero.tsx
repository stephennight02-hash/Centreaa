"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logoImg from "@/assets/logos/E6215F89-405C-4D35-9FD6-AE6C7139D521.jpg";

/**
 * Hero "Maquette Premium"
 * Layout : TOUT en horizontal. Rien ne doit s'empiler verticalement mot par mot.
 */
export function HomeHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Grille de fond */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: `4rem 4rem`,
      }} />

      {/* Lueur colorée subtile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 mx-auto px-6 md:px-8 pt-28 pb-16">
        
        {/* Badge + Logo en haut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-foreground/10">
            <Image src={logoImg} alt="Logo Centreaa" fill className="object-cover" />
          </div>
          <span className="text-xs md:text-sm font-medium text-primary tracking-[0.2em] uppercase">
            Médecine & Sport
          </span>
        </motion.div>

        {/* Typographie Géante — HORIZONTALE */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="w-full mb-16 md:mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-6xl sm:text-7xl md:text-[100px] lg:text-[140px] xl:text-[160px] font-bold tracking-tighter leading-[0.85] text-foreground uppercase w-full"
          >
            SANTÉ
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-6xl sm:text-7xl md:text-[100px] lg:text-[140px] xl:text-[160px] font-bold tracking-tighter leading-[0.85] text-foreground/25 italic uppercase w-full"
          >
            ABSOLUE.
          </motion.h1>
        </motion.div>

        {/* Zone basse — Layout HORIZONTAL : texte à gauche, badge à droite */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 w-full border-t border-foreground/10 pt-8"
        >
          {/* Description — HORIZONTALE ET AGRANDIE */}
          <div className="w-full flex flex-col gap-8 md:pr-12">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight text-foreground/80 font-medium">
              L'excellence d'un accompagnement pluridisciplinaire, pensé pour votre équilibre global et vos performances sportives.
            </p>
            <Link 
              href="/prise-de-rendez-vous"
              className="group flex items-center gap-4 text-base font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors w-fit mt-4"
            >
              Découvrir
              <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-foreground/20 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Badge Rotatif — à droite */}
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0">
            <motion.div style={{ rotate }} className="absolute inset-0 origin-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-foreground/30 fill-current">
                <path id="heroCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[10px] uppercase tracking-[0.35em] font-medium">
                  <textPath href="#heroCirclePath">Centreaa • Excellence Médicale •</textPath>
                </text>
              </svg>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center text-primary">
              <Activity className="w-6 h-6 md:w-8 md:h-8 opacity-70" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
