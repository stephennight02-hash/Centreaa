"use client";

import { motion, Variants } from "framer-motion";
import { Section } from "@/components/layout/Section";

const features = [
  {
    number: "01",
    title: "Multidisciplinaire",
    description: "Une équipe d'experts communiquant ensemble pour vous offrir un parcours global.",
  },
  {
    number: "02",
    title: "Technologie",
    description: "Matériel de pointe et infrastructures modernes pour des diagnostics ultra-précis.",
  },
  {
    number: "03",
    title: "Bienveillance",
    description: "Au-delà de la technique, l'humain reste au cœur de notre accompagnement.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Section "Pourquoi Centrea"
 * Design horizontal brutaliste avec de grands nombres.
 */
export function HomeFeatures() {
  return (
    <Section id="pourquoi-centrea" className="w-full py-16 md:py-32 bg-background relative overflow-hidden border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start w-full mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
          >
            L'Approche
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground max-w-4xl leading-[1.1]"
          >
            Le nouveau standard pour votre santé.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 w-full"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col border-t border-foreground/20 pt-8 transition-colors hover:border-primary"
            >
              <div className="text-6xl md:text-7xl font-light text-foreground/20 mb-8 group-hover:text-primary transition-colors">
                {feature.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
