import { Camera, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  /** Le brief pour le photographe/vidéaste (ce qu'on attend à cet endroit) */
  brief: string;
  /** Le type de média attendu */
  type?: "image" | "video";
  /** Format indicatif (ex: 16:9, Carré, Portrait) */
  format?: string;
  className?: string;
}

/**
 * Composant de maquettage premium.
 * Remplace les fausses images par un brief de production explicite.
 * Permet au client de visualiser l'intention et de préparer le shooting.
 */
export function MediaPlaceholder({
  brief,
  type = "image",
  format,
  className,
}: MediaPlaceholderProps) {
  const Icon = type === "video" ? Video : Camera;

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-muted/50 p-6 text-center shadow-inner",
        "border border-dashed border-border/80",
        className
      )}
    >
      {/* Motif géométrique très léger en fond pour donner un aspect premium même au placeholder */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm">
          <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground/80">
            {brief}
          </p>
          {format && (
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Format suggéré : {format}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
