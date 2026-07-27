"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLockScroll } from "@/hooks/useLockScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { Logo } from "./Logo";
import type { NavItem } from "@/types/layout";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

const overlayVariants: Variants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
};

const staggerContainerVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * Menu mobile plein écran (très robuste, pas de bug de slide-in).
 * Style brut et premium avec grosse typographie.
 */
export function MobileDrawer({ isOpen, onClose, items }: MobileDrawerProps) {
  const pathname = usePathname();
  const { lockScroll, unlockScroll } = useLockScroll();
  const focusTrapRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          role="dialog"
          aria-modal="true"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={focusTrapRef as any}
          className="fixed inset-0 z-[100] flex flex-col bg-background text-foreground md:hidden"
        >
          {/* Header du menu */}
          <div className="flex items-center justify-between p-6">
            <Logo variant="light" />
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation massive */}
          <nav className="flex-1 flex flex-col justify-start pt-8 px-8">
            <motion.ul
              role="list"
              variants={staggerContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-6"
            >
              {items.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-4xl sm:text-5xl font-bold tracking-tighter transition-colors",
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
