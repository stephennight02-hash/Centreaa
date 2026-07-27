"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ArrowRight, Heart, Users, Target } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function PresentationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main className="w-full bg-background" ref={containerRef}>
      
      {/* 1. Hero Section (NOIR) */}
      <Section className="w-full pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            <h1 className="text-sm font-semibold tracking-widest uppercase text-primary mb-8">
              Présentation
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight mb-8">
              [Titre de la présentation]
              <br />
              <span className="text-foreground/40 italic">[Sous-titre accrocheur]</span>
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 2. L'origine (NOIR) */}
      <Section className="w-full py-16 md:py-32 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <MediaPlaceholder 
                type="image" 
                brief="Photo authentique de Thomas Dehaes."
                format="Portrait (3:4)"
                className="w-full h-full"
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-medium mb-8 leading-tight text-foreground"
              >
                [Titre de la section origines]
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-lg md:text-xl text-foreground/70 leading-relaxed font-light"
              >
                <p>
                  [Paragraphe de maquette expliquant la genèse du projet. C'est ici que viendra le texte final décrivant l'ambition de Thomas, son constat sur le terrain et sa volonté de créer un centre différent.]
                </p>
                <p>
                  [Second paragraphe de maquette. Un texte factice pour donner l'illusion de la longueur finale, mettant en avant la philosophie globale et la vision humaine du centre.]
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. L'approche Multidisciplinaire (BLANC LAIT) avec design "Voûte" (Arrondi) */}
      <section className="w-full bg-foreground text-background relative -mt-16 md:-mt-24 rounded-t-[3rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
        <div className="w-full py-24 md:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            
            <div className="mb-16 md:mb-24 w-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight w-full"
              >
                [Titre de la section] <span className="text-primary italic">[synergie]</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Heart,
                  title: "[Valeur 1]",
                  desc: "[Texte d'explication factice pour décrire l'approche humaine et personnalisée du centre.]"
                },
                {
                  icon: Users,
                  title: "[Valeur 2]",
                  desc: "[Texte d'explication factice pour décrire la force de l'équipe et la pluridisciplinarité.]"
                },
                {
                  icon: Target,
                  title: "[Valeur 3]",
                  desc: "[Texte d'explication factice pour mettre en avant l'accompagnement vers la performance.]"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-background border border-background/10 rounded-3xl p-8 flex flex-col items-start transition-all hover:shadow-2xl group cursor-default relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <feature.icon strokeWidth={1.5} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4 text-foreground relative z-10">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed font-light relative z-10">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conclusion / CTA (NOIR) avec design Voûte Inversé ou Droit */}
      <Section className="w-full py-24 md:py-32 bg-background relative overflow-hidden z-10">
        <motion.div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--foreground) 2px, transparent 2px)`,
            backgroundSize: `24px 24px`,
            y: y2
          }}
        />
        
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-foreground"
          >
            [Appel à l'action final]
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/equipe"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold uppercase tracking-widest hover:scale-105 transition-transform group shadow-xl"
            >
              [Bouton Action]
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

    </main>
  );
}
