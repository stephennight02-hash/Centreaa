"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { NavLink } from "./NavLink";
import { MobileDrawer } from "./MobileDrawer";
import { Logo } from "./Logo";
import { mainNav } from "@/config/navigation";
import type { HeaderProps } from "@/types/layout";

const floatingEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function Header({ scrollBehavior }: HeaderProps) {
  const { scrollState } = useScrollHeader({
    scrollThreshold: 20,
    hideThreshold: scrollBehavior === "sticky" ? Infinity : 150,
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isHiddenState = scrollState === "hidden" && scrollBehavior !== "sticky";

  return (
    <>
      <AnimatePresence>
        {!isHiddenState && (
          <motion.div
            key="floating-nav"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: floatingEase }}
            className={cn(
              "fixed inset-x-0 top-4 md:top-8 z-50 mx-auto w-[90%] md:w-fit",
              "flex items-center justify-between md:justify-center gap-4 md:gap-6 rounded-full",
              "border border-foreground/10 bg-background/95 text-foreground px-6 py-3",
              "shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            )}
          >
            <Logo variant="light" />
            
            <div className="hidden h-5 w-px bg-foreground/20 md:block" aria-hidden />
            
            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-6 md:flex"
            >
              {mainNav.map((item) => (
                <NavLink key={item.id} item={item} variant="light" />
              ))}
            </nav>
            
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Ouvrir le menu"
              className="flex h-10 w-10 md:h-8 md:w-8 items-center justify-center rounded-full text-foreground/80 hover:text-primary transition-colors md:hidden"
            >
              <Menu className="h-6 w-6 md:h-5 md:w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        items={mainNav}
      />
    </>
  );
}
