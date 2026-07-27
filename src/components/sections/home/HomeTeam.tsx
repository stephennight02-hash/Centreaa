"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const teamPlaceholders = [
  {
    id: "thomas",
    role: "Fondateur & Ostéopathe",
    brief: "Photo : Portrait professionnel de Thomas, souriant, dans le centre (environnemental).",
  },
  {
    id: "kine-1",
    role: "Kinésithérapeute du sport",
    brief: "Photo : Portrait professionnel d'un membre de l'équipe (fond harmonisé).",
  },
  {
    id: "nutritionniste",
    role: "Nutritionniste",
    brief: "Photo : Portrait professionnel d'un membre de l'équipe (fond harmonisé).",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/**
 * Section "L'équipe"
 * Design éditorial ultra épuré, photos brutes et textes flottants.
 */
export function HomeTeam() {
  return (
    <Section id="equipe" className="w-full py-0 md:py-16 bg-background border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-24">
          <div className="w-full mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
            >
              Les Spécialistes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight mb-8"
            >
              Une équipe unie par l'exigence.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight text-foreground/80 font-medium w-full"
            >
              Sous l'impulsion de Thomas, fondateur du centre, nos praticiens partagent la même philosophie : allier expertise technique et accompagnement humain.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-end pb-8"
          >
            <Link 
              href="/equipe" 
              className="inline-flex items-center text-sm md:text-base font-semibold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors group"
            >
              Découvrir l'équipe
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mb-12"
        >
          {teamPlaceholders.map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-foreground/5">
                <MediaPlaceholder 
                  type="image"
                  brief={member.brief}
                  format="Portrait (3:4)"
                  className="h-full w-full border-none transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                  [Nom du Praticien]
                </h3>
                <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-start md:hidden mt-12"
        >
          <Link 
            href="/equipe" 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            Découvrir toute l'équipe
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
