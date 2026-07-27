"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

/**
 * Section "Contact rapide"
 * Design fluide intégré au fond noir, sans boîte enfermante.
 */
export function HomeContact() {
  const { contact, hours, name } = siteConfig;

  return (
    <Section id="contact" className="w-full py-16 md:py-32 bg-background border-t border-foreground/10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Infos Contact */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6"
            >
              Prendre contact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight mb-12 md:mb-16"
            >
              Prêt à commencer votre parcours ?
            </motion.p>

            <div className="space-y-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-6 py-6 border-b border-foreground/10"
              >
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-medium mb-2">Notre adresse</h3>
                  <address className="not-italic text-foreground/60 leading-relaxed">
                    {name}<br />
                    {contact.address.street}<br />
                    {contact.address.postalCode} {contact.address.city}
                  </address>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-8"
              >
                <div className="flex items-start gap-6 py-6 border-b border-foreground/10 flex-1">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Horaires</h3>
                    <div className="text-foreground/60 space-y-1 text-sm leading-relaxed">
                      <p>{hours.weekdays}</p>
                      <p>{hours.saturday}</p>
                      <p>{hours.sunday}</p>
                    </div>
                  </div>
                </div>
                
                {contact.phone && (
                  <div className="flex items-start gap-6 py-6 border-b border-foreground/10 flex-1">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Téléphone</h3>
                      <Link 
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="h-14 rounded-full px-8 text-base transition-transform hover:scale-105" asChild>
                <Link href="/prise-de-rendez-vous">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden bg-foreground/5"
          >
            {contact.googleMapsEmbedUrl ? (
              <iframe
                src={contact.googleMapsEmbedUrl}
                title={`Localisation de ${name}`}
                className="h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={`Carte de localisation de ${name}`}
              />
            ) : (
              <MediaPlaceholder 
                type="image" 
                brief="Ici apparaîtra la carte Google Maps interactive (nécessite l'URL d'intégration dans la configuration)."
                format="Portrait"
                className="border-none bg-foreground/5"
              />
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
