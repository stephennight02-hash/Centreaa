import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";

interface FooterBottomProps {
  className?: string;
}

/**
 * Bande inférieure du footer.
 * Contient le copyright et les liens légaux.
 */
export function FooterBottom({ className }: FooterBottomProps) {
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 text-xs text-muted-foreground sm:flex-row",
        className
      )}
    >
      <p>
        © {year}{" "}
        <Link
          href="/"
          className="font-medium text-foreground/70 transition-colors hover:text-foreground"
        >
          {siteConfig.name}
        </Link>
        {" "}– Tous droits réservés
      </p>

      <nav aria-label="Liens légaux">
        <ul role="list" className="flex items-center gap-4">
          {footerNav.legal.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
