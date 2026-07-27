"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

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
 * Section "Actualités"
 * Design éditorial fluide, grandes images droites.
 */
export function HomeNews() {
  return (
    <Section id="actualites" className="w-full py-16 md:py-32 bg-background border-t border-foreground/10">
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
              Actualités & Conseils
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight w-full"
            >
              Restez informé de la vie du centre.
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
              href="/blog" 
              className="inline-flex items-center text-sm md:text-base font-semibold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors group"
            >
              Voir tous les articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Article 1 */}
          <motion.article variants={cardVariants} className="group flex flex-col h-full cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-foreground/5">
              <MediaPlaceholder 
                type="image"
                brief="Image d'illustration : Matériel en action ou ambiance du centre."
                format="Portrait (4:5)"
                className="h-full w-full border-none transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs md:text-sm text-foreground/50 mb-4 uppercase tracking-widest font-medium">Catégorie • Date</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors line-clamp-2">
                [Titre de l'article ou de l'actualité à définir]
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed line-clamp-3 mb-8 flex-1">
                [Extrait de l'article pour donner un aperçu du contenu. Le texte sera ajouté une fois les rédactions terminées.]
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary relative w-fit">
                Lire l'article
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </motion.article>

          {/* Article 2 */}
          <motion.article variants={cardVariants} className="group flex flex-col h-full cursor-pointer hidden md:flex">
            <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-foreground/5">
              <MediaPlaceholder 
                type="image"
                brief="Image d'illustration : Praticien prodiguant un soin."
                format="Portrait (4:5)"
                className="h-full w-full border-none transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs md:text-sm text-foreground/50 mb-4 uppercase tracking-widest font-medium">Catégorie • Date</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors line-clamp-2">
                [Titre de l'article ou de l'actualité à définir]
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed line-clamp-3 mb-8 flex-1">
                [Extrait de l'article pour donner un aperçu du contenu. Le texte sera ajouté une fois les rédactions terminées.]
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary relative w-fit">
                Lire l'article
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </motion.article>

          {/* Article 3 */}
          <motion.article variants={cardVariants} className="group flex flex-col h-full cursor-pointer hidden lg:flex">
            <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-foreground/5">
              <MediaPlaceholder 
                type="image"
                brief="Image d'illustration : Focus sur un détail nutrition ou équipement."
                format="Portrait (4:5)"
                className="h-full w-full border-none transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-xs md:text-sm text-foreground/50 mb-4 uppercase tracking-widest font-medium">Catégorie • Date</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors line-clamp-2">
                [Titre de l'article ou de l'actualité à définir]
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed line-clamp-3 mb-8 flex-1">
                [Extrait de l'article pour donner un aperçu du contenu. Le texte sera ajouté une fois les rédactions terminées.]
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary relative w-fit">
                Lire l'article
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </motion.article>
        </motion.div>

        <div className="mt-12 md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
