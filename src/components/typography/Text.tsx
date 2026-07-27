import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType
  variant?: "default" | "lead" | "large" | "small" | "muted"
}

export function Text({
  className,
  as: Component = "p",
  variant = "default",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        {
          "text-base leading-7": variant === "default",
          "text-xl text-muted-foreground": variant === "lead",
          "text-lg font-semibold": variant === "large",
          "text-sm font-medium leading-none": variant === "small",
          "text-sm text-muted-foreground": variant === "muted",
        },
        className
      )}
      {...props}
    />
  )
}
