"use client";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close site menu" : "Open site menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="fixed top-[86px] left-4 z-50 mt-[10px] mb-[10px] flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-canvas/80 text-[#001C33] shadow-lg shadow-[#001C33]/10 backdrop-blur-xl transition hover:text-[#4065F8] lg:hidden"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <span className="flex w-4 flex-col gap-1.5">
        <span
          className={`h-0.5 rounded-full bg-current transition ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 rounded-full bg-current transition ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}
