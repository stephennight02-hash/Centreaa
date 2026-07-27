import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-black/40",
        "shadow-card",
        className
      )}
      {...props}
    />
  )
}
