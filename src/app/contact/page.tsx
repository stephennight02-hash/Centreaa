"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-foreground">
                  Envoyez-nous un message
                </h2>
                <p className="text-foreground/40 font-light mb-8">
                  [Texte maquette expliquant le formulaire]
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="[Votre nom]"
                        className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-colors text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        placeholder="[Votre prénom]"
                        className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-colors text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="[votre@email.com]"
                      className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      placeholder="[Sujet de votre message]"
                      className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-colors text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="[Votre message...]"
                      className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary transition-colors text-base resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Envoyé !
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

    </main>
  );
}
