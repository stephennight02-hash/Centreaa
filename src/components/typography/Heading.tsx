import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({
  className,
  level = 2,
  ...props
}: HeadingProps) {
  const Component = `h${level}` as React.ElementType

  return (
    <Component
      className={cn(
        "font-semibold tracking-tight",
        {
          "text-4xl md:text-5xl lg:text-6xl": level === 1,
          "text-3xl md:text-4xl lg:text-5xl": level === 2,
          "text-2xl md:text-3xl": level === 3,
          "text-xl md:text-2xl": level === 4,
          "text-lg md:text-xl": level === 5,
          "text-base md:text-lg": level === 6,
        },
        className
      )}
      {...props}
    />
  )
}
