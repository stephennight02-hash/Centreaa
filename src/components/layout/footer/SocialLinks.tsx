import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/layout";

/**
 * Icônes SVG inline pour les réseaux sociaux.
 * Lucide React v1 ne contient pas ces icônes de marque.
 * Ce choix garantit une indépendance totale vis-à-vis des mises à jour de Lucide.
 */
const SocialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
} as const;

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

/**
 * Liste de liens vers les réseaux sociaux.
 * Utilise des SVG inline de marque (Lucide n'en contient pas).
 * Filtre automatiquement les liens vides.
 */
export function SocialLinks({ links, className }: SocialLinksProps) {
  const activeLinks = links.filter((l) => l.href);

  if (activeLinks.length === 0) return null;

  return (
    <ul
      role="list"
      aria-label="Réseaux sociaux"
      className={cn("flex items-center gap-3", className)}
    >
      {activeLinks.map((link) => (
        <li key={link.platform}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-border/60 text-foreground/50",
              "transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            {SocialIcons[link.platform]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
