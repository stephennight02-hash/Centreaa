import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/header/Logo";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

/**
 * Footer principal de Centreaa.
 * Design noir épuré, une seule bande, pas de double footer.
 */
export function Footer() {
  const { contact, name } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-foreground/10 bg-background text-foreground"
    >
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

          {/* Colonne 1 : Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
              Centre médico-sportif pluridisciplinaire.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-4">Navigation</h3>
            <nav aria-label="Navigation du footer">
              <ul role="list" className="flex flex-wrap gap-x-6 gap-y-2">
                {mainNav.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-4">Contact</h3>
            <ul role="list" className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" aria-hidden />
                <address className="not-italic">
                  {contact.address.street}, {contact.address.city}
                </address>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-foreground/30" aria-hidden />
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  {contact.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bande basse unique */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/40">
          <p>© {year} {name} – Tous droits réservés</p>
          <nav aria-label="Liens légaux" className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
