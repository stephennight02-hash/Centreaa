import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { FooterMinimal } from "@/components/layout/footer/FooterMinimal";
import { ScrollProgress } from "@/components/layout/global/ScrollProgress";
import { BackToTop } from "@/components/layout/global/BackToTop";
import { AnnouncementBar } from "@/components/layout/global/AnnouncementBar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type {
  SiteLayoutProps,
  HeaderMode,
  FooterMode,
  ScrollBehaviorMode,
} from "@/types/layout";

/**
 * Valeurs par défaut du SiteLayout.
 * Regroupées ici pour être modifiées en un seul endroit si les conventions changent.
 */
const DEFAULTS = {
  header: "transparent" as HeaderMode,
  footer: "default" as FooterMode,
  scrollBehavior: "floating" as ScrollBehaviorMode,
  announcement: true,
  scrollProgress: true,
  backToTop: true,
} as const;

/**
 * Sélecteur de composant Footer selon le mode.
 * Centralisé ici pour que l'ajout d'un mode "newsletter" ou "checkout"
 * ne nécessite qu'une ligne supplémentaire.
 */
function FooterResolver({ mode }: { mode: FooterMode }) {
  if (mode === "none") return null;
  if (mode === "minimal") return <FooterMinimal />;
  return <Footer />;
}

/**
 * Layout global configurable de Centrea.
 *
 * Toute la personnalisation passe par les props — aucune duplication de layout.
 *
 * @example Page d'accueil (Hero plein écran)
 * ```tsx
 * <SiteLayout header="transparent" footer="default" scrollBehavior="floating" />
 * ```
 *
 * @example Page intérieure (Contact, Blog, Équipe)
 * ```tsx
 * <SiteLayout header="opaque" footer="default" scrollBehavior="floating" />
 * ```
 *
 * @example Header toujours visible (pages de lecture longue)
 * ```tsx
 * <SiteLayout header="sticky" scrollBehavior="sticky" />
 * ```
 *
 * @example Landing page ou espace de formation immersif
 * ```tsx
 * <SiteLayout header="none" footer="none" scrollBehavior="none" announcement={false} />
 * ```
 *
 * @example Checkout ou espace membre
 * ```tsx
 * <SiteLayout header="opaque" footer="minimal" scrollBehavior="sticky" announcement={false} />
 * ```
 */
export function SiteLayout({
  children,
  header = DEFAULTS.header,
  footer = DEFAULTS.footer,
  scrollBehavior = DEFAULTS.scrollBehavior,
  announcement = DEFAULTS.announcement,
  scrollProgress = DEFAULTS.scrollProgress,
  backToTop = DEFAULTS.backToTop,
  className,
}: SiteLayoutProps) {
  const { announcement: announcementConfig } = siteConfig;

  // L'annonce s'affiche uniquement si activée globalement ET non désactivée localement
  const showAnnouncement = announcement && announcementConfig.enabled;

  return (
    <div className={cn("relative flex min-h-screen flex-col", className)}>
      {/* Barre de progression de scroll */}
      {scrollProgress && <ScrollProgress />}

      {/* Barre d'annonce */}
      {showAnnouncement && (
        <AnnouncementBar
          message={announcementConfig.message}
          href={announcementConfig.href || undefined}
          cta={announcementConfig.cta || undefined}
        />
      )}

      {/* Header — rendu null si mode "none" */}
      {header !== "none" && (
        <Header mode={header} scrollBehavior={scrollBehavior} />
      )}

      {/* Contenu principal */}
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="flex-1 focus-visible:outline-none"
      >
        {children}
      </main>

      {/* Footer — FooterResolver gère les variantes */}
      <FooterResolver mode={footer} />

      {/* Bouton retour en haut */}
      {backToTop && <BackToTop />}
    </div>
  );
}
