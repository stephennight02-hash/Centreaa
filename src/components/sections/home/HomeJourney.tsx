"use client";

import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Premier contact",
    description: "Écoute attentive de vos besoins, évaluation de votre situation et orientation vers le spécialiste le plus adapté de notre équipe.",
  },
  {
    number: "02",
    title: "Bilan initial",
    description: "Consultation approfondie pour établir un diagnostic précis et définir avec vous des objectifs clairs et atteignables.",
  },
  {
    number: "03",
    title: "Plan sur-mesure",
    description: "Mise en place d'un protocole de soin personnalisé, pouvant inclure plusieurs disciplines pour des résultats optimaux.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description: "Suivi régulier, ajustement des séances et réévaluation constante pour vous accompagner jusqu'à la réussite de vos objectifs.",
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

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/**
 * Section "Le parcours d'accompagnement"
 * Design éditorial ultra fluide, sans boîtes fermées.
 */
export function HomeJourney() {
  return (
    <Section id="parcours" className="w-full py-16 md:py-32 bg-background border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start w-full mb-12 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
          >
            Le parcours
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-4xl leading-tight"
          >
            Un accompagnement structuré, de A à Z.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              variants={itemVariants}
              className="group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-8 md:py-12 border-b border-foreground/10 last:border-0 hover:border-foreground/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-6xl font-light text-foreground/20 group-hover:text-primary transition-colors">
                  {step.number}
                </span>
              </div>
              
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:gap-12 w-full pt-2">
                <h3 className="text-2xl md:text-4xl font-medium mb-4 md:mb-0 w-full md:w-1/3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/60 leading-relaxed w-full md:w-2/3 group-hover:text-foreground/80 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
