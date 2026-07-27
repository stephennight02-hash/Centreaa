"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { AnnouncementBarProps } from "@/types/layout";

/**
 * Barre d'annonce en haut de page (au-dessus du header).
 *
 * – Désactivée par défaut via siteConfig.announcement.enabled = false.
 * – Dismissible avec animation de fermeture.
 * – Accepte un message, un lien optionnel et un CTA.
 * – Respecte prefers-reduced-motion.
 */
export function AnnouncementBar({
  message,
  href,
  cta,
  dismissible = true,
  className,
}: AnnouncementBarProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          key="announcement"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "relative z-50 overflow-hidden bg-primary text-primary-foreground",
            className
          )}
        >
          <div className="container mx-auto flex items-center justify-center gap-3 px-4 py-2.5 text-sm">
            <p className="flex items-center gap-2">
              {message}
              {href && cta && (
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 font-semibold underline-offset-2 hover:underline"
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </p>

            {dismissible && (
              <button
                onClick={() => setIsDismissed(true)}
                aria-label="Fermer l'annonce"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
