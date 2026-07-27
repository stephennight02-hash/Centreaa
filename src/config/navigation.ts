/**
 * Configuration de la navigation principale de Centrea.
 *
 * Structure extensible : chaque item peut contenir des sous-menus (children)
 * qui serviront de base pour les futurs Mega Menus.
 *
 * Règle d'architecture :
 * – Aucun lien ne doit jamais être codé en dur dans un composant.
 * – Toutes les modifications de menu passent par ce fichier.
 */

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string; // nom d'icône Lucide pour le mega menu futur
  badge?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  /** Ouvre un mega-menu si défini (non développé pour l'instant). */
  children?: NavChild[];
  /** Permet de marquer un item comme externe. */
  external?: boolean;
  /** Permet de désactiver temporairement un item. */
  disabled?: boolean;
}

export const mainNav: NavItem[] = [
  {
    id: "accueil",
    label: "Accueil",
    href: "/",
  },
  {
    id: "presentation",
    label: "Présentation",
    href: "/presentation",
  },
  {
    id: "specialistes",
    label: "Les spécialistes",
    href: "/equipe",
    // Prêt à accueillir un mega menu de membres de l'équipe
    children: [],
  },
  {
    id: "prestations",
    label: "Prestations",
    href: "/services",
    // Prêt à accueillir un mega menu par spécialité
    children: [],
  },
  {
    id: "actualites",
    label: "Actualités",
    href: "/blog",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

export const footerNav = {
  /** Navigation principale du footer. */
  main: mainNav,

  /** Liens légaux du footer. */
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
  ],
} as const;
