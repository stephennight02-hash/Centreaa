"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/layout";

interface NavLinkProps {
  item: NavItem;
  /** Variant de couleur selon l'état du header. */
  variant?: "light" | "default";
  className?: string;
}

/**
 * Lien de navigation individuel.
 *
 * – Détecte automatiquement l'état actif via usePathname.
 * – Supporte une variante "light" pour le header transparent.
 * – Prêt à accueillir un indicateur visuel pour les items avec children (mega menu).
 * – Animation underline discrète au survol.
 */
export function NavLink({ item, variant = "default", className }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);

  const hasChildren = item.children && item.children.length > 0;

  if (item.disabled) {
    return (
      <span
        className={cn(
          "inline-flex cursor-not-allowed items-center gap-1 text-sm opacity-50",
          className
        )}
        aria-disabled
      >
        {item.label}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // État par défaut (sur fond menu Blanc Lait)
        variant === "default" && [
          "text-card-foreground/70 hover:text-card-foreground",
          isActive && "text-card-foreground",
        ],
        // État light (sur header transparent, fond Noir Profond)
        variant === "light" && [
          "text-foreground/80 hover:text-foreground",
          isActive && "text-foreground",
        ],
        className
      )}
    >
      {item.label}

      {/* Indicateur mega-menu futur */}
      {hasChildren && (
        <svg
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180",
            variant === "light" ? "text-foreground/60" : "text-card-foreground/40"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}

      {/* Underline animé */}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px transition-all duration-300 ease-out",
          variant === "light" ? "bg-foreground" : "bg-card-foreground",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
        aria-hidden
      />
    </Link>
  );
}
