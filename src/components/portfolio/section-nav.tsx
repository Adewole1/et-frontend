import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

export type SectionNavItem = {
  id: string;
  label: string;
};

export const portfolioSections: SectionNavItem[] = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "insights", label: "Insights" },
  { id: "about", label: "About" },
  { id: "books", label: "Books" },
  { id: "contact", label: "Contact" },
];

type SectionNavProps = {
  items: readonly SectionNavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  ariaLabel?: string;
  navigationId?: string;
};

type NavItemsProps = Pick<SectionNavProps, "items" | "activeId"> & {
  onSelect: (id: string) => void;
};

type FloatingPosition = {
  x: number;
  y: number;
  horizontal: "left" | "right";
  vertical: "top" | "bottom";
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  moved: boolean;
};

function NavItems({ items, activeId, onSelect }: NavItemsProps) {
  return (
    <div className="relative">
      <span className="absolute top-[18px] right-[3.5px] bottom-[18px] w-px bg-white/15" />
      {items.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          aria-current={activeId === id ? "location" : undefined}
          className={`relative z-10 flex w-full cursor-pointer items-center justify-end gap-2.5 py-2.5 font-mono text-[11px] tracking-[0.04em] transition-colors ${
            activeId === id ? "font-semibold text-white" : "text-white/60 hover:text-white"
          }`}
        >
          {label}
          <span
            className={`size-[7px] shrink-0 rounded-full ${
              activeId === id
                ? "bg-(--accent) shadow-[0_0_0_3px_rgba(255,255,255,.15)]"
                : "bg-white/35"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function SectionNav({
  items,
  activeId,
  onNavigate,
  ariaLabel = "Page sections",
  navigationId,
}: SectionNavProps) {
  const [openContext, setOpenContext] = useState<string | null>(null);
  const [floatingPosition, setFloatingPosition] = useState<FloatingPosition | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);
  const navigationContext = `${navigationId ?? "section-nav"}:${activeId}`;
  const mobileOpen = openContext === navigationContext;
  const horizontal = floatingPosition?.horizontal ?? "right";
  const vertical = floatingPosition?.vertical ?? "bottom";

  useEffect(() => {
    const reset = window.setTimeout(() => setOpenContext(null), 0);
    return () => window.clearTimeout(reset);
  }, [activeId, navigationId]);

  useEffect(() => {
    const handleOutsidePress = (event: PointerEvent) => {
      if (
        mobileOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setOpenContext(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenContext(null);
    };

    document.addEventListener("pointerdown", handleOutsidePress);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePress);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const keepInsideViewport = () => {
      setFloatingPosition((current) => {
        if (!current) return current;

        const x = Math.min(Math.max(current.x, 8), window.innerWidth - 56);
        const y = Math.min(Math.max(current.y, 8), window.innerHeight - 56);

        return {
          x,
          y,
          horizontal: x + 24 < window.innerWidth / 2 ? "left" : "right",
          vertical: y + 24 < window.innerHeight / 2 ? "top" : "bottom",
        };
      });
    };

    window.addEventListener("resize", keepInsideViewport);
    return () => window.removeEventListener("resize", keepInsideViewport);
  }, []);

  const selectItem = (id: string) => {
    setOpenContext(null);
    onNavigate(id);
  };

  const handleDragStart = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const bounds = mobileNavRef.current?.getBoundingClientRect();
    if (!bounds) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: bounds.left,
      originY: bounds.top,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.moved && Math.hypot(deltaX, deltaY) < 5) return;
    drag.moved = true;

    const x = Math.min(Math.max(drag.originX + deltaX, 8), window.innerWidth - 56);
    const y = Math.min(Math.max(drag.originY + deltaY, 8), window.innerHeight - 56);

    setFloatingPosition({
      x,
      y,
      horizontal: x + 24 < window.innerWidth / 2 ? "left" : "right",
      vertical: y + 24 < window.innerHeight / 2 ? "top" : "bottom",
    });
  };

  const handleDragEnd = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    suppressClickRef.current = drag.moved;
    dragRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleMobileClick = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    setOpenContext(navigationContext);
  };

  const panelAnchor =
    vertical === "bottom"
      ? horizontal === "right"
        ? "right-0 bottom-0 origin-bottom-right"
        : "bottom-0 left-0 origin-bottom-left"
      : horizontal === "right"
        ? "top-0 right-0 origin-top-right"
        : "top-0 left-0 origin-top-left";

  const collapsedOffset = horizontal === "right" ? "translate-x-3" : "-translate-x-3";

  return (
    <>
      <nav
        aria-label={ariaLabel}
        className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 rounded-xl bg-[#0a0c10]/60 px-4 py-3.5 text-white backdrop-blur-xl md:block lg:right-8"
      >
        <NavItems items={items} activeId={activeId} onSelect={selectItem} />
      </nav>

      <div
        ref={mobileNavRef}
        style={floatingPosition ? { left: floatingPosition.x, top: floatingPosition.y } : undefined}
        className={`fixed z-40 size-12 md:hidden ${floatingPosition ? "" : "right-4 bottom-5"}`}
      >
        <button
          type="button"
          aria-label={`Open ${ariaLabel.toLowerCase()}`}
          aria-expanded={mobileOpen}
          title="Drag to move, tap to open navigation"
          onClick={handleMobileClick}
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
          className={`absolute inset-0 grid touch-none cursor-grab place-items-center rounded-full transition-all duration-300 ease-out active:cursor-grabbing ${
            mobileOpen
              ? "pointer-events-none scale-50 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <span aria-hidden="true" className="nav-pulse-ring" />
          <span aria-hidden="true" className="nav-pulse-ring nav-pulse-ring-delayed" />
          <span className="relative size-3 rounded-full bg-(--accent) shadow-[0_0_0_5px_rgba(10,12,16,.7)]" />
        </button>

        <nav
          aria-label={ariaLabel}
          aria-hidden={!mobileOpen}
          className={`absolute min-w-36 rounded-xl bg-[#0a0c10]/85 px-4 py-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${panelAnchor} ${
            mobileOpen
              ? "visible translate-x-0 scale-100 opacity-100"
              : `invisible pointer-events-none scale-75 opacity-0 ${collapsedOffset}`
          }`}
        >
          <NavItems items={items} activeId={activeId} onSelect={selectItem} />
        </nav>
      </div>
    </>
  );
}
