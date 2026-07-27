"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp, fade, fadeDown, slideLeft, slideRight, scale } from "./variants";

type VariantType = "fade" | "fadeUp" | "fadeDown" | "slideLeft" | "slideRight" | "scale";

const variantsMap = {
  fade,
  fadeUp,
  fadeDown,
  slideLeft,
  slideRight,
  scale,
};

interface AnimateInProps extends HTMLMotionProps<"div"> {
  variant?: VariantType;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

export function AnimateIn({
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  children,
  className,
  once = true,
  ...props
}: AnimateInProps) {
  const selectedVariant = variantsMap[variant];

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-50px" }}
      variants={selectedVariant}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
