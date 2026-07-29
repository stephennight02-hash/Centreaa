"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<string | false>(false);

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
              Contact
            </h1>
            <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight mb-6">
              [Titre de la page contact]
            </p>
            <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-3xl">
              [Sous-titre maquette]
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contenu */}
      <Section className="w-full py-8 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            
            {/* Infos de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-8 text-foreground">
                  Nos coordonnées
                </h2>
                <div className="w-12 h-px bg-primary mb-8" />
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: "Rue du Chemin Vert 29, Lodelinsart",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "thomas_dehaes@hotmail.com",
                    href: "mailto:thomas_dehaes@hotmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "[Numéro de téléphone]",
                  },
                  {
                    icon: Clock,
                    label: "Horaires",
                    value: "[Lun-Ven : 8h-19h / Sam : 9h-13h]",
                  },
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} className="text-lg text-foreground hover:text-primary transition-colors font-light">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-foreground font-light">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Carte Google Maps placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full aspect-video rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mt-4"
              >
                <div className="text-center text-foreground/30">
                  <MapPin className="w-10 h-10 mx-auto mb-3" />
                  <p className="text-sm tracking-widest uppercase">[Google Maps intégré ici]</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Mini Chatbot (FAQ) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="flex-1 rounded-3xl border border-foreground/10 bg-foreground/5 p-6 flex flex-col overflow-hidden max-h-[600px]">
                {/* Chat Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-foreground/10 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-foreground">
                      Assistant Centreaa
                    </h2>
                    <p className="text-sm text-foreground/50 font-light flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      En ligne
                    </p>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-6 scrollbar-thin scrollbar-thumb-foreground/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-background rounded-2xl rounded-tl-sm p-4 border border-foreground/10 text-sm md:text-base">
                      Bonjour ! 👋 Je suis l'assistant virtuel de Centreaa. Comment puis-je vous aider aujourd'hui ?
                    </div>
                  </div>

                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 flex-row-reverse"
                    >
                      <div className="w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">Vous</span>
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-4 text-sm md:text-base max-w-[85%]">
                        {submitted}
                      </div>
                    </motion.div>
                  )}

                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-background rounded-2xl rounded-tl-sm p-4 border border-foreground/10 text-sm md:text-base">
                        {submitted === "Quels sont vos tarifs ?" 
                          ? "Nos tarifs varient selon la spécialité (Kiné, Nutrition, Maderothérapie...). Le plus simple est de consulter notre page Prestations ou de nous appeler directement !"
                          : submitted === "Où êtes-vous situés ?"
                          ? "Nous sommes situés au Rue du Chemin Vert 29, Lodelinsart. Un parking est à votre disposition."
                          : "Vous pouvez prendre rendez-vous directement via notre plateforme en ligne 24h/24 !"}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* FAQ Buttons */}
                <div className="shrink-0 flex flex-col gap-2">
                  <p className="text-xs text-foreground/40 uppercase tracking-widest font-semibold mb-2 ml-2">Questions fréquentes</p>
                  {[
                    "Comment prendre rendez-vous ?",
                    "Quels sont vos tarifs ?",
                    "Où êtes-vous situés ?"
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => setSubmitted(q as any)}
                      className="text-left w-full bg-background border border-foreground/10 hover:border-primary hover:text-primary rounded-xl px-4 py-3 text-sm transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

    </main>
  );
}
