"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Calendar, Clock, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
}

const articles: Article[] = [
  {
    id: "portes-ouvertes",
    tag: "Événement",
    tagColor: "bg-primary",
    title: "Portes ouvertes le 3 août",
    excerpt: "[Description maquette de l'événement portes ouvertes. Venez découvrir nos locaux, rencontrer l'équipe et poser toutes vos questions.]",
    date: "3 août 2026",
  },
  {
    id: "article-2",
    tag: "Conseil",
    tagColor: "bg-foreground/20",
    title: "[Titre article maquette 2]",
    excerpt: "[Description maquette d'un article conseil sur la récupération sportive ou la nutrition.]",
    date: "[Date]",
  },
  {
    id: "article-3",
    tag: "Actualité",
    tagColor: "bg-foreground/20",
    title: "[Titre article maquette 3]",
    excerpt: "[Description maquette d'un article actualité du centre.]",
    date: "[Date]",
  },
];

function ArticleCard({ article, index, isHighlighted }: { article: Article; index: number; isHighlighted: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  if (isHighlighted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="col-span-1 md:col-span-2 rounded-3xl overflow-hidden border border-foreground/10 relative group cursor-pointer"
      >
        {/* Fond animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <motion.div 
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-primary/5"
        />

        <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className={`${article.tagColor} text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full`}>
                {article.tag}
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                À venir
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
              {article.title}
            </h2>

            <p className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <div className="flex items-center gap-6 text-foreground/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-light">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-light">Lodelinsart</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-light">[Horaire]</span>
              </div>
            </div>

            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest hover:scale-105 transition-transform group/link shadow-lg"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group p-6 md:p-8 flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <span className={`${article.tagColor} text-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
          {article.tag}
        </span>

        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-tight mt-6 mb-4 group-hover:text-primary transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-base text-foreground/50 font-light leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-foreground/10">
        <span className="text-sm text-foreground/40 font-light">{article.date}</span>
        <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
}

export default function ActualitesPage() {
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
              Actualités
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight mb-6">
              [Titre de la page actualités]
            </p>
            <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-3xl">
              [Sous-titre maquette]
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Grille Articles */}
      <Section className="w-full py-8 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {articles.map((article, idx) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={idx}
                isHighlighted={idx === 0}
              />
            ))}
          </div>
        </div>
      </Section>

    </main>
  );
}
