"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface HoverCardProps extends HTMLMotionProps<"div"> {}

export function HoverCard({ className, children, ...props }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-floating",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
