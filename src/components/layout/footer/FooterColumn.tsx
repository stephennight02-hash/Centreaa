import { cn } from "@/lib/utils";
import type { FooterColumnProps } from "@/types/layout";

/**
 * Colonne réutilisable du footer.
 * Accepte n'importe quel contenu via children.
 */
export function FooterColumn({ title, children, className }: FooterColumnProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        {title}
      </h3>
      {children}
    </div>
  );
}
