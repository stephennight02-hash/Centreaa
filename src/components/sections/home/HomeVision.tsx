"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Section } from "@/components/layout/Section";

const stats = [
  { value: 1500, label: "Patients accompagnés", prefix: "+" },
  { value: 15, label: "Années d'expérience", suffix: "" },
  { value: 5, label: "Spécialistes dédiés", suffix: "" },
  { value: 100, label: "Programmes sur-mesure", suffix: "%" },
];

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.ceil(val).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={nodeRef}>0</span>;
}

/**
 * Section "Vision / Philosophie"
 * Met en avant le côté humain et le message inclusif.
 * Design ultra large, horizontal et impactant.
 */
export function HomeVision() {
  return (
    <Section id="vision" className="w-full py-12 md:py-20 bg-background border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        
        {/* En-tête de section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-12"
        >
          Notre Philosophie
        </motion.h2>

        {/* Citation géante */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-snug md:leading-tight lg:leading-tight mb-12"
        >
          &ldquo;Redonner au corps sa pleine capacité, en traitant la personne dans sa globalité.&rdquo;
        </motion.blockquote>

        {/* Texte agrandi horizontalement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 md:mb-24"
        >
          <div className="h-px w-16 bg-primary mb-8" aria-hidden="true" />
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight text-foreground/80 font-medium w-full">
            Chez Centreaa, nous croyons qu'une prise en charge réussie ne se limite pas à un traitement technique. C'est avant tout une <strong className="text-foreground">rencontre humaine</strong>, une écoute active et un environnement qui inspire confiance et sérénité.
          </p>
        </motion.div>

        {/* Tableau des stats (Horizontal PC, Vertical Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-foreground/5 rounded-3xl p-8 md:p-12 border border-foreground/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-foreground/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-8 sm:pt-0 sm:px-4 first:pt-0">
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-4 flex items-baseline justify-center">
                  {stat.prefix && <span className="text-3xl md:text-4xl mr-1 text-primary">{stat.prefix}</span>}
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix && <span className="text-3xl md:text-4xl ml-1 text-primary">{stat.suffix}</span>}
                </div>
                <div className="text-sm md:text-base text-foreground/60 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
