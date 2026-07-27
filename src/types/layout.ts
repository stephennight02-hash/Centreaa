/**
 * Types partagés pour le Layout global de Centrea.
 *
 * Centraliser les types ici permet aux équipes de travailler
 * avec un contrat clair et de refactoriser sans régression.
 */

// ─── Navigation ─────────────────────────────────────────────────────────────

export type { NavItem, NavChild } from "@/config/navigation";

// ─── SiteLayout ──────────────────────────────────────────────────────────────

/**
 * Comportement du Header dans le SiteLayout.
 *
 * - `"transparent"` : Transparent au chargement, glassmorphism au scroll (Hero plein écran).
 * - `"opaque"`      : Opaque dès le chargement, pas d'état initial transparent.
 * - `"sticky"`      : Toujours visible, jamais masqué, transition glassmorphism.
 * - `"none"`        : Aucun header (landing pages, espaces dédiés).
 */
export type HeaderMode = "transparent" | "opaque" | "sticky" | "none";

/**
 * Variante du Footer dans le SiteLayout.
 *
 * - `"default"` : Footer complet 4 colonnes.
 * - `"minimal"` : Bande basse uniquement (copyright + liens légaux).
 * - `"none"`    : Aucun footer (checkout, login, outils immersifs).
 */
export type FooterMode = "default" | "minimal" | "none";

/**
 * Comportement du scroll dans le SiteLayout.
 *
 * - `"floating"` : Navigation flottante compacte apparaît quand le header se masque.
 * - `"sticky"`   : Header reste toujours visible, ne se masque jamais.
 * - `"none"`     : Aucun comportement spécial au scroll (statique).
 */
export type ScrollBehaviorMode = "floating" | "sticky" | "none";

/**
 * Props du SiteLayout configurable.
 *
 * @example
 * // Page d'accueil avec Hero
 * <SiteLayout header="transparent" footer="default" scrollBehavior="floating" />
 *
 * @example
 * // Page de formation ou espace immersif
 * <SiteLayout header="none" footer="none" scrollBehavior="none" announcement={false} />
 *
 * @example
 * // Page intérieure classique (Contact, Blog...)
 * <SiteLayout header="opaque" footer="default" scrollBehavior="floating" />
 */
export interface SiteLayoutProps {
  children: React.ReactNode;

  /**
   * Mode du header.
   * @default "transparent"
   */
  header?: HeaderMode;

  /**
   * Mode du footer.
   * @default "default"
   */
  footer?: FooterMode;

  /**
   * Comportement du scroll.
   * @default "floating"
   */
  scrollBehavior?: ScrollBehaviorMode;

  /**
   * Afficher/masquer la barre d'annonce.
   * Si false, la barre est masquée même si `siteConfig.announcement.enabled` est true.
   * @default true (hérite de la config globale)
   */
  announcement?: boolean;

  /**
   * Afficher/masquer la barre de progression de scroll.
   * @default true
   */
  scrollProgress?: boolean;

  /**
   * Afficher/masquer le bouton BackToTop.
   * @default true
   */
  backToTop?: boolean;

  className?: string;
}

// ─── Header interne ──────────────────────────────────────────────────────────

/**
 * États du header selon la position de scroll.
 * - `initial`  : Header au chargement (transparent/discret)
 * - `scrolled` : Header glassmorphism après quelques pixels
 * - `hidden`   : Header masqué pendant un scroll vers le bas prolongé
 */
export type HeaderScrollState = "initial" | "scrolled" | "hidden";

/** Props internes du composant Header — dérivées de HeaderMode. */
export interface HeaderProps {
  mode: HeaderMode;
  scrollBehavior: ScrollBehaviorMode;
}

// ─── Logo ────────────────────────────────────────────────────────────────────

export type LogoVariant = "light" | "dark" | "auto";
export type LogoOrientation = "horizontal" | "vertical";

export interface LogoProps {
  variant?: LogoVariant;
  orientation?: LogoOrientation;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// ─── Social Links ────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: "instagram" | "facebook" | "linkedin" | "youtube" | "twitter";
  href: string;
  label: string;
}

// ─── Scroll ──────────────────────────────────────────────────────────────────

export interface ScrollProgressProps {
  /** Couleur de la barre de progression. Défaut : primary. */
  color?: string;
  /** Hauteur en pixels. Défaut : 2px. */
  height?: number;
  className?: string;
}

// ─── Announcement Bar ────────────────────────────────────────────────────────

export interface AnnouncementBarProps {
  message: string;
  href?: string;
  cta?: string;
  dismissible?: boolean;
  className?: string;
}
