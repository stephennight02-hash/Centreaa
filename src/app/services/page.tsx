"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface Prestation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const prestations: Prestation[] = [
  {
    id: "kinesitherapie",
    title: "Kinésithérapie",
    subtitle: "[Sous-titre maquette]",
    description: "[Description maquette de la prestation kinésithérapie. Texte factice décrivant l'approche, les techniques utilisées et les bénéfices pour le patient.]",
    details: ["[Détail 1]", "[Détail 2]", "[Détail 3]", "[Détail 4]"],
  },
  {
    id: "nutrition",
    title: "Nutrition",
    subtitle: "[Sous-titre maquette]",
    description: "[Description maquette de la prestation nutrition. Texte factice décrivant l'approche, les techniques utilisées et les bénéfices pour le patient.]",
    details: ["[Détail 1]", "[Détail 2]", "[Détail 3]", "[Détail 4]"],
  },
  {
    id: "maderotherapie",
    title: "Madérothérapie",
    subtitle: "[Sous-titre maquette]",
    description: "[Description maquette de la prestation madérothérapie. Texte factice décrivant l'approche, les techniques utilisées et les bénéfices pour le patient.]",
    details: ["[Détail 1]", "[Détail 2]", "[Détail 3]", "[Détail 4]"],
  },
  {
    id: "prestation-4",
    title: "[Prestation 4]",
    subtitle: "[Sous-titre maquette]",
    description: "[Description maquette d'une prestation future. Texte factice décrivant l'approche, les techniques utilisées et les bénéfices pour le patient.]",
    details: ["[Détail 1]", "[Détail 2]", "[Détail 3]"],
  },
  {
    id: "prestation-5",
    title: "[Prestation 5]",
    subtitle: "[Sous-titre maquette]",
    description: "[Description maquette d'une prestation future. Texte factice décrivant l'approche, les techniques utilisées et les bénéfices pour le patient.]",
    details: ["[Détail 1]", "[Détail 2]", "[Détail 3]"],
  },
];

function AccordionItem({ prestation, index }: { prestation: Prestation; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-foreground/10 group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 md:py-10 text-left cursor-pointer"
      >
        <div className="flex items-baseline gap-6 md:gap-12 flex-1">
          <span className="text-sm md:text-base font-mono text-foreground/30 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {prestation.title}
            </h3>
            <p className="text-sm md:text-base text-foreground/40 mt-2 font-light">
              {prestation.subtitle}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:text-primary transition-colors"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-12 md:pl-24 pr-4 md:pr-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                  {prestation.description}
                </p>
                <div>
                  <ul className="space-y-3 mb-8">
                    {prestation.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-base font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/prise-de-rendez-vous"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest hover:scale-105 transition-transform group/link shadow-lg"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PrestationsPage() {
  return (
    <main className="w-full bg-background">
      
      {/* Hero */}
      <Section className="w-full pt-40 pb-8 md:pt-48 md:pb-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="text-sm font-semibold tracking-widest uppercase text-primary mb-8">
              Prestations
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight mb-6">
              [Titre de la page prestations]
            </p>
            <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-3xl">
              [Sous-titre maquette décrivant l'offre de soins]
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Accordéon des Prestations */}
      <Section className="w-full py-8 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="border-t border-foreground/10">
            {prestations.map((prestation, idx) => (
              <AccordionItem key={prestation.id} prestation={prestation} index={idx} />
            ))}
          </div>
        </div>
      </Section>

    </main>
  );
}
