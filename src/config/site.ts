/**
 * Configuration globale du site Centreaa.
 * Modifier ce fichier pour mettre à jour les informations du site sans toucher aux composants.
 */
export const siteConfig = {
  name: "Centreaa",
  tagline: "Centre médico-sportif pluridisciplinaire",
  description:
    "Centreaa accompagne sportifs professionnels, amateurs, enfants et personnes en rééducation avec une approche médicale moderne et une expertise pluridisciplinaire.",
  url: "https://centrea.fr",
  locale: "fr_FR",
  lang: "fr",

  /** Coordonnées. */
  contact: {
    address: {
      street: "Rue du Chemin Vert 29",
      city: "Lodelinsart",
      postalCode: "",
      country: "Belgique",
    },
    phone: "[Numéro de téléphone]",
    email: "thomas_dehaes@hotmail.com",
    googleMapsUrl: "https://maps.google.com",
    googleMapsEmbedUrl: "https://maps.google.com/maps?output=embed",
  },

  /** Horaires d'ouverture. */
  hours: {
    weekdays: "Lundi – Vendredi : 8h – 20h",
    saturday: "Samedi : 8h – 18h",
    sunday: "Dimanche : Fermé",
  },

  /** Réseaux sociaux. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },

  /** Configuration du CTA principal du Header. */
  headerCta: {
    enabled: false,
    label: "Prendre rendez-vous",
    href: "/prise-de-rendez-vous",
    variant: "default" as const,
  },

  /** Configuration de l'AnnouncementBar. */
  announcement: {
    enabled: false,
    message: "",
    href: "",
    cta: "",
  },

  /** SEO par défaut. */
  seo: {
    title: "Centreaa – Centre médico-sportif pluridisciplinaire",
    description:
      "Centreaa : kinésithérapie, médecine du sport, rééducation et prévention des blessures. Expert du mouvement pour tous les profils.",
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image" as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
