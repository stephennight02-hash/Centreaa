import { NavLink } from "./NavLink";
import type { NavItem } from "@/types/layout";
import { cn } from "@/lib/utils";

interface NavbarProps {
  items: NavItem[];
  variant?: "light" | "default";
  className?: string;
}

/**
 * Barre de navigation desktop.
 *
 * – Server Component : pas d'état local, pas d'event handlers.
 * – Délègue toute la logique interactive à NavLink (Client Component).
 * – Prévu pour accueillir des mega menus via le portail de chaque NavLink.
 */
export function Navbar({ items, variant = "default", className }: NavbarProps) {
  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className={cn("hidden items-center gap-6 lg:flex", className)}
    >
      {items.map((item) => (
        <NavLink key={item.id} item={item} variant={variant} />
      ))}
    </nav>
  );
}
