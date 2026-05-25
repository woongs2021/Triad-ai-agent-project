"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/siteContent";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 hidden px-8 py-6 lg:block">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-bold tracking-[-0.02em] text-[#001C33] transition hover:text-[#4065F8]"
        >
          Triad AI UX Mentor
        </Link>
        <nav className="flex items-center gap-8 text-[13px] font-semibold tracking-[-0.01em]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive ? "text-[#4065F8]" : "text-[#001C33]/65 hover:text-[#001C33]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
