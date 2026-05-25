"use client";

import { useState } from "react";
import { useScrollActivity } from "@/hooks/useScrollActivity";
import { ChatWindow } from "@/components/ChatWindow";
import { HamburgerButton } from "@/components/HamburgerButton";
import { MobileMenuOverlay } from "@/components/MobileMenuOverlay";
import { RouteTransition } from "@/components/RouteTransition";
import { SiteHeader } from "@/components/SiteHeader";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentScroll = useScrollActivity();

  return (
    <div className="h-dvh overflow-hidden bg-[#F5F1ED] text-[#001C33]">
      <SiteHeader />

      <div className="hidden h-full grid-cols-[minmax(0,1fr)_480px] gap-8 px-8 pt-24 pb-8 lg:grid xl:grid-cols-[minmax(0,1fr)_520px] xl:px-12">
        <main className="relative h-full overflow-hidden rounded-[32px] bg-canvas/45 shadow-sm shadow-[#001C33]/5">
          <div
            onScroll={contentScroll.onScroll}
            className={`scrollbar-dynamic h-full overflow-y-auto px-10 py-12 ${
              contentScroll.isScrolling ? "is-scrolling" : ""
            }`}
          >
            <div className="mx-auto max-w-2xl">
              <RouteTransition>{children}</RouteTransition>
            </div>
          </div>
          {contentScroll.hasScrollableContent ? (
            <div className="pointer-events-none absolute top-6 right-2 bottom-6 z-10 w-1">
              <div
                style={contentScroll.thumbStyle}
                className={`scrollbar-overlay-thumb w-full rounded-full bg-[#001C33]/25 ${
                  contentScroll.isScrolling ? "is-scrolling" : ""
                }`}
              />
            </div>
          ) : null}
        </main>

        <aside className="flex h-full items-center justify-center">
          <div className="h-[844px] max-h-[calc(100dvh-128px)] w-[430px] overflow-hidden rounded-[24px] border border-white/50 bg-canvas shadow-2xl shadow-[#001C33]/18">
            <ChatWindow />
          </div>
        </aside>
      </div>

      <div className="relative h-full lg:hidden">
        <ChatWindow />
        <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen((current) => !current)} />
        <MobileMenuOverlay isOpen={isMenuOpen}>{children}</MobileMenuOverlay>
      </div>
    </div>
  );
}
