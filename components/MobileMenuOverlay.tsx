"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollActivity } from "@/hooks/useScrollActivity";
import { navItems } from "@/lib/siteContent";
import { RouteTransition } from "@/components/RouteTransition";

type MobileMenuOverlayProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function MobileMenuOverlay({ isOpen, children }: MobileMenuOverlayProps) {
  const pathname = usePathname();
  const menuScroll = useScrollActivity();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.aside
          key="mobile-menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="fixed inset-0 z-40 overflow-hidden bg-[#F5F1ED]/95 text-[#001C33] backdrop-blur-xl lg:hidden"
        >
          <div
            onScroll={menuScroll.onScroll}
            className={`scrollbar-dynamic h-full overflow-y-auto px-5 pt-36 pb-10 ${
              menuScroll.isScrolling ? "is-scrolling" : ""
            }`}
          >
            <nav className="mb-10 grid gap-4 text-[24px] font-semibold tracking-[-0.04em]">
              <Link
                href="/"
                className={pathname === "/" ? "text-[#4065F8]" : "text-[#001C33]"}
              >
                Main
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "text-[#4065F8]" : "text-[#001C33]"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="rounded-[28px] bg-canvas/70 p-5 shadow-xl shadow-[#001C33]/8">
              <RouteTransition>{children}</RouteTransition>
            </div>
          </div>
          {menuScroll.hasScrollableContent ? (
            <div className="pointer-events-none absolute top-32 right-1 bottom-8 z-10 w-1">
              <div
                style={menuScroll.thumbStyle}
                className={`scrollbar-overlay-thumb w-full rounded-full bg-[#001C33]/25 ${
                  menuScroll.isScrolling ? "is-scrolling" : ""
                }`}
              />
            </div>
          ) : null}
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
